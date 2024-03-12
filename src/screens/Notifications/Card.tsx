import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import TimeAgo from 'javascript-time-ago';
// English.
import en from 'javascript-time-ago/locale/en';
import {cardStyles} from './Card-styles';

TimeAgo.addDefaultLocale(en);

interface ICardProps {
  imageType: string;
  message: string;
  time: Date | number;
  completed: boolean;
}

const images = {
  Reflection: require('../../assets/icons/reflection.png'),
  Reminder: require('../../assets/icons/reminder.png'),
  'D-Active': require('../../assets/icons/dactive.png'),
};

const Card = ({imageType, message, time, completed}: ICardProps) => {
  const timeAgo = new TimeAgo('en-US');
  let timeStr = timeAgo.format(time);
  return (
    <View
      style={[
        cardStyles.container,
        completed ? cardStyles.completedCard : null,
      ]}>
      <View style={cardStyles.card}>
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
