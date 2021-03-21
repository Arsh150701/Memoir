import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import InfoCard from '../components/InfoCard'

export default function HomeScreen() {
    return (
        <View style = {styles.container}>
            <InfoCard/> 

            <ScrollView style={styles.details}>
                <Text>This is the home screen</Text>
                <Text>Open drawer for more options</Text>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    details: {
        flex: 1,
        padding: 15,
    },
})
