import * as React from 'react';
import Constants from 'expo-constants';
import _ from "lodash";
import styled from 'styled-components/native';
import { Button } from 'react-native'

let numbers = [];
_.times(45, n => numbers.push(n+1));

export default function App() {
  const [ displayNumbers, setNumbers ] = React.useState(_.shuffle(numbers));
  return (
    <Container>
      <Row>
        { displayNumbers.map((index, num)=>(
          index < 7 && (
            <Ball key={index} value={num}>
              <Label>{num}</Label>
            </Ball>
          )
        )) }
      </Row>
      <Button title="다시하기" onPress={() =>
        setNumbers(_.shuffle(numbers))
      }/>
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