import {View, Text} from 'react-native';
import React from 'react';
import {topnavStyles} from './TopNav-styles';

const TopNav = () => {
  return (
    <View style={topnavStyles.container}>
      <Text style={topnavStyles.text}>D-active</Text>
    </View>
  );
};

export default TopNav;
