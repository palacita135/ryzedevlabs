import React from 'react';
import { View, Text, TextInput, Platform } from 'react-native';
import Animated, { useAnimatedProps, SharedValue } from 'react-native-reanimated';
import { TelemetryData } from '../hooks/useTelemetry';
import { Feather } from '@expo/vector-icons';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface TelemetryItemProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  unit: string;
  telemetry: SharedValue<TelemetryData>;
  valueFn: (t: TelemetryData) => string;
}

const TelemetryItem: React.FC<TelemetryItemProps> = ({ icon, label, unit, telemetry, valueFn }) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: valueFn(telemetry.value),
      value: valueFn(telemetry.value), // Use value for better cross-platform support
    } as any;
  });

  return (
    <View className="flex-1 flex-row items-center border-l border-slate-800 px-4 py-3 first:border-l-0">
      <View className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center mr-3">
        <Feather name={icon} size={20} color="#94a3b8" />
      </View>
      <View>
        <Text className="text-slate-400 text-xs font-semibold tracking-wider uppercase">{label}</Text>
        <View className="flex-row items-baseline">
          <AnimatedTextInput
            animatedProps={animatedProps}
            editable={false}
            className="text-white text-xl font-bold p-0 m-0"
            // Important to override default TextInput styling to look like normal text
            style={Platform.select({ web: { outlineStyle: 'none', cursor: 'default' }, default: {} })}
          />
          <Text className="text-slate-500 text-sm ml-1 font-medium">{unit}</Text>
        </View>
      </View>
    </View>
  );
};

export const TelemetryBar = ({ telemetry }: { telemetry: SharedValue<TelemetryData> }) => {
  return (
    <View className="flex-row bg-slate-950 border-b border-slate-800 shadow-xl overflow-hidden shadow-black/50">
      <TelemetryItem
        icon="arrow-up"
        label="Altitude"
        unit="m"
        telemetry={telemetry}
        valueFn={(t) => t.altitude.toFixed(1)}
      />
      <TelemetryItem
        icon="wind"
        label="Velocity"
        unit="m/s"
        telemetry={telemetry}
        valueFn={(t) => t.velocity.toFixed(2)}
      />
      <TelemetryItem
        icon="battery"
        label="Battery"
        unit="%"
        telemetry={telemetry}
        valueFn={(t) => t.battery.toFixed(1)}
      />
      <TelemetryItem
        icon="radio"
        label="GPS Signal"
        unit="dBm"
        telemetry={telemetry}
        valueFn={(t) => t.gpsSignal.toFixed(0)}
      />
    </View>
  );
};
