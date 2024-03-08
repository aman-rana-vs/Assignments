import {View, Text, Image} from 'react-native';
import React from 'react';
import {topNavStyles} from './TopNav-styles';

const TopNav = () => {
  return (
    <View style={topNavStyles.container}>
      <Image
        style={topNavStyles.settingsIcon}
        source={require('../../assets/images/Empty.png')}
      />
      <Text style={topNavStyles.heading}>Notifications</Text>
      <Image
        style={topNavStyles.settingsIcon}
        source={require('../../assets/images/Settings.png')}
      />
    </View>
  );
};

export default TopNav;
