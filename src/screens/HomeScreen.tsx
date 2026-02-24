import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';

export default function HomeScreen({ setTab }: { setTab: (t: string) => void }) {
  return (
    <ScrollView className="flex-1">
      <View className="px-5 py-10 md:p-8 max-w-4xl mx-auto flex-col justify-center min-h-[80vh]">
        <View className="mb-6 md:mb-8 items-start">
          <Text className="text-emerald-400 font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">
            The lab is open
          </Text>
        </View>
        <Text className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-none">
          What if your hardware could think?
        </Text>
        <Text className="text-slate-400 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl">
          Most aerospace systems are powerful machines held back by disconnected software. We change that — fusing intelligent systems with real hardware to unlock capabilities most teams don't know are possible. Let's build something that surprises people.
        </Text>
      </View>
    </ScrollView>
  );
}
