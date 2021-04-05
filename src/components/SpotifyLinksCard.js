import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

export default function SpotifyLinksCard(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.tagline}>
                {props.tagline}
            </Text>

            <Text style={styles.name} onPress={() => Linking.openURL(props.spotifyURL)}>
                {props.name}
            </Text>

            <Text style={styles.desc}>
                {props.desc}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#ADFFA6BB',
        padding: 15,
    },
    tagline:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    name:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3333EE',
    },
    desc:{
        fontSize: 18,
        color: '#333333'
    },
})
