import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {buttonStyles} from './Button-styles';

interface IButtonProps {
  time: string;
}
const Button = ({time}: IButtonProps) => {
  return (
    <View style={buttonStyles.buttonContainer}>
      <Text style={buttonStyles.buttonText}>{time}</Text>
    </View>
  );
};

export default Button;
