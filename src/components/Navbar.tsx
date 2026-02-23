import React from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';

interface NavbarProps {
  activeTab: string;
  setTab: (tab: string) => void;
}

export function Navbar({ activeTab, setTab }: NavbarProps) {
  const tabs = [
    { id: 'home', label: 'Home' }
  ];

  return (
    <View className="bg-slate-900/50 border-b border-slate-800/50 backdrop-blur-md">
      <View className="max-w-6xl mx-auto w-full px-4 py-4 md:py-6 flex-row justify-between items-center">
        {/* Logo */}
        <TouchableOpacity onPress={() => setTab('home')}>
          <View className="flex-row items-center gap-3">
            <Text className="text-white font-bold text-xl tracking-tight hidden md:flex">
              RyzeDev<Text className="text-emerald-400">Labs</Text>
            </Text>
          </View>
        </TouchableOpacity>

        {/* Navigation Links */}
        <View className="flex-row gap-2 md:gap-6 bg-slate-800/50 p-1 md:p-2 rounded-full border border-slate-700/50">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setTab(tab.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-slate-700 shadow-sm' : 'hover:bg-slate-700/50'
                }`}
              >
                <Text 
                  className={`font-semibold text-sm md:text-base ${
                    isActive ? 'text-emerald-400' : 'text-slate-400'
                  }`}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
