import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import DATA from '../assets/data/FunSection';
import SpotifyIntro from '../components/SpotifyIntro';
import Hamburger from '../components/Hamburger';
import {useNavigation} from '@react-navigation/native';

export default function FunSection() {
  const navigation = useNavigation();

  return (
    <>
      <SpotifyIntro />
      <Hamburger navigation={navigation} />

      <FlatList
        style={{flex: 1}}
        data={DATA}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        keyExtractor={item => item.id}
        renderItem={item => (
          <Pressable
            style={styles.cards}
            onPress={() => navigation.navigate(item.item.navTo)}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/dp.jpg')}
            />
            <Text style={styles.cardText}>{item.item.name}</Text>
          </Pressable>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cards: {
    height: Dimensions.get('window').width / 2 - 20,
    width: Dimensions.get('window').width / 2 - 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  cardImage: {
    height: Dimensions.get('window').width / 2 - 60,
    width: Dimensions.get('window').width / 2 - 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
