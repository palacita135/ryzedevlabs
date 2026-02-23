import React from 'react';
import { View, Text } from 'react-native';

const LogItem = ({ label, value, status }: { label: string, value: string, status: 'ok' | 'warn' | 'err' }) => {
  const statusColor = status === 'ok' ? 'text-emerald-400' : status === 'warn' ? 'text-amber-400' : 'text-red-400';
  return (
    <View className="flex-row justify-between items-center py-3 border-b border-slate-800/60 last:border-b-0">
      <Text className="text-slate-400 font-medium text-xs">{label}</Text>
      <Text className={`font-mono font-bold text-xs tracking-wider ${statusColor}`}>{value}</Text>
    </View>
  );
};

export const DataGrid = () => {
  return (
    <View className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-lg shadow-black/40">
      <Text className="text-slate-300 font-bold tracking-widest uppercase text-xs mb-4">Sensor Logs</Text>
      
      <View className="bg-slate-950 rounded-xl px-4 py-1 border border-slate-800">
        <LogItem label="Ext. Temperature" value="24.5 °C" status="ok" />
        <LogItem label="Humidity" value="68 %" status="warn" />
        <LogItem label="LiDAR Status" value="ACTIVE" status="ok" />
        <LogItem label="IMU Calibration" value="OK" status="ok" />
        <LogItem label="Obstacle Avoid" value="STANDBY" status="warn" />
      </View>
    </View>
  );
};
