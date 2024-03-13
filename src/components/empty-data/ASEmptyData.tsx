import React from 'react';
import {View, Text, Image} from 'react-native';

import {ASEmptyDataStyles} from './ASEmptyData-styles';

const ASEmptyData = () => {
  return (
    <View style={ASEmptyDataStyles.container}>
      <View style={ASEmptyDataStyles.subContainer}>
        <Image
          style={ASEmptyDataStyles.icon}
          source={require('../../assets/icons/notifications.png')}
        />
        <View style={ASEmptyDataStyles.textContainer}>
          <Text style={ASEmptyDataStyles.heading}>No Notifications yet!</Text>
          <Text style={ASEmptyDataStyles.message}>
            You have no notifications right now.Come back later.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ASEmptyData;
