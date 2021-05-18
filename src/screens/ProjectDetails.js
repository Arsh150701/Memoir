import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  Modal,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import ProjectsCard from '../components/ProjectsCard';
import PROJECTS_DATA from '../assets/data/ProjectsInfo';
import {set} from 'react-native-reanimated';

export default function ProjectDetails(route) {
  const [state, setstate] = useState({modalVisibility: false, modalImage: ''});
  id = route.route.params.id;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.introView}>
          <Image
            style={styles.icon}
            source={{uri: `${PROJECTS_DATA[id].iconURL}?raw=true`}}
          />
          <Text style={styles.projectName}>
            {PROJECTS_DATA[id].projectName}
          </Text>
        </View>

        <View style={styles.infoView}>
          <Text>
            <Text style={styles.infoType}>Developed using: </Text>
            <Text style={styles.info}>{PROJECTS_DATA[id].projectType}</Text>
          </Text>
          <Text>
            <Text style={styles.infoType}>Languages used: </Text>
            {PROJECTS_DATA[id].langUsed.map((each, id) => (
              <Text style={styles.info}>{each} </Text>
            ))}
          </Text>
          <Text>
            <Text style={styles.infoType}>Completion status: </Text>
            {PROJECTS_DATA[id].completed ? (
              <Text style={styles.info}>Completed</Text>
            ) : (
              <Text style={styles.info}>Under development</Text>
            )}
          </Text>
          <Text>
            <Text style={styles.infoType}>Developers: </Text>
            {PROJECTS_DATA[id].authors.map((each, id) => (
              <Text
                onPress={() => Linking.openURL(each.githubURL)}
                style={[styles.info, {color: '#3333EE'}]}>
                "{each.name}"{' '}
              </Text>
            ))}
          </Text>

          <Text style={styles.infoType}>Description</Text>
          {PROJECTS_DATA[id].desc != '' ? (
            <Text style={styles.info}>{PROJECTS_DATA[id].desc}</Text>
          ) : (
            <Text style={styles.info}>
              Description for this project is not available.
            </Text>
          )}

          <Text style={styles.infoType}>Screenshots</Text>
          <ScrollView style={styles.ssView} horizontal={true}>
            {PROJECTS_DATA[id].ssURL.map((each, id) => (
              <Pressable
                onPress={() => {
                  setstate({
                    modalVisibility: !state.modalVisibility,
                    modalImage: `${each}`,
                  });
                }}>
                <Image style={styles.ss} source={{uri: `${each}?raw=true`}} />
              </Pressable>
            ))}
          </ScrollView>

          {PROJECTS_DATA[id].futureScope.status ? (
            <>
              <Text style={styles.infoType}>Future scope</Text>
              <ProjectsCard
                projectName={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].projectName
                }
                projectType={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].projectType
                }
                iconURL={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].iconURL
                }
                langUsed={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].langUsed
                }
                completed={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].completed
                }
                githubURL={
                  PROJECTS_DATA[PROJECTS_DATA[id].futureScope.id].githubURL
                }
              />
            </>
          ) : (
            <Text></Text>
          )}
        </View>

        <Modal
          style={styles.modal}
          animationType="fade"
          transparent={false}
          visible={state.modalVisibility}
          onRequestClose={() => {
            setstate({
              modalVisibility: !state.modalVisibility,
              modalImage: '',
            });
          }}>
          <Image
            style={styles.modalImage}
            source={{uri: `${state.modalImage}?raw=true`}}
          />
        </Modal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  introView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  projectName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  infoView: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  infoType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  info: {
    fontSize: 20,
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
  ssView: {
    flexDirection: 'row',
  },
  ss: {
    height: 190,
    width: 90,
    margin: 5,
  },
  modal: {},
  modalImage: {
    margin: 10,
    height: Dimensions.get('window').height - 20,
    width: Dimensions.get('window').width - 20,
    resizeMode: 'contain',
  },
});
