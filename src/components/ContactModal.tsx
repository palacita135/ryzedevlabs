import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ContactModalProps {
  visible: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactModal({ visible, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://ryzedevlabs.com/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: `Website Inquiry from ${name}`,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
      }
    } catch (e) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection.');
    }
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={handleClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.centeredView}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <View style={styles.card}>

              {/* Header */}
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Ionicons name="flash" size={18} color="#34d399" />
                  <Text style={styles.headerTitle}>Let's Connect</Text>
                </View>
                <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
                  <Ionicons name="close" size={20} color="#94a3b8" />
                </TouchableOpacity>
              </View>

              {/* ── Success state ── */}
              {status === 'success' ? (
                <View style={styles.successBox}>
                  <Ionicons name="checkmark-circle" size={52} color="#34d399" />
                  <Text style={styles.successTitle}>Message sent!</Text>
                  <Text style={styles.successSub}>
                    We'll get back to you soon. Check your inbox for a confirmation.
                  </Text>
                  <TouchableOpacity style={styles.doneBtn} onPress={handleClose}>
                    <Text style={styles.doneBtnText}>Done</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <Text style={styles.subtitle}>
                    Tell us what you're building — we'll take it from there.
                  </Text>

                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.fieldGroup}>
                      <Text style={styles.label}>Name</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Your name"
                        placeholderTextColor="#475569"
                        value={name}
                        onChangeText={setName}
                        editable={status !== 'sending'}
                      />
                    </View>

                    <View style={styles.fieldGroup}>
                      <Text style={styles.label}>Email</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="your@email.com"
                        placeholderTextColor="#475569"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        editable={status !== 'sending'}
                      />
                    </View>

                    <View style={styles.fieldGroup}>
                      <Text style={styles.label}>Message</Text>
                      <TextInput
                        style={[styles.input, styles.textarea]}
                        placeholder="What are you working on?"
                        placeholderTextColor="#475569"
                        multiline
                        textAlignVertical="top"
                        value={message}
                        onChangeText={setMessage}
                        editable={status !== 'sending'}
                      />
                    </View>

                    {/* Error */}
                    {status === 'error' && (
                      <View style={styles.errorBox}>
                        <Ionicons name="alert-circle" size={16} color="#f87171" />
                        <Text style={styles.errorText}>{errorMsg}</Text>
                      </View>
                    )}

                    {/* Submit */}
                    <TouchableOpacity
                      style={[styles.submitBtn, status === 'sending' && { opacity: 0.7 }]}
                      onPress={handleSubmit}
                      activeOpacity={0.85}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <ActivityIndicator color="#0f172a" />
                      ) : (
                        <>
                          <Ionicons name="send" size={16} color="#0f172a" style={{ marginRight: 8 }} />
                          <Text style={styles.submitText}>Send Message</Text>
                        </>
                      )}
                    </TouchableOpacity>

                    <Text style={styles.footer}>
                      Sent directly to info@ryzedevlabs.com
                    </Text>
                  </ScrollView>
                </>
              )}
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  centeredView: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 28,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#f1f5f9',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: '#64748b',
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#f1f5f9',
    fontSize: 15,
  },
  textarea: {
    height: 110,
    paddingTop: 12,
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(248,113,113,0.1)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  errorText: {
    color: '#f87171',
    fontSize: 13,
    flex: 1,
  },
  submitBtn: {
    flexDirection: 'row',
    backgroundColor: '#34d399',
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
    shadowColor: '#34d399',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  submitText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    color: '#475569',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },
  // Success state
  successBox: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 12,
  },
  successTitle: {
    color: '#f1f5f9',
    fontSize: 22,
    fontWeight: '700',
  },
  successSub: {
    color: '#64748b',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 8,
  },
  doneBtn: {
    marginTop: 8,
    backgroundColor: '#34d399',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  doneBtnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 15,
  },
});
