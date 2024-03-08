import {View, Text} from 'react-native';
import React from 'react';
import Card from './src/screens/Notifications/Card';
import Notifications from './src/screens/Notifications/Notifications';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Notifications />
    </View>
  );
};

export default App;
