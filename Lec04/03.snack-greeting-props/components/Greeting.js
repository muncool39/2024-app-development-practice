import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function Greeting( props ) {
    return (
        <View>
            <Text style={styles.text}> 안녕하세요, { props.name }. </Text>
        </View>
    );
}

export default Greeting;

const styles = StyleSheet.create({ 
    text:{
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    }
});