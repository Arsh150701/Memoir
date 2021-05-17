import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectDetails from '../screens/ProjectDetails';
import ProjectsCard from '../components/ProjectsCard';
import Projects from '../screens/Projects';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Projects">
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ProjectCard" component={ProjectsCard} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
    </Stack.Navigator>
  );
}
