import React, { useCallback } from 'react';
import { Button, FlatList, Text } from 'react-native';

const screenList = [
    { key: 'TodoList', title: '투두리스트', link: 'TodoList' },
    { key: 'Diary', title: '다이어리', link: 'Diary' }, 
    { key: 'ZipcodeFinder', title: '주소', link: 'ZipcodeFinder' }, 
    { key: 'ExchangeApp', title: '환율', link: 'ExchangeApp' }, 
]

export default function FlatListHome({navigation}) {
    const renderItem = useCallback( ( {item} ) => {
        return <Button title={ item.title } onPress={ () => {
            navigation.navigate( item.link );
        }}/>
    },[]);
    return (
        <>
            <Text>20243762문시원</Text>
            <FlatList data = {screenList} renderItem = {renderItem}/>
        </>
    )
}