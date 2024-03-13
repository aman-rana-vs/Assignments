import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomButton from '../custom-button/CustomButton';
import {
  LINEAR_GRADIENTS,
  titleColors,
  imageTypes,
} from '../../constants/dactive-constants';

import {cardStyles} from './DActiveCard-styles';
import {resizeMode} from '../../constants/common-constants';

interface ICardProps {
  title: string;
  image: string;
}

const DActiveCard = (props: ICardProps) => {
  const {title, image} = props;
  return (
    <View style={cardStyles.container}>
      <ImageBackground
        style={cardStyles.backgroundImage}
        source={imageTypes[image as keyof typeof imageTypes]}
        resizeMode={resizeMode.cover}>
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient1}
          style={cardStyles.titleContainer}>
          <Text
            style={[
              cardStyles.title,
              titleColors[image as keyof typeof titleColors],
            ]}>
            {title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={LINEAR_GRADIENTS.gradient2}
          style={cardStyles.buttonsContainer}>
          <CustomButton time="2min" />
          <CustomButton time="4min" />
          <CustomButton time="8min" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default DActiveCard;
