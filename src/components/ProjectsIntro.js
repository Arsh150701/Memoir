import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function ProjectsIntro() {
    return (
        <ImageBackground style={styles.cover} source={require("../assets/images/projCardBG2.png")}>
            <Text style={styles.TextTop}>MY</Text>
            <Text style={styles.TextBottom}>PROJECTS</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 0.35,
        flexDirection: 'row',
    },
    TextTop: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    TextBottom: {
        flex: 1,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#00D8FF',
        textAlign: 'center',
        alignSelf: 'flex-end',
    },
})
