import React from 'react';
import { View, Text } from 'react-native';

export const MapboxView = () => {
  return (
    <View className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
      <View className="absolute inset-0 bg-slate-800 opacity-20" />
      <Text className="text-emerald-500 font-mono font-bold tracking-widest text-sm">GPS LOCK: ESTABLISHED</Text>
      <Text className="text-slate-400 font-mono text-xs mt-2">N 37° 46' 29.6" W 122° 25' 9.8"</Text>
      <Text className="text-slate-600 font-mono text-[10px] mt-4 uppercase">Web Fallback Active (MVT Offline)</Text>
      <View className="absolute bottom-4 left-4 right-4 flex-row justify-between pointer-events-none">
        <View className="w-16 h-1 border-b-2 border-l-2 border-emerald-500/50" />
        <View className="w-16 h-1 border-b-2 border-r-2 border-emerald-500/50" />
      </View>
      <View className="absolute top-4 left-4 right-4 flex-row justify-between pointer-events-none">
        <View className="w-16 h-1 border-t-2 border-l-2 border-emerald-500/50" />
        <View className="w-16 h-1 border-t-2 border-r-2 border-emerald-500/50" />
      </View>
    </View>
  );
};
