/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import NavigationFlow from './src/navigation';
import PD from './src/screens/ProjectDetails';

const App: () => Node = () => {
  return (
    // <PD />
    <NavigationContainer>
      <NavigationFlow />
    </NavigationContainer>
  );
};

export default App;
