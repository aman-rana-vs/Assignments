import {View, Text, Image} from 'react-native';
import React from 'react';
import {topNavStyles} from './NotificationHeader-styles';

const TopNav = () => {
  return (
    <View style={topNavStyles.container}>
      <Image
        style={topNavStyles.settingsIcon}
        source={require('../../assets/icons/empty.png')}
      />
      <Text style={topNavStyles.heading}>Notifications</Text>
      <Image
        style={topNavStyles.settingsIcon}
        source={require('../../assets/icons/settings.png')}
      />
    </View>
  );
};

export default TopNav;
