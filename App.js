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
import {
  Button,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavigationFlow from './src/navigation'


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <NavigationFlow/>
    </NavigationContainer>
  );
};

export default App;
