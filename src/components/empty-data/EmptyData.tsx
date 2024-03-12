import React from 'react';
import {View, Text, Image} from 'react-native';

import {emptyDataStyles} from './EmptyData-styles';

const EmptyNotification = () => {
  return (
    <View style={emptyDataStyles.container}>
      <View style={emptyDataStyles.subContainer}>
        <Image
          style={emptyDataStyles.icon}
          source={require('../../assets/icons/notifications.png')}
        />
        <View style={emptyDataStyles.textContainer}>
          <Text style={emptyDataStyles.heading}>No Notifications yet!</Text>
          <Text style={emptyDataStyles.message}>
            You have no notifications right now.Come back later.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyNotification;
