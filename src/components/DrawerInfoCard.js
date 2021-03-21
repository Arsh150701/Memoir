import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

const dpHeight = dpWidth = 100

export default function InfoCard() {
    return (
        <ImageBackground style={styles.cover} source={require("../assets/images/cover3.jpg")}>
                 <Image style={styles.dp} source={require("../assets/images/dp.jpg")}/>
                 <View style={styles.info}>
                     <Text style = {{fontSize:22, fontWeight: 'bold'}}>Akshat Srivastava</Text>
                     <Text style = {{fontSize: 15, marginTop: 2}}>Android developer & Writer</Text>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cover: {
        flex: 0.35,
        flexDirection: 'row',
        height: "100%",
        width: "100%",
        alignItems: 'center',
    },
    dp: {
        height: dpHeight,
        width: dpWidth,
        resizeMode: "cover",
        borderRadius: dpHeight/2,
        marginHorizontal: 25,
        marginVertical: 40,
    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 25,
    },
})