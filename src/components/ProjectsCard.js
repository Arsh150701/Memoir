import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ProjectsCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProjectDetails', {id: props.id})}>
      <Image style={styles.icon} source={{uri: `${props.iconURL}?raw=true`}} />
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
        <Text>
          {props.langUsed.map((each, id) => (
            <Text style={styles.langUsed}> {each}</Text>
          ))}
        </Text>
        {props.completed == true ? (
          <Text style={styles.completed}>Completed</Text>
        ) : (
          <Text style={styles.underDevelopment}>Under Development</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ADDFFF',
    padding: 15,
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 4,
    borderRadius: 25,
  },
  icon: {
    width: 130,
    height: 130,
    resizeMode: 'stretch',
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
