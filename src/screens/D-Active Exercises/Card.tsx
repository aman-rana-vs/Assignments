import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {cardStyles} from './Card-styles';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';

interface ICardProps {
  title: string;
  image: string;
}
const imageTypes = {
  outer: require(`../../assets/images/outer.png`),
  focus: require(`../../assets/images/focus.png`),
  follow: require(`../../assets/images/follow.png`),
  scan: require(`../../assets/images/scan.png`),
  square: require(`../../assets/images/square.png`),
};
const Card = ({title, image}: ICardProps) => {
  return (
    <View style={cardStyles.mainContainer}>
      <ImageBackground
        style={cardStyles.imageBackground}
        source={imageTypes[image as keyof typeof imageTypes]}
        resizeMode="cover">
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.56)',
            'rgba(255, 255, 255, 0.12)',
            'rgba(255, 255, 255, 0)',
          ]}
          style={cardStyles.headingContainer}>
          <Text style={cardStyles.heading}>{title}</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']}
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
