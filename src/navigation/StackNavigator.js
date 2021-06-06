import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProjectDetails from '../screens/ProjectDetails';
import ProjectsCard from '../components/ProjectsCard';
import Projects from '../screens/Projects';
import FunSection from '../screens/FunSection';
import BlogPeek from '../screens/BlogPeek';
import ExtraCurriculars from '../screens/ExtraCurriculars';
import Poems from '../screens/Poems';

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
      <Stack.Screen name="Poems" component={Poems} />
      <Stack.Screen name="Blogs" component={BlogPeek} />
      <Stack.Screen name="Extra Curriculars" component={ExtraCurriculars} />
    </Stack.Navigator>
  );
}

export {ProjectsStack, FunSectionStack};
