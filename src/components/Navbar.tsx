import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface NavbarProps {
  activeTab: string;
  setTab: (tab: string) => void;
}

export function Navbar({ activeTab, setTab }: NavbarProps) {
  return (
    <View className="bg-slate-900/50 border-b border-slate-800/50 backdrop-blur-md">
      <View className="max-w-6xl mx-auto w-full px-4 py-3 md:py-5 flex-row items-center">
        <TouchableOpacity onPress={() => setTab('home')}>
          <Text className="text-white font-bold text-base md:text-xl tracking-tight">
            RyzeDev<Text className="text-emerald-400">Labs</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
