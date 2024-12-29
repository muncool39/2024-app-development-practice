import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, Button, View, Text } from 'react-native';
import styled from 'styled-components/native';
import RequestChangeMoney from '../api/RequestChangeMoney'; 
import newDate from '../Util/Date';

const ItemBox = styled.View`
flex:1;
align-items: center;
flex-direction:row;
height:25px;
padding-left:20px;
padding-right:20px;
`
const MoneyName = styled.Text`
font-weight: bold;
margin-right:10px;
`
const Money = styled.Text`
padding-left:10px;
`
const MoneyType = styled.Text`
font-size:11px;
padding-left:3px;
`
const Header = styled.View`
flex:1;
height:60px;
justify-content: center;
align-items: center;
`
const HeaderText = styled.Text`
font-size:16px;
font-weight: bold;
`
const TextInputContainer = styled.View`
flex:1;
flex-direction: row;
padding-left:20px;
padding-right:20px;
`
const TextInputText = styled.TextInput`
background-color: silver;
flex:2;
height:40px;
padding-left:10px;
`
const TextExplainView = styled.View`
flex:1;
background-color: silver;
height:40px;
justify-content: center;
align-items: center;
padding-right:10px;
`
const TextExplain = styled.Text`
font-size:11px;
color:black;
`
function ChangeMoney() {
    const [moneyList, setMoneyList] = useState([]);
    const [keyword, setKeyword] = useState(1);
    const [pressBoolean, setPressBoolean] = useState(false);
    
    useEffect(() => {
        async function start() {
            const resultData = await RequestChangeMoney(newDate);
            if (!resultData) {
                console.log("error");
            } else {
                console.log(resultData.data);
                setMoneyList(resultData.data);
            }
        }
        start();
    }, []);
    
    const handlerBtn = () => {
        setPressBoolean(!pressBoolean);
    }
    return (
        <ScrollView>
            <Header>
                <HeaderText> 환율 계산 </HeaderText>
            </Header>
            <Text>20243762문시원</Text>
            <TextInputContainer>
                <TextInputText
                    value={keyword}
                    onChangeText={text => {
                        setKeyword(text); 
                        setPressBoolean(false)
                    }}
                />
                <TextExplainView>
                    <TextExplain>THB</TextExplain>
                </TextExplainView>
                <Button title="환전" onPress={() => {
                    handlerBtn()
                }}/>
                <Button title="초기화" onPress={() => {
                    setKeyword(0)
                }}/>
            </TextInputContainer>
            <View>

                { pressBoolean ? <Text><Money>{(42	* keyword).toFixed(0)}</Money><MoneyType>원</MoneyType></Text>
                : ''}
            </View>
            <Header>
                <HeaderText> 환율(기준날짜:{newDate}) </HeaderText>
            </Header>
        </ScrollView>
    );
}

export default ChangeMoney;