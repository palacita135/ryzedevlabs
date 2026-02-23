import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking, TextInput } from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    Linking.openURL(`mailto:info@ryzedevlabs.com?subject=${subject}&body=${body}`);
  };

  return (
    <ScrollView className="flex-1">
      <View className="p-8 max-w-2xl mx-auto w-full mt-12">
        <Text className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm mt-8 text-center">
          Get in Touch
        </Text>
        <Text className="text-white text-5xl font-bold mb-6 text-center">
          Let's Build Together.
        </Text>
        <Text className="text-slate-400 text-lg text-center mb-12 leading-relaxed">
          We are currently available for freelance projects and dedicated partnerships. 
          If you are looking for a team that specializes in frontend performance and premium UI engineering, drop us a message.
        </Text>

        <View className="bg-slate-800 p-8 rounded-3xl border border-slate-700 w-full mb-12">
          <Text className="text-white text-2xl font-bold mb-6">Send us a message</Text>
          
          <View className="mb-4 w-full">
            <Text className="text-slate-400 mb-2 font-semibold">Name</Text>
            <TextInput 
              className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500"
              placeholder="Your Name"
              placeholderTextColor="#64748b"
              value={name}
              onChangeText={setName}
            />
          </View>
          
          <View className="mb-4 w-full">
            <Text className="text-slate-400 mb-2 font-semibold">Email</Text>
            <TextInput 
              className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500"
              placeholder="your@email.com"
              placeholderTextColor="#64748b"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="mb-8 w-full">
            <Text className="text-slate-400 mb-2 font-semibold">Message</Text>
            <TextInput 
              className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white h-32 outline-none focus:border-emerald-500"
              placeholder="How can we help?"
              placeholderTextColor="#64748b"
              multiline
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />
          </View>

          <TouchableOpacity
            style={{ shadowColor: '#34d399', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 }}
            className="bg-emerald-500 px-10 py-4 rounded-full w-full items-center"
            onPress={handleSubmit}
          >
            <Text className="text-slate-900 font-bold text-lg">Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
