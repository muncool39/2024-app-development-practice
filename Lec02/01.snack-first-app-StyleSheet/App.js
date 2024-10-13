import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.text}> Hello World </Text>
      </View>
      <View>
        <Text> Hello World </Text>
      </View>
      <View>
        <Text> Hello World </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 카멜, 콤마
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    height: '100%',
    paddingTop: 50,
    //marginTop: 50, 매뉴바 아예 제외할 때
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#FFFF00",
    fontSize: 28
  }
});