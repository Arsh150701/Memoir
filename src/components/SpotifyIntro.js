import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function SpotifyIntro() {
    return (
        <ImageBackground style={styles.cover} source={require("../assets/images/spotifyCardBG.jpg")}>
            <Text style={styles.Text}>
                My Spotify Playlists
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 0.35,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 25,
        alignSelf: 'flex-end',
        alignContent: 'center',
        textDecorationLine: 'underline',
    },
})
