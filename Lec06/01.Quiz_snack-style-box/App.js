import React, { useState }  from 'react';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native';
import Box from './components/Box';

export default function App() {
    return (
        <SafeAreaView>
            <Box rounded = {true} size='large' color='green'/>
        </SafeAreaView>
    )
}
