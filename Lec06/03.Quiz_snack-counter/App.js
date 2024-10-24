import React, { useState } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native';
import Counter from './components/Counter';


export default function App() {
    const [ count, setCount] = useState(0);
    const In = () => {
        setCount(count+1);
    }
    return (
        <SafeAreaView>
            <Counter count={count} 
            onIncrease={In} 
            onDecrease={()=> { setCount(count - 1) }} />
        </SafeAreaView>
    );
}