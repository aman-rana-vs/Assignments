import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {cardStyles} from './Card-styles';

interface ICardProps {
  imageType: string;
  message: string;
  timeago: string;
}

const images = {
  Reflection: require('../../assets/images/Reflection.png'),
  Reminder: require('../../assets/images/Reminder.png'),
  'D-Active': require('../../assets/images/D-Active.png'),
};

const Card = ({imageType, message, timeago}: ICardProps) => {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.card}>
        <Image
          source={images[imageType as keyof typeof images]}
          style={cardStyles.image}
        />
        <Text style={cardStyles.message}>{message}</Text>
      </View>
      <View style={cardStyles.timeAgoContainer}>
        <Text style={cardStyles.timeAgoText}>{timeago}</Text>
      </View>
    </View>
  );
};

export default Card;
