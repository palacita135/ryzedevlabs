import './output.css';
import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import { Navbar } from './src/components/Navbar';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    return <HomeScreen setTab={setActiveTab} />;
  };

  const backgroundImage = require('./assets/background.jpeg');

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={backgroundImage} 
        resizeMode="cover" 
        style={[StyleSheet.absoluteFillObject, styles.bgImage]}
      >
        <View className="flex-1 bg-slate-900/80">
          <SafeAreaView className="flex-1">
            <Navbar activeTab={activeTab} setTab={setActiveTab} />
            <View className="flex-1">
              {renderContent()}
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0f172a',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
});
