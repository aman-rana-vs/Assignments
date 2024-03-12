import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../components/Button';

import {
  LINEAR_GRADIENTS,
  colorTypes,
  imageTypes,
} from '../../constants/dactive-constants';

import {cardStyles} from './DactiveCard-styles';

interface ICardProps {
  title: string;
  image: string;
}

const Card = (props: ICardProps) => {
  const {title, image} = props;
  return (
    <View style={cardStyles.mainContainer}>
      <ImageBackground
        style={cardStyles.imageBackground}
        source={imageTypes[image as keyof typeof imageTypes]}
        resizeMode="cover">
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient1}
          style={cardStyles.headingContainer}>
          <Text
            style={[
              cardStyles.heading,
              colorTypes[image as keyof typeof colorTypes],
            ]}>
            {title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient2}
          style={cardStyles.buttonsContainer}>
          <Button time="2min" />
          <Button time="4min" />
          <Button time="8min" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Card;
