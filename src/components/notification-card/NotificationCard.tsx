import React from 'react';
import {View, Text, Image} from 'react-native';

import {images} from '../../constants/notifications-constants';

import {getTime} from '../../utils/common-utils';
import {cardStyles} from './NotificationCard-styles';

interface ICardProps {
  imageType: string;
  message: string;
  time: Date | number;
  completed: boolean;
}

const NotificationCard = (props: ICardProps) => {
  const {imageType, message, time, completed} = props;

  let timeAgo = getTime(time);
  return (
    <View
      style={[
        cardStyles.container,
        completed ? cardStyles.completedCard : null,
      ]}>
      <View style={cardStyles.subContainer}>
        <Image
          source={images[imageType as keyof typeof images]}
          style={cardStyles.image}
        />
        <View style={cardStyles.messageContainer}>
          <Text style={cardStyles.message}>{message}</Text>
        </View>
      </View>
      <View style={cardStyles.timeAgoContainer}>
        <Text style={cardStyles.timeAgoText}>{timeAgo}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
