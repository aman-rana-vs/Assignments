import React from 'react';
import {View, Text, Image} from 'react-native';
// English.
import en from 'javascript-time-ago/locale/en';
import TimeAgo from 'javascript-time-ago';

import {images} from '../../constants/notifications-constants';

import {cardStyles} from './NotificationCard-styles';

TimeAgo.addDefaultLocale(en);

interface ICardProps {
  imageType: string;
  message: string;
  time: Date | number;
  completed: boolean;
}

const Card = (props: ICardProps) => {
  const {imageType, message, time, completed} = props;
  const timeAgo = new TimeAgo('en-US');
  let timeStr = timeAgo.format(time);
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
        <Text style={cardStyles.timeAgoText}>{timeStr}</Text>
      </View>
    </View>
  );
};

export default Card;
