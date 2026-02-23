import React from 'react';
import { View, SafeAreaView, Platform, ScrollView, ImageBackground } from 'react-native';
import { TelemetryBar } from '../components/TelemetryBar';
import { MissionControl } from '../components/MissionControl';
import { DataGrid } from '../components/DataGrid';
import { MapboxView } from '../components/MapboxView';
import { VisionFeed } from '../components/VisionFeed';
import { useTelemetry } from '../hooks/useTelemetry';

export default function DroneDashboardScreen() {
  const { telemetry } = useTelemetry();

  return (
    <View className="flex-1 flex-col">
      {/* Top Telemetry Strip */}
      <TelemetryBar telemetry={telemetry} />

      {/* Main Dashboard Content */}
      {Platform.OS === 'web' ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
            {/* Left Column: Map & Vision Feed */}
            <View style={{ flex: 2, minWidth: 350, gap: 16 }}>
              <View style={{ height: 400 }}>
                <VisionFeed />
              </View>
              <View style={{ height: 350 }}>
                <MapboxView />
              </View>
            </View>

            {/* Right Column: Controls & Logs */}
            <View style={{ flex: 1, minWidth: 300, gap: 16 }}>
              <MissionControl />
              <DataGrid />
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView className="flex-1 p-4">
          <View className="flex-col gap-4">
            <View className="h-[300px]">
              <VisionFeed />
            </View>
            <MissionControl />
            <View className="h-[250px]">
              <MapboxView />
            </View>
            <DataGrid />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
