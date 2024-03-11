import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Card from './src/screens/Notifications/Card';
import Notifications from './src/screens/Notifications/Notifications';
import DActiveExercises from './src/screens/D-Active Exercises/DActiveExercises';

const App = () => {
  const FLAG = true;
  return (
    <View style={{alignItems: 'center'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {FLAG ? <Notifications /> : <DActiveExercises />}
    </View>
  );
};

export default App;
