import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants'; 
// 시간
import { DateTime } from 'luxon';
// 외부 이미지
const image = { uri: "https://picsum.photos/1280/1280"};

export default function App() {
    const [ date, setDate ] = useState(DateTime.now());
    // hook
    useEffect( () => {
        const id = setInterval(() => {
            setDate( DateTime.now() );
        }, 500 );
        return () => clearInterval( id );
    }, [] );

    return (
        <View style = { styles.container } >
            <View style = { styles.row } >
                <ImageBackground style = { styles.container } source={image} resizeMode="stretch">
                    <Text style = { styles.TimeText } >{ date.toFormat( 'HH:mm' ) }</Text>
                    <Text style = { styles.Second } >{ date.toFormat( 'ss' ) }</Text>
                </ImageBackground>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    TimeText: { 
        fontSize: 64,
        fontWeight: 'bold',
        background: 'rgba(255,255,255, 0.5)',
    },
    Second: {
        background: 'rgba(255,255,255, 0.5)', 
        fontWeight:'bold',
        marginTop: 12,
        fontSize: 30,
    }
});