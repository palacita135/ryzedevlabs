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

        {/* Featured Product: TerraScan */}
        <TouchableOpacity
          onPress={() => {
            if (typeof window !== 'undefined') {
              window.location.href = '/terrascan/';
            }
          }}
          activeOpacity={0.85}
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            borderColor: 'rgba(52, 211, 153, 0.3)',
            borderWidth: 1,
            borderRadius: 16,
            padding: 20,
            maxWidth: 620,
            marginTop: 4,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#34d399' }} />
              <Text style={{ color: '#34d399', fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' }}>
                Featured Software
              </Text>
            </View>
            <View style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 20 }}>
              <Text style={{ color: '#34d399', fontSize: 11, fontWeight: '700' }}>v0.1.0 Ready</Text>
            </View>
          </View>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '700', marginBottom: 6 }}>
            TerraScan Workstation
          </Text>
          <Text style={{ color: '#94a3b8', fontSize: 14, lineHeight: 20, marginBottom: 14 }}>
            Local desktop photogrammetry & LiDAR processing. High-precision 2D Orthomosaics, classified 3D terrain, and CUDA 3D Gaussian Splatting with zero cloud subscription fees.
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={{ color: '#34d399', fontSize: 13, fontWeight: '700' }}>
              Explore TerraScan Workstation →
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
