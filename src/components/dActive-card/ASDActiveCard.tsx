import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ASButton from '../button/ASButton';
import {DActiveCardInfo} from '../../constants/dactive-constants';

import {ASDActiveCardStyles} from './asDActiveCard-styles';
import {resizeMode} from '../../constants/common-constants';
import {COLORS} from '../../theme/colors';

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
        source={DActiveCardInfo[image as keyof typeof DActiveCardInfo].imageSrc}
        resizeMode={resizeMode.cover}>
        <LinearGradient
          colors={COLORS.dActiveCardTitleGradient}
          style={ASDActiveCardStyles.titleContainer}>
          <Text
            style={[
              ASDActiveCardStyles.title,
              DActiveCardInfo[image as keyof typeof DActiveCardInfo].textColour,
            ]}>
            {title}
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dActiveCardButtonContainerGradient}
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
