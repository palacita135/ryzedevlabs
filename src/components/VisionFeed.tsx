import React from 'react';
import { View, Text } from 'react-native';

const BoundingBox = ({ label, confidence, x, y, width, height, color }: any) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width,
        height,
        borderColor: color,
        borderWidth: 2,
      }}
    >
      <View style={{ backgroundColor: color, alignSelf: 'flex-start', paddingHorizontal: 4, paddingVertical: 2 }}>
        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
          {label} {confidence}%
        </Text>
      </View>
    </View>
  );
};

export const VisionFeed = () => {
  return (
    <View className="flex-1 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative shadow-lg shadow-black/40">
      {/* Background Frame Simulating Cam */}
      <View className="absolute inset-0 bg-slate-800 items-center justify-center">
        <Text className="text-slate-500 font-mono tracking-widest text-xs uppercase">RTSP Stream Active</Text>
        <Text className="text-slate-600 font-mono tracking-widest text-xs uppercase mt-2">No Signal • Emulating Feed</Text>
      </View>

      {/* Grid Overlay */}
      <View className="absolute inset-0 items-center justify-center opacity-30 pointer-events-none">
        <View className="w-8 h-[1px] bg-emerald-500" />
        <View className="w-[1px] h-8 bg-emerald-500 absolute" />
        <View className="absolute inset-x-0 h-[1px] top-1/3 bg-slate-500/20" />
        <View className="absolute inset-x-0 h-[1px] top-2/3 bg-slate-500/20" />
        <View className="absolute inset-y-0 w-[1px] left-1/3 bg-slate-500/20" />
        <View className="absolute inset-y-0 w-[1px] left-2/3 bg-slate-500/20" />
      </View>

      {/* Mock YOLO Detections */}
      <BoundingBox label="Cattle" confidence={98} x="10%" y="40%" width="15%" height="22%" color="#10b981" />
      <BoundingBox label="Cattle" confidence={87} x="28%" y="55%" width="12%" height="18%" color="#10b981" />
      <BoundingBox label="Sheep"  confidence={91} x="65%" y="60%" width="8%" height="12%" color="#3b82f6" />
      <BoundingBox label="Hazard" confidence={99} x="82%" y="15%" width="10%" height="15%" color="#ef4444" />

      {/* Stream Info Overlay */}
      <View className="absolute bottom-3 right-3 bg-black/60 px-3 py-1.5 rounded flex-row items-center">
        <View className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2" />
        <Text className="text-emerald-400 font-mono text-xs font-bold tracking-wider">REC • 4K 60FPS • YOLOv8</Text>
      </View>
    </View>
  );
};
