import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color } from 'react-native-reanimated'

export default function ProjectsCard(props) {
    return (
        <View style={styles.card}>
            <Image style={styles.icon} source={{uri: props.iconURL}}/>
            <View style={styles.info}>
                <Text style={styles.projectName}>{props.projectName}</Text>
                <Text style={styles.projectType}>{props.projectType}</Text>
                <Text style={{fontSize: 18, color: '#333333', fontWeight: 'bold', marginTop: 5,}}>Languages used:</Text>
                <Text style={styles.langUsed}>{props.langUsed}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ADD8E6',
        padding: 15,
    },
    icon: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
        marginStart: 20,
        marginEnd: 15,
        alignItems: 'center',
    },
    projectName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    projectType: {
        fontSize: 22,
        color: '#111111'
    },
    langUsed: {
        fontSize: 18,
        color: '#333333'
    }
})
