import * as React from 'react';
import Constants from 'expo-constants';
import _ from "lodash";
import styled from 'styled-components/native';
import { Button } from 'react-native'

let numbers = [];
_.times(45, n => numbers.push(n+1));

export default function LottoGenerator() {
    const [ displayNumbers, setNumbers ] = React.useState(_.shuffle(numbers));
    return (
    <Container>
        <Row>
            <Ball value={displayNumbers[0]}>
                <Label>{displayNumbers[0]}</Label>
            </Ball>
            <Ball value={displayNumbers[1]}>
                <Label>{displayNumbers[1]}</Label>
            </Ball>
            <Ball value={displayNumbers[2]}>
                <Label>{displayNumbers[2]}</Label>
            </Ball>
            <Ball value={displayNumbers[3]}>
                <Label>{displayNumbers[3]}</Label>
            </Ball>
            <Ball value={displayNumbers[4]}>
                <Label>{displayNumbers[4]}</Label>
            </Ball>
            <Ball value={displayNumbers[5]}>
                <Label>{displayNumbers[5]}</Label>
            </Ball>
        </Row>
        <Button title="다시하기" onPress={() => setNumbers(_.shuffle(numbers))}/>
    </Container>
  );
}

const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${ Constants.statusBarHeight }px;
justify-content: center;
align-items: center;
`;

const Row = styled.View`
flex-direction: row;
margin-bottom: 24;
`;

const Ball = styled.View`
width: 50px;
height: 50px;
background: ${ props => {
    if( props.value < 11 ) {
        return '#e5e251';
    } else if( props.value < 21 ) {
        return '#517FE5';
    } else if ( props.value < 31 ) {
        return '#E54036';
    } else if ( props.value < 41 ) {
        return '#e5e5e5';
    } else {
        return '#43BF74';
    }
}};
border-radius: 25px;
justify-content: center;
align-items: center;
`;

const Label = styled.Text`
border-color: "#000000";
font-size: 20px;
font-weight: bold;
`