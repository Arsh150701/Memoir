import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const dpHeight = (dpWidth = 145);

export default function InfoCard() {
  return (
    <ImageBackground
      style={styles.cover}
      source={require('../assets/images/cover3.jpg')}>
      <View style={{width: '50%', alignItems: 'center'}}>
        <Image style={styles.dp} source={require('../assets/images/dp.jpg')} />
      </View>
      <View style={styles.info}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          Akshat{'\n'}Srivastava
        </Text>
        <Text style={{fontSize: 18, marginTop: 5}}>Frontend developer</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dp: {
    height: dpHeight,
    width: dpWidth,
    resizeMode: 'cover',
    borderRadius: dpHeight / 2,
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 30,
    width: '50%',
  },
});
