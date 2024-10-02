import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function App() {
    return (
    <View style={styles.background}>
        <Text>
            Hello World
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', //화면 가로 기준
        justifyContent: 'center' //화면 세로 기준
    }
});