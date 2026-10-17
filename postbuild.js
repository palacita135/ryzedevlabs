const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

const rootDir = __dirname;
const buildDir = path.join(rootDir, 'build');

if (fs.existsSync(buildDir)) {
  console.log('Running postbuild script: ensuring all assets exist in build/...');
  copyDir(path.join(rootDir, 'terrascan'), path.join(buildDir, 'terrascan'));
  copyFile(path.join(rootDir, 'ads.txt'), path.join(buildDir, 'ads.txt'));
  copyFile(path.join(rootDir, '.htaccess'), path.join(buildDir, '.htaccess'));
  copyFile(path.join(rootDir, 'send-email.php'), path.join(buildDir, 'send-email.php'));
  console.log('Postbuild completed successfully.');
}
