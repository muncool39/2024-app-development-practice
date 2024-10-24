import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Row from './components/Row';

export default function App() {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >Text</Text>
            <Row>
                <Text>Text</Text>
                <Text>Text</Text>
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        borderColor: "#000000",
        borderWidth: 1,
    }
});