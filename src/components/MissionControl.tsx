import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const MissionControl = () => {
  return (
    <View className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-lg shadow-black/40">
      <Text className="text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">Mission Control</Text>
      
      <View className="flex-row items-center justify-between space-x-3">
        <TouchableOpacity className="flex-1 bg-emerald-600 active:bg-emerald-700 py-3 rounded-xl flex flex-row items-center justify-center space-x-2">
          <Feather name="upload" size={18} color="white" />
          <Text className="text-white font-bold text-sm uppercase tracking-wide">Takeoff</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-amber-600 active:bg-amber-700 py-3 rounded-xl flex flex-row items-center justify-center space-x-2">
          <Feather name="corner-up-left" size={18} color="white" />
          <Text className="text-white font-bold text-sm uppercase tracking-wide">RTL</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-indigo-600 active:bg-indigo-700 py-3 rounded-xl flex flex-row items-center justify-center space-x-2">
          <Feather name="play-circle" size={18} color="white" />
          <Text className="text-white font-bold text-sm uppercase tracking-wide">Survey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
