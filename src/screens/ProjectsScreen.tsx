import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

export default function ProjectsScreen({ setTab }: { setTab: (t: string) => void }) {
  return (
    <ScrollView className="flex-1 p-8">
      <View className="max-w-4xl mx-auto w-full">
        <View className="flex-row items-center gap-4 mb-2 mt-8">
          <Text className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
            Work Showcase
          </Text>
        </View>
        <Text className="text-white text-4xl md:text-6xl font-bold mb-12 tracking-tight">
          Featured Projects
        </Text>

        {/* HIL-PX4 Project Card */}
        <View className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 mb-8 shadow-lg shadow-orange-900/20">
          
          <View className="h-64 bg-slate-900 overflow-hidden rounded-t-2xl">
             <Image 
               source={require('../../assets/projects/hil_px4.png')} 
               className="w-full h-full opacity-60" 
               resizeMode="cover" 
             />
             <View className="absolute inset-0 bg-orange-900/40" />
             <Text className="text-orange-500/80 text-7xl font-black absolute -right-4 -bottom-4 tracking-tighter">HIL</Text>
             <Text className="text-orange-300 tracking-[0.5em] text-sm font-bold absolute inset-0 text-center flex items-center justify-center p-8">PX4 INTERFACE</Text>
          </View>
          
          <View className="p-8">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-white text-2xl font-bold">HIL-PX4 Simulation</Text>
              <View className="bg-orange-500/20 px-3 py-1 rounded-full">
                <Text className="text-orange-400 text-xs font-bold">Python / MAVLink</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-base leading-relaxed mb-6">
              Hardware-In-The-Loop (HIL) simulation toolkit for PX4 Autopilot. Supports state and sensor-level HIL using Python, PyMAVLink, and JSBSim for high-fidelity flight dynamics testing.
            </Text>
            
            <View className="flex-row flex-wrap gap-2 mb-6">
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Python</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">PX4</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">MAVLink</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">JSBSim</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">HIL</Text>
            </View>

            <TouchableOpacity 
              className="bg-orange-500/10 border border-orange-500/30 py-3 rounded-lg items-center"
              onPress={() => Linking.openURL('https://github.com/palacita135/HIL-PX4')}
            >
              <Text className="text-orange-400 font-bold">View Source on GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* TerraScan Project Card */}
        <View className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 mb-8 shadow-lg shadow-emerald-900/20">
          
          <View className="h-64 bg-slate-900 overflow-hidden rounded-t-2xl">
             <Image 
               source={require('../../assets/projects/terra_lidar.png')} 
               className="w-full h-full opacity-60" 
               resizeMode="cover" 
             />
             <View className="absolute inset-0 bg-emerald-900/40" />
             <Text className="text-emerald-500/80 text-7xl font-black absolute -right-4 -bottom-4 tracking-tighter">LIDAR</Text>
             <Text className="text-emerald-300 tracking-[0.5em] text-sm font-bold absolute inset-0 text-center flex items-center justify-center p-8">TERRASCAN PIPELINE</Text>
          </View>
          
          <View className="p-8">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-white text-2xl font-bold">TerraScan Toolkit</Text>
              <View className="bg-emerald-500/20 px-3 py-1 rounded-full">
                <Text className="text-emerald-400 text-xs font-bold">Python / PyQt5</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-base leading-relaxed mb-6">
              A modular, Python-based LiDAR processing pipeline for drone survey workflows. Ingests LAS/LAZ point clouds to perform ground classification, generate DEMs/DSMs, and reconstruct 3D meshes with interactive visualization and GIS integration.
            </Text>
            
            <View className="flex-row flex-wrap gap-2 mb-6">
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Python</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">laspy</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">GDAL</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">PyVista 3D</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">PyQt5</Text>
            </View>

            <TouchableOpacity 
              className="bg-emerald-500/10 border border-emerald-500/30 py-3 rounded-lg items-center"
              onPress={() => Linking.openURL('https://github.com/palacita135/Terra-Lidar')}
            >
              <Text className="text-emerald-400 font-bold">View Source on GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* P-GS Project Card */}
        <View className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 mb-8 shadow-lg shadow-blue-900/20">
          
          <View className="h-64 bg-slate-900 overflow-hidden rounded-t-2xl">
             <Image 
               source={require('../../assets/projects/pgs_swarm.png')} 
               className="w-full h-full opacity-60" 
               resizeMode="cover" 
             />
             <View className="absolute inset-0 bg-blue-900/40" />
             <Text className="text-blue-500/80 text-7xl font-black absolute -right-4 -bottom-4 tracking-tighter">SWARM</Text>
             <Text className="text-blue-300 tracking-[0.5em] text-sm font-bold absolute inset-0 text-center flex items-center justify-center p-8">P-GS GROUND STATION</Text>
          </View>
          
          <View className="p-8">
            <View className="flex-row items-center justify-between mb-4 mt-2">
              <Text className="text-white text-2xl font-bold">P-GS Swarm Mode</Text>
              <View className="bg-blue-500/20 px-3 py-1 rounded-full">
                <Text className="text-blue-400 text-xs font-bold">Python / PyQt5</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-base leading-relaxed mb-6">
              A PyQt5-based ground control station for managing swarms of drones. Features multi-protocol support (INAV, Crossfire, MAVLink), interactive waypoint planning, automatic leader assignment, and coordinated mission operations.
            </Text>
            
            <View className="flex-row flex-wrap gap-2 mb-6">
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Python</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">PyQt5</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Mapbox</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">MAVLink</Text>
            </View>

            <TouchableOpacity 
              className="bg-blue-500/10 border border-blue-500/30 py-3 rounded-lg items-center"
              onPress={() => Linking.openURL('https://github.com/palacita135/P-GS')}
            >
              <Text className="text-blue-400 font-bold">View Source on GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Data Analyst GUI Project Card */}
        <View className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 mb-8 shadow-lg shadow-purple-900/20">
          
          <View className="h-64 bg-slate-900 overflow-hidden rounded-t-2xl">
             <Image 
               source={require('../../assets/projects/data_analyst.png')} 
               className="w-full h-full opacity-60" 
               resizeMode="cover" 
             />
             <View className="absolute inset-0 bg-purple-900/40" />
             <Text className="text-purple-500/80 text-7xl font-black absolute -right-4 -bottom-4 tracking-tighter">ANALYTICS</Text>
             <Text className="text-purple-300 tracking-[0.5em] text-sm font-bold absolute inset-0 text-center flex items-center justify-center p-8">UNIFIED DATA ANALYST GUI</Text>
          </View>
          
          <View className="p-8">
            <View className="flex-row items-center justify-between mb-4 mt-2">
              <Text className="text-white text-2xl font-bold">Data Analyst Studio</Text>
              <View className="bg-purple-500/20 px-3 py-1 rounded-full">
                <Text className="text-purple-400 text-xs font-bold">Python / Flask</Text>
              </View>
            </View>
            <Text className="text-slate-400 text-base leading-relaxed mb-6">
              A comprehensive tool for analyzing Sales, Finance, and Property data through a unified graphical interface and an interactive web dashboard. Features dynamic charts, automated data cleaning, and unified reporting.
            </Text>
            
            <View className="flex-row flex-wrap gap-2 mb-6">
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Python</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Flask</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Plotly</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">Pandas</Text>
               <Text className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-md">MySQL</Text>
            </View>

            <TouchableOpacity 
              className="bg-purple-500/10 border border-purple-500/30 py-3 rounded-lg items-center"
              onPress={() => Linking.openURL('https://github.com/palacita135/data-analyst-gui')}
            >
              <Text className="text-purple-400 font-bold">View Source on GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
