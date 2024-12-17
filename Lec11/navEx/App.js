import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute = "Home">
        <Stack.Screen 
          name="Home" component={HomeScreen} options={ { title: '홈'}}
        />
        <Stack.Screen
          name="Detail" component={DetailScreen} options={ ({route})=>
          ({title: `상세정보: ${route.params.id}`}) }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
