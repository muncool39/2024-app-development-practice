import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';


export default function App() {
  // state
  // 변수, 함수
  const [ count, setCount ] = useState( 0 );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ count } </Text>
      <Button title={ "클릭" } onPress={()=> 
        { setCount(count + 1) } 
      }/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight, 
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  text:{
    fontSize: 64,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});