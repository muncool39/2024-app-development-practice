import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { DateTime } from 'luxon';
import styled from 'styled-components/native';

const image = { uri: "https://picsum.photos/1280/1280"};

export default function App() {
    const [ date, setDate ] = useState(DateTime.now());

    useEffect(()=>{
        const id = setInterval(()=>{
            setDate(DateTime.now());
        }, 500);
        return () => clearInterval(id);
    }, []);

    return (
        <Container source={image} resizeMode="stretch">
            <TimeText>{ date.toFormat('HH:mm') }</TimeText>
            <Second>{ date.toFormat('HH:mm') }</Second>
        </Container>
    )
}

const Container = styled.ImageBackground`
flex: 1;
justify-content: center;  
align-items: center
`;

const TimeText = styled.Text`
font-size: 64px;
font-weight: bold;
background: rgba(255,255,255,0.5);
`

const Second = styled.Text`
font-size: 30px;
font-weight: bold;
background: rgba(255,255,255,0.5); 
marginTop: 12px;
`