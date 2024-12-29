import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListHome from './components/FlatList';
import TodoList from './components/TodoList';
import Diary from './components/Diary';
import ZipcodeFinder from './components/ZipcodeFinder'
import ExchangeApp from './components/ExchangeApp';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={FlatListHome} />
                <Stack.Screen name="TodoList" component={TodoList} />
                <Stack.Screen name="Diary" component={Diary} />
                <Stack.Screen name="ZipcodeFinder" component={ZipcodeFinder} />
                <Stack.Screen name="ExchangeApp" component={ExchangeApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}