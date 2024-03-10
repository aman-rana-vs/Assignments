import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TopNav from './TopNav';
import Card from './Card';
import {D_ACTIVE_DATA} from '../../constants/d-active-data';
import {ID_ACTIVE} from '../../types/d-active-types';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <Card title={item.title} image={item.image} />;
};
const DActiveExercises = () => {
  return (
    <View>
      <TopNav />
      <FlatList
        data={D_ACTIVE_DATA}
        contentContainerStyle={{width: 335, gap: 20}}
        renderItem={({item}) => renderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DActiveExercises;
