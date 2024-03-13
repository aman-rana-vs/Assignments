import React from 'react';
import {View, Text} from 'react-native';

import {topnavStyles} from './DActiveHeader-styles';

const DActiveHeader = () => {
  return (
    <View style={topnavStyles.container}>
      <Text style={topnavStyles.text}>D-active</Text>
    </View>
  );
};

export default DActiveHeader;
