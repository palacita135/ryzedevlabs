import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';

export default function HomeScreen({ setTab }: { setTab: (t: string) => void }) {
  return (
    <ScrollView className="flex-1">
      <View className="p-8 max-w-4xl mx-auto flex-col justify-center min-h-[80vh]">
        <View className="mb-8 items-start">
          <Text className="text-emerald-400 font-bold tracking-widest uppercase mb-2 text-sm">
            Welcome to RyzeDev Labs
          </Text>
        </View>
        <Text className="text-white text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-none">
          Building Future - with us.
        </Text>
        <Text className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
          We bridge the gap between complex aerospace hardware and intelligent software systems to solve real-world industrial problems.
        </Text>

      </View>
    </ScrollView>
  );
}
