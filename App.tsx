import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Notifications from './src/screens/notifications/Notifications';
import DActiveExercises from './src/screens/d-active exercises/DActiveExercises';

const App = () => {
  const showNotificationScreen = true;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {showNotificationScreen ? <Notifications /> : <DActiveExercises />}
    </View>
  );
};

export default App;
