import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import InfoCard from '../components/InfoCard';
import DATA from '../assets/data/PlaylistInfo';
import moduleName from '../components/SpotifyIntro';
import SpotifyIntro from '../components/SpotifyIntro';

const renderItem = ({item}) => (
  <Pressable style={styles.cards}>
    <Image
      style={styles.cardImage}
      source={require('../assets/images/dp.jpg')}></Image>
    <Text>{item.name}</Text>
  </Pressable>
);

export default function FunSection() {
  return (
    <>
      <View style={{backgroundColor: 'gray'}}>
        {/* <InfoCard /> */}
        <SpotifyIntro />
      </View>
      <View style={{backgroundColor: '#add8e6'}}>
        <FlatList
          data={DATA}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cards: {
    height: Dimensions.get('window').width / 2 - 20,
    width: Dimensions.get('window').width / 2 - 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  cardImage: {
    height: Dimensions.get('window').width / 2 - 40,
    width: Dimensions.get('window').width / 2 - 20,
  },
});
