import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectDetails from '../screens/ProjectDetails';
import ProjectsCard from '../components/ProjectsCard';
import Projects from '../screens/Projects';
import FunSection from '../screens/FunSection';

const Stack = createStackNavigator();

function ProjectsStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Projects">
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ProjectCard" component={ProjectsCard} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    </Stack.Navigator>
  );
}

function FunSectionStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Fun Section">
      <Stack.Screen name="Fun Section" component={FunSection} />
    </Stack.Navigator>
  );
}

export {ProjectsStack, FunSectionStack};
