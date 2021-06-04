import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import InfoCard from '../components/InfoCard';
import {useNavigation} from '@react-navigation/native';
import Hamburger from '../components/Hamburger';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <InfoCard />
      <Hamburger navigation={navigation} />

      <ScrollView style={styles.details}>
        <Text>This is the home screen</Text>
        <Text>Open drawer for more options</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    flex: 1,
    padding: 15,
  },
});
