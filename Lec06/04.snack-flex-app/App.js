import * as React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { Header, Contents, Footer } from './components/Layout';
import { viewStyles } from './src/Styles';

export default function App() {
    return (
        <View style={viewStyles.container}>
            <Header />
            <Contents />
            <Footer />
        </View>
    );
}
