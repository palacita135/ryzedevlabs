import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ContactModal } from './ContactModal';

interface NavbarProps {
  activeTab: string;
  setTab: (tab: string) => void;
}

export function Navbar({ activeTab, setTab }: NavbarProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View className="bg-slate-900/50 border-b border-slate-800/50 backdrop-blur-md">
        <View className="max-w-6xl mx-auto w-full px-4 py-3 md:py-5 flex-row justify-between items-center">

          {/* Logo */}
          <TouchableOpacity onPress={() => setTab('home')}>
            <Text className="text-white font-bold text-base md:text-xl tracking-tight">
              RyzeDev<Text className="text-emerald-400">Labs</Text>
            </Text>
          </TouchableOpacity>

          {/* Nav links */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <TouchableOpacity
              onPress={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/terrascan/';
                }
              }}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 8,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderWidth: 1,
                borderColor: 'rgba(52, 211, 153, 0.25)',
              }}
            >
              <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 13 }}>
                TerraScan
              </Text>
              <View
                style={{
                  backgroundColor: 'rgba(52, 211, 153, 0.2)',
                  paddingHorizontal: 6,
                  paddingVertical: 1,
                  borderRadius: 12,
                }}
              >
                <Text style={{ color: '#34d399', fontSize: 10, fontWeight: '700', letterSpacing: 0.5 }}>
                  NEW
                </Text>
              </View>
            </TouchableOpacity>

            {/* Connect CTA */}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'rgba(52,211,153,0.12)',
                borderWidth: 1,
                borderColor: 'rgba(52,211,153,0.35)',
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 50,
              }}
            >
              <Ionicons name="power" size={15} color="#34d399" />
              <Text style={{ color: '#34d399', fontWeight: '700', fontSize: 13 }}>
                Connect
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ContactModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
