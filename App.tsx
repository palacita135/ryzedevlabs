import './output.css';
import React, { useState } from 'react';
import { View, SafeAreaView, Platform, ImageBackground } from 'react-native';
import { Navbar } from './src/components/Navbar';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    return <HomeScreen setTab={setActiveTab} />;
  };

  const backgroundImage = require('./assets/background.jpeg');

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1, backgroundColor: '#0f172a' }} resizeMode="contain">
      <View className="flex-1 bg-slate-900/80">
        <SafeAreaView className="flex-1">
          <Navbar activeTab={activeTab} setTab={setActiveTab} />
          <View className="flex-1">
            {renderContent()}
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
