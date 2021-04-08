import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color} from 'react-native-reanimated';

export default function ProjectsCard(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.icon} source={{uri: props.iconURL}} />
      <View style={styles.info}>
        <Text style={styles.projectName}>{props.projectName}</Text>
        <Text style={styles.projectType}>{props.projectType}</Text>
        <Text
          style={{
            fontSize: 18,
            color: '#333333',
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Languages used:
        </Text>
        <Text style={styles.langUsed}>{props.langUsed}</Text>
        {props.completed == true ? (
          <Text style={styles.completed}>Completed</Text>
        ) : (
          <Text style={styles.underDevelopment}>Under Development</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ADD8E688',
    padding: 15,
    alignItems: 'center',
  },
  icon: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginStart: 20,
    alignItems: 'flex-end',
  },
  projectName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  projectType: {
    fontSize: 20,
    color: '#111111',
  },
  langUsed: {
    fontSize: 18,
    color: '#333333',
  },
  completed: {
    fontSize: 18,
    color: '#00FF00',
    borderRadius: 10,
    backgroundColor: '#009900',
    padding: 3,
  },
  underDevelopment: {
    fontSize: 18,
    color: '#FF8C00',
    backgroundColor: '#FFCD0588',
    borderRadius: 10,
    padding: 3,
  },
});
