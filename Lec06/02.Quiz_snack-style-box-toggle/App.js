import React, { useState } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, Button } from 'react-native';
import Box from './components/Box';


export default function App() {
    const [ visible, setVisible] = useState(true);
    const onPress = () => {
        setVisible(!visible);
    }
    return (
        <SafeAreaView>
            <Button title="토글" onPress = { onPress } />
            { visible && <Box rounded={true} color='green' />  }
        </SafeAreaView>
    );
}