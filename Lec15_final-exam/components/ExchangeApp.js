import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import ChangeMoney from '../pages/ChangeMoney';

export default function ExchangeApp() {
  return (
  <SafeAreaView style={ styles.container }>
    <ChangeMoney />
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    paddingTop : Platform.OS === 'android' ? Constants.statusBarHeight : 0, 
    flex: 1,
  },
});