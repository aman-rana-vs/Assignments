import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import ASDActiveExercises from './src/screens/d-active exercises/ASDActiveExercises';
import ASNotifications from './src/screens/notifications/ASNotifications';

const App = () => {
  const showNotificationScreen = false;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {showNotificationScreen ? <ASNotifications /> : <ASDActiveExercises />}
    </View>
  );
};

export default App;
