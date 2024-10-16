import * as React from 'react';
import { Button } from 'react-native';
import Constants from 'expo-constants';

export default function Home({navigation}) { //props.navigation
    return (
        <>
            <Button title="로또 번호 생성기" onPress={ ()=> {
                navigation.navigate('LottoGenerator')
            }}/>
            <Button title="디지털 시계" onPress={ ()=> {
                navigation.navigate('ClockDigital')
            }}/>
        </>
    )
}