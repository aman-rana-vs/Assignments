import React from 'react';
import {View, Text, Image} from 'react-native';

import {topNavStyles} from './NotificationHeader-styles';

const NotificationHeader = () => {
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

export default NotificationHeader;
