import {View, Text, Image} from 'react-native';
import React from 'react';
import {EmptyNotStyles} from './EmptyData-styles';

const EmptyNotification = () => {
  return (
    <View style={EmptyNotStyles.mainContainer}>
      <View style={EmptyNotStyles.subContainer}>
        <Image
          style={EmptyNotStyles.icon}
          source={require('../../assets/icons/notifications.png')}
        />
        <View style={EmptyNotStyles.textContainer}>
          <Text style={EmptyNotStyles.heading}>No Notifications yet!</Text>
          <Text style={EmptyNotStyles.message}>
            You have no notifications right now.Come back later.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyNotification;
