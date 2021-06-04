import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../components/ProjectsCard';
import PROJECTS_DATA from '../assets/data/ProjectsInfo';
import ProjectsIntro from '../components/ProjectsIntro';
import {useNavigation} from '@react-navigation/native';
import Hamburger from '../components/Hamburger';

export default function Projects() {
  const renderItem = ({item}) => (
    <Card
      id={item.id}
      projectName={item.projectName}
      projectType={item.projectType}
      iconURL={item.iconURL}
      langUsed={item.langUsed}
      completed={item.completed}
      githubURL={item.githubURL}
    />
  );
  const navigation = useNavigation();

  return (
    <>
      <ProjectsIntro />
      <Hamburger navigation={navigation} />
      <FlatList
        style={styles.FlatList}
        data={PROJECTS_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    backgroundColor: '#ADD8E666',
  },
});
