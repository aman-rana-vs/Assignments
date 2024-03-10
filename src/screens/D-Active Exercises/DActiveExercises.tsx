import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopNav from './TopNav';
import Card from './Card';
import {ID_ACTIVE} from '../../types/d-active-types';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <Card title={item.title} image={item.image} />;
};
const DActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([]);
  useEffect(() => {
    fetch('http://10.0.2.2:3000/exercises')
      .then(res => res.json())
      .then(data => SET_D_ACTIVE_DATA(data))
      .catch(e => console.log(e.message));
  }, []);
  return (
    <View style={{width: 385, alignItems: 'center', gap: 10}}>
      <TopNav />
      <FlatList
        data={D_ACTIVE_DATA}
        contentContainerStyle={{width: 335, gap: 20, paddingBottom: 150}}
        renderItem={({item}) => renderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DActiveExercises;
