import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PoemsData from '../assets/data/PoemsData';

export default function Poems() {
  const [DATA, setDATA] = useState(PoemsData);
  const [collapsed, setCollapsed] = useState(() =>
    DATA.map((item, id) => true),
  );
  const [search, setSearch] = useState('');

  function toggleStates(id) {
    setCollapsed(prev => {
      return prev.map((each, index) => (index === id ? !each : each));
    });
  }

  useEffect(() => {
    setDATA(
      PoemsData.filter((each, index) => {
        return (
          each.title.toLowerCase().includes(search.toLowerCase()) ||
          each.tags.toString().toLowerCase().includes(search.toLowerCase())
        );
      }),
    );

    return {DATA};
  }, [search]);

  const bg = Math.ceil(Math.random() * 10);
  const images = {
    1: require('../assets/images/poemBG/poembg1.jpg'),
    2: require('../assets/images/poemBG/poembg2.jpg'),
    3: require('../assets/images/poemBG/poembg3.jpg'),
    4: require('../assets/images/poemBG/poembg4.jpg'),
    5: require('../assets/images/poemBG/poembg5.jpg'),
    6: require('../assets/images/poemBG/poembg6.jpg'),
    7: require('../assets/images/poemBG/poembg7.jpg'),
    8: require('../assets/images/poemBG/poembg8.jpg'),
    9: require('../assets/images/poemBG/poembg9.jpg'),
    10: require('../assets/images/poemBG/poembg10.jpg'),
  };

  return (
    <>
      <SearchBar
        lightTheme={true}
        placeholder="Search"
        onChangeText={e => setSearch(e)}
        value={search}
      />
      <ImageBackground
        source={images[bg]}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        imageStyle={{opacity: 0.5}}>
        <FlatList
          style={{marginBottom: 10, paddingHorizontal: 15}}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={item => (
            <View>
              <Text style={styles.title}>{item.item.title}</Text>
              <ScrollView
                style={
                  ([{width: '100%'}], collapsed[item.item.id] && {height: 160})
                }>
                <Text style={styles.body}>{item.item.body}</Text>
              </ScrollView>
              <Pressable
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 10,
                }}
                onPress={() => toggleStates(item.item.id)}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignContent: 'flex-start',
                  }}>
                  <Text style={styles.tagTitle}>Tags: </Text>
                  {item.item.tags.map((each, id) => (
                    <Text style={styles.tags}>{each}</Text>
                  ))}
                </View>
                <View style={{alignContent: 'flex-end'}}>
                  {collapsed[item.item.id] ? (
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../assets/icons/expand-arrow.png')}
                    />
                  ) : (
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../assets/icons/collapse-arrow.png')}
                    />
                  )}
                </View>
              </Pressable>
            </View>
          )}
        />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 24, fontWeight: 'bold', marginTop: 20},
  body: {fontSize: 20, color: '#444444'},
  tagTitle: {fontSize: 20, fontWeight: 'bold'},
  tags: {
    fontSize: 20,
    backgroundColor: '#2E8B57AA',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
