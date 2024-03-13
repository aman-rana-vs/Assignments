import {View, Text, Image} from 'react-native';
import React from 'react';

import {ASHeaderStyles} from './ASHeader-styles';

interface IASHeaderProps {
  emptyView: boolean;
  imgSrc?: number | undefined;
  title: string;
}

const ASHeader = (props: IASHeaderProps) => {
  const {title, imgSrc, emptyView} = props;
  return (
    <View style={ASHeaderStyles.container}>
      {emptyView ? <View style={ASHeaderStyles.settingsIcon} /> : null}
      <Text style={ASHeaderStyles.heading}>{title}</Text>
      {imgSrc ? (
        <Image style={ASHeaderStyles.settingsIcon} source={imgSrc} />
      ) : null}
    </View>
  );
};

export default ASHeader;
