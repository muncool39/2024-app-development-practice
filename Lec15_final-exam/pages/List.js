import React from 'react';
import { Text } from 'react-native';
import Container from '../components/components/Container'; 
import Contents from '../components/components/Contents';
import Button from '../components/components/Button'; 
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const ListItem = styled.TouchableOpacity` 
width: 100%;
padding: 12px 0;
border-bottom-color: #aaaaaa;
border-bottom-width: 1px;
`;

const Label = styled.Text`
font-size: 20px;
`;

function List({ navigate }) {
    const [list, setList] = React.useState([]);
    const load = async () => {
      const data = await AsyncStorage.getItem('list');
      if (data !== null) {
        setList(JSON.parse(data));
      }
    };
  
    const deleteItem = async (date) => {
      let data = await AsyncStorage.getItem('list');
      if (data) {
        const updatedList = JSON.parse(data).filter((item) => item.date !== date);
        await AsyncStorage.setItem('list', JSON.stringify(updatedList));
        setList(updatedList);
      }
    };
  
    React.useEffect(() => {
      load();
    }, []);
  
    return (
      <Container>
        <Text>20243762문시원</Text>
        <Contents>
          {_.sortBy(list, 'date').map((item) => (
            <ListItem key={item.id}>
              <Label onPress={() => navigate('Detail', { date: item.date })}>
                {item.date}
              </Label>
              <Button onPress={() => deleteItem(item.date)}>삭제</Button>
            </ListItem>
          ))}
        </Contents>
        <Button onPress={() => navigate('Form')}>새 일기 작성</Button>
      </Container>
    );
  }
  

export default List;
        