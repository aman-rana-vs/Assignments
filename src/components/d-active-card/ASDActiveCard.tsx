import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {titleColors, imageTypes} from '../../constants/dactive-constants';

import {ASDActiveCardStyles} from './ASDActiveCard-styles';
import {resizeMode} from '../../constants/common-constants';
import {LINEAR_GRADIENTS} from '../../theme/colors';
import ASButton from '../button/ASButton';

interface ICardProps {
  title: string;
  image: string;
}

const ASDActiveCard = (props: ICardProps) => {
  const {title, image} = props;
  return (
    <View style={ASDActiveCardStyles.container}>
      <ImageBackground
        style={ASDActiveCardStyles.backgroundImage}
        source={imageTypes[image as keyof typeof imageTypes]}
        resizeMode={resizeMode.cover}>
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient1}
          style={ASDActiveCardStyles.titleContainer}>
          <Text
            style={[
              ASDActiveCardStyles.title,
              titleColors[image as keyof typeof titleColors],
            ]}>
            {title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient2}
          style={ASDActiveCardStyles.buttonsContainer}>
          <ASButton time="2min" />
          <ASButton time="4min" />
          <ASButton time="8min" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ASDActiveCard;
