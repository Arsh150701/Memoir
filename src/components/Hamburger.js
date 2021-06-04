import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function Hamburger(props) {
  return (
    <TouchableOpacity
      style={{position: 'absolute', elevation: 1}}
      onPress={() => props.navigation.openDrawer()}>
      <Image source={require('../assets/icons/hamburger.png')}></Image>
    </TouchableOpacity>
  );
}
