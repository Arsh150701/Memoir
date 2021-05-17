import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationFlow from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <NavigationFlow />
    </NavigationContainer>
  );
}

export default App;
