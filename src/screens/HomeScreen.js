import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View style = {styles.text}>
            <Text >This is the home screen</Text>
            <Text >Open drawer for more options</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        fontSize: 20
    }
})
