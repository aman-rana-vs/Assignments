import React from 'react';
import {View, Text, Image} from 'react-native';

import {topNavStyles} from './NotificationHeader-styles';

const TopNav = () => {
  return (
    <View style={topNavStyles.container}>
      <View style={topNavStyles.settingsIcon} />
      <Text style={topNavStyles.heading}>Notifications</Text>
      <Image
        style={topNavStyles.settingsIcon}
        source={require('../../assets/icons/settings.png')}
      />
    </View>
  );
};

export default TopNav;
