import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Card from './src/screens/Notifications/NotificationCard';
import Notifications from './src/screens/Notifications/Notifications';
import DActiveExercises from './src/screens/D-Active Exercises/DActiveExercises';

const App = () => {
  const showNotificationScreen = false;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {showNotificationScreen ? <Notifications /> : <DActiveExercises />}
    </View>
  );
};

export default App;
