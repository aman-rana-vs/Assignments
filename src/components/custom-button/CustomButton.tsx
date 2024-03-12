import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {buttonStyles} from './customButton-styles';

interface IButtonProps {
  time: string;
}
const CustomButton = (props: IButtonProps) => {
  const {time} = props;
  return (
    <TouchableOpacity style={buttonStyles.container}>
      <Text style={buttonStyles.buttonText}>{time}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
