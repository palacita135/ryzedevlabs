<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Method not allowed']); exit();
}

$data    = json_decode(file_get_contents('php://input'), true);
$name    = isset($data['name'])    ? trim($data['name'])    : '';
$email   = isset($data['email'])   ? trim($data['email'])   : '';
$subject = isset($data['subject']) ? trim($data['subject']) : 'Inquiry from ' . $name;
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'error' => 'Name, email, and message are required.']); exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid email format.']); exit();
}

// ── SMTP config ────────────────────────────────────────────────────────────────
$smtpHost = 'smtp.hostinger.com';
$smtpPort = 465;
$smtpUser = 'info@ryzedevlabs.com';
$smtpPass = '@BurgerKing135';   // <-- replace with your actual password
$fromName = 'RyzeDev Labs';
$toEmail  = 'info@ryzedevlabs.com';

// Read full multi-line SMTP response (handles 250- continuation lines)
function smtpRead($socket) {
    $out = '';
    while ($line = fgets($socket, 512)) {
        $out .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') break;
    }
    return $out;
}

function smtpCmd($socket, $cmd, $expectedCode) {
    fwrite($socket, $cmd);
    $resp = smtpRead($socket);
    if (substr($resp, 0, 3) !== $expectedCode) {
        return "Expected {$expectedCode}, got: " . trim($resp);
    }
    return true;
}

function sendSmtpMail($host, $port, $user, $pass, $toEmail, $toName, $replyTo, $subject, $body) {
    $socket = @fsockopen("ssl://{$host}", $port, $errno, $errstr, 30);
    if (!$socket) return "Cannot connect to SMTP: {$errstr} ({$errno})";

    $greeting = smtpRead($socket);
    if (substr($greeting, 0, 3) !== '220') return "Bad greeting: " . trim($greeting);

    $r = smtpCmd($socket, "EHLO ryzedevlabs.com\r\n", '250');
    if ($r !== true) { fclose($socket); return "EHLO failed: $r"; }

    $r = smtpCmd($socket, "AUTH LOGIN\r\n", '334');
    if ($r !== true) { fclose($socket); return "AUTH LOGIN failed: $r"; }

    $r = smtpCmd($socket, base64_encode($user) . "\r\n", '334');
    if ($r !== true) { fclose($socket); return "Username failed: $r"; }

    $r = smtpCmd($socket, base64_encode($pass) . "\r\n", '235');
    if ($r !== true) { fclose($socket); return "Password failed: $r"; }

    $r = smtpCmd($socket, "MAIL FROM:<{$user}>\r\n", '250');
    if ($r !== true) { fclose($socket); return "MAIL FROM failed: $r"; }

    $r = smtpCmd($socket, "RCPT TO:<{$toEmail}>\r\n", '250');
    if ($r !== true) { fclose($socket); return "RCPT TO failed: $r"; }

    $r = smtpCmd($socket, "DATA\r\n", '354');
    if ($r !== true) { fclose($socket); return "DATA failed: $r"; }

    $encodedSubject  = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $encodedFromName = '=?UTF-8?B?' . base64_encode('RyzeDev Labs') . '?=';
    $msg  = "From: {$encodedFromName} <{$user}>\r\n";
    $msg .= "To: {$toName} <{$toEmail}>\r\n";
    $msg .= "Reply-To: {$replyTo}\r\n";
    $msg .= "Subject: {$encodedSubject}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/html; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $msg .= chunk_split(base64_encode($body));
    $msg .= "\r\n.\r\n";

    $r = smtpCmd($socket, $msg, '250');
    if ($r !== true) { fclose($socket); return "Send failed: $r"; }

    fwrite($socket, "QUIT\r\n");
    fclose($socket);
    return true;
}

// ── Email to RyzeDev Labs ──────────────────────────────────────────────────────
$companyBody = "
<html><body style='font-family:Arial,sans-serif;color:#0f172a;max-width:600px'>
  <h2 style='color:#34d399'>New Connection Request</h2>
  <p><b>Name:</b> " . htmlspecialchars($name) . "</p>
  <p><b>Email:</b> " . htmlspecialchars($email) . "</p>
  <p><b>Subject:</b> " . htmlspecialchars($subject) . "</p>
  <hr style='border-color:#e2e8f0'>
  <p><b>Message:</b></p>
  <p>" . nl2br(htmlspecialchars($message)) . "</p>
</body></html>";

$result = sendSmtpMail($smtpHost, $smtpPort, $smtpUser, $smtpPass,
    $toEmail, 'RyzeDev Labs', $email, 'New Inquiry: ' . $subject, $companyBody);

if ($result !== true) {
    echo json_encode(['success' => false, 'error' => 'Email failed: ' . $result]);
    exit();
}

// ── Confirmation email to visitor ─────────────────────────────────────────────
$confirmBody = "
<html><body style='font-family:Arial,sans-serif;color:#0f172a;max-width:600px'>
  <h2 style='color:#34d399'>We got your message!</h2>
  <p>Hi " . htmlspecialchars($name) . ",</p>
  <p>Thanks for reaching out to RyzeDev Labs. We'll review your message and get back to you shortly.</p>
  <p><b>Your message:</b></p>
  <p>" . nl2br(htmlspecialchars($message)) . "</p>
  <br><p>Talk soon,<br><b>RyzeDev Labs</b></p>
</body></html>";

sendSmtpMail($smtpHost, $smtpPort, $smtpUser, $smtpPass,
    $email, htmlspecialchars($name), $smtpUser,
    'We received your message — RyzeDev Labs', $confirmBody);

echo json_encode(['success' => true]);
