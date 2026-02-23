import { useEffect, useRef } from 'react';
import { useSharedValue, SharedValue } from 'react-native-reanimated';

export type TelemetryData = {
  altitude: number; // meters
  velocity: number; // m/s
  battery: number;  // %
  gpsSignal: number; // dBm
  latitude: number;
  longitude: number;
  pitch: number;
  roll: number;
  yaw: number;
};

// Mock function to generate random variations starting from base values
const generateMockTelemetry = (current: TelemetryData): TelemetryData => {
  return {
    altitude: Math.max(0, current.altitude + (Math.random() * 0.4 - 0.2)),
    velocity: Math.max(0, current.velocity + (Math.random() * 1.0 - 0.5)),
    battery: Math.max(0, current.battery - 0.001),
    gpsSignal: Math.min(-30, Math.max(-100, current.gpsSignal + (Math.random() * 2 - 1))),
    latitude: current.latitude + (Math.random() * 0.00001 - 0.000005),
    longitude: current.longitude + (Math.random() * 0.00001 - 0.000005),
    pitch: current.pitch + (Math.random() * 2 - 1),
    roll: current.roll + (Math.random() * 2 - 1),
    yaw: current.yaw + (Math.random() * 2 - 1),
  };
};

export const useTelemetry = () => {
  // We use `useSharedValue` to keep 60Hz high-frequency updates off the JS thread where possible.
  // This allows the UI (like text tags and bars) to read from these values continuously and reliably.
  
  const telemetry = useSharedValue<TelemetryData>({
    altitude: 120.5,
    velocity: 15.2,
    battery: 87.5,
    gpsSignal: -65.0,
    latitude: 37.7749,
    longitude: -122.4194,
    pitch: 0,
    roll: 0,
    yaw: 0,
  });

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // In a real application, this would connect to the DJI SDK backend via WebSockets
    // e.g., wsRef.current = new WebSocket('ws://localhost:8080/telemetry');
    // wsRef.current.onmessage = (e) => { 
    //   telemetry.value = JSON.parse(e.data); // Update shared value instantly
    // };

    // For demonstration, we setup an interval pushing mock data at 60Hz (~16ms)
    // High-frequency UI updates from shared values do not re-render React components!
    const interval = setInterval(() => {
      telemetry.value = generateMockTelemetry(telemetry.value);
    }, 16);

    return () => {
      clearInterval(interval);
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  return { telemetry };
};
