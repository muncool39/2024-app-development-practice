import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home_Button';
import FlatListHome from './screens/Home_FlatList';
import LottoGenerator from './screens/App_LottoGenerator';
import ClockDigital from './screens/App_ClockDigital';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= "Home" component = {FlatListHome} />
                <Stack.Screen name= "LottoGenerator" component = {LottoGenerator} />
                <Stack.Screen name= "ClockDigital" component = {ClockDigital} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}