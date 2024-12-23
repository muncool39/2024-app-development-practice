import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


function HomeScreen( { navigation }) { 
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title = "Detail 1 열기" onPress = { () => 
                navigation.push('Detail', { id: 1}) 
            }/>
            <Button title = "Detail 2 열기" onPress = { () => 
                navigation.push('Detail', { id: 2}) 
            }/>
            <Button title = "Detail 3 열기" onPress = { () => 
                navigation.push('Detail', { id: 3}) }
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    container : { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center' 
    },
});


export default HomeScreen;
