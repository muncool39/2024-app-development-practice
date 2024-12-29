import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../pages/List';
import Detail from '../pages/Detail';
import Form from '../pages/Form';

function Diary() {
  const [currentScreen, setCurrentScreen] = useState('List');
  const [screenProps, setScreenProps] = useState({}); // 화면 전환 시 필요한 props 저장

  // 화면 전환 함수
  const navigate = (screen, props = {}) => {
    setCurrentScreen(screen);
    setScreenProps(props);
  };

  // 각 페이지 컴포넌트에 맞는 props 추가
  const renderScreen = () => {
    switch (currentScreen) {
      case 'List':
        return <List navigate={navigate} />;
      case 'Detail':
        return <Detail {...screenProps} navigate={navigate} />;
      case 'Form':
        return <Form navigate={navigate} />;
      default:
        return <List navigate={navigate} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Diary;
