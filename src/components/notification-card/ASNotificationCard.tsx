import React from 'react';
import {View, Text, Image} from 'react-native';

import {images} from '../../constants/notifications-constants';

import {getTime} from '../../utils/common-utils';
import {ASNotificationCardStyles} from './asNotificationCard-styles';

interface IASNotificationCardProps {
  imageType: string;
  message: string;
  time: Date | number;
  completed: boolean;
}

const ASNotificationCard = (props: IASNotificationCardProps) => {
  const {imageType, message, time, completed} = props;

  let timeAgo = getTime(time);
  return (
    <View
      style={[
        ASNotificationCardStyles.container,
        completed ? ASNotificationCardStyles.completedCard : null,
      ]}>
      <View style={ASNotificationCardStyles.subContainer}>
        <Image
          source={images[imageType as keyof typeof images]}
          style={ASNotificationCardStyles.image}
        />
        <View style={ASNotificationCardStyles.messageContainer}>
          <Text style={ASNotificationCardStyles.message}>{message}</Text>
        </View>
      </View>
      <View style={ASNotificationCardStyles.timeAgoContainer}>
        <Text style={ASNotificationCardStyles.timeAgoText}>{timeAgo}</Text>
      </View>
    </View>
  );
};

export default ASNotificationCard;
