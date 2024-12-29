import React, { useEffect, useState } from "react";
import Container from '../components/components/Container'; 
import Contents from '../components/components/Contents'; 
import Button from '../components/components/Button'; 
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

function Detail({ date, navigate }) {
  const [text, setText] = useState('');

  // 데이터 삭제 함수
  const deleteDiary = async () => {
    Alert.alert(
      '삭제 확인',
      '이 일기를 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '삭제',
          style: 'destructive',
          onPress: async () => {
            let data = await AsyncStorage.getItem('list');
            if (data) {
              const updatedList = JSON.parse(data).filter((item) => item.date !== date);
              await AsyncStorage.setItem('list', JSON.stringify(updatedList));
              navigate('List');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    AsyncStorage.getItem('list').then((data) => {
      const list = JSON.parse(data);
      const diary = list.find((element) => element.date === date);
      setText(diary.text);
    });
  }, [date]);

  return (
    <Container>
      <Contents>
        <Text>20243762문시원</Text>
        <Text>{text}</Text>
        <ButtonGroup>
          <Button onPress={() => navigate('List')}>뒤로 가기</Button>
          <Button onPress={deleteDiary} color="red">
            삭제
          </Button>
        </ButtonGroup>
      </Contents>
    </Container>
  );
}

export default Detail;