import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Greeting from './components/Greeting';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Greeting name="시원"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight, 
        backgroundColor: '#ecf0f1',
        padding: 10,
    }
});