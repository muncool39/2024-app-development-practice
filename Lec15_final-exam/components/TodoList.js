import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;
const TodoItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;
const TodoItemButton = styled.Button``;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Button = styled.Button``;

const Check = styled.TouchableOpacity`
  margin-right: 4px;
`;
const CheckIcon = styled.Text`
  font-size: 20px;
`;

export default function TodoList() {
  const [list, setList] = React.useState([]);
  const [inputTodo, setInputTodo] = React.useState('');
  const [editingId, setEditingId] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('list')
      .then((data) => {
        if (data !== null) {
          setList(JSON.parse(data));
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const store = (newList) => {
    setList(newList);
    AsyncStorage.setItem('list', JSON.stringify(newList));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setInputTodo(item.todo);
  };

  const handleSaveEdit = () => {
    store(
      produce(list, (draft) => {
        const index = draft.findIndex((item) => item.id === editingId);
        if (index !== -1) {
          draft[index].todo = inputTodo;
        }
      })
    );
    setEditingId(null);
    setInputTodo('');
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Contents>
          {list.map((item) => {
            return (
              <View 
                key={item.id} // key를 최상위 View에 추가
                style={{ flexDirection: 'row', alignItems: 'center' }} // 기존 TodoItem 스타일 직접 적용
              >
                <Check
                  onPress={() => {
                    store(
                      produce(list, (draft) => {
                        const index = list.indexOf(item);
                        draft[index].done = !list[index].done;
                      })
                    );
                  }}
                >
                  <CheckIcon>{item.done ? '✅' : '☑️'}</CheckIcon>
                </Check>
                <TodoItemText>{item.todo}</TodoItemText>
                <TodoItemButton
                  title="수정"
                  onPress={() => handleEdit(item)}
                />
                <TodoItemButton
                  title="삭제"
                  onPress={() => {
                    store(_.reject(list, (element) => element.id === item.id));
                  }}
                />
              </View>
            );
          })}
        </Contents>
        <InputContainer>
          <Input
            style={[styles.input, { flex: 1 }]}
            value={inputTodo}
            onChangeText={(value) => setInputTodo(value)}
          />
          {editingId ? (
            <Button title="저장" onPress={handleSaveEdit} />
          ) : (
            <Button
              title="전송"
              onPress={() => {
                if (inputTodo === '') {
                  return;
                }
                const newItem = {
                  id: new Date().getTime().toString(),
                  todo: inputTodo,
                  done: false,
                };
                store([...list, newItem]);
                setInputTodo('');
              }}
            />
          )}
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderColor: '#000000',
  },
});
