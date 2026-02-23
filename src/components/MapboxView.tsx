import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';

export const MapboxView = () => {
  if (Platform.OS === 'web') {
    return (
      <View className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center">
        <View className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/12/655/1582.png')] opacity-20" />
        <Text className="text-emerald-500 font-mono font-bold">GPS LOCK ESTABLISHED</Text>
        <Text className="text-slate-400 font-mono text-xs mt-1">N 37° 46' 29.6" W 122° 25' 9.8"</Text>
        <Text className="text-slate-600 font-mono text-[10px] mt-4">Web Map Shim Active (MVT Offline)</Text>
      </View>
    );
  }

  // Native-only import to prevent web crash
  const MapView = require('react-native-maps').default;
  const { Polyline, Marker, PROVIDER_GOOGLE } = require('react-native-maps');
  
  const flightPath = [
    { latitude: 37.7749, longitude: -122.4194 },
    { latitude: 37.7770, longitude: -122.4160 },
  ];

  return (
    <View className="flex-1 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg shadow-black/40">
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.7760,
          longitude: -122.4175,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
      </MapView>
    </View>
  );
};
