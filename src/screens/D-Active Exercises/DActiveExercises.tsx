import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopNav from './DactiveHeader';
import Card from './DactiveCard';
import {ID_ACTIVE} from '../../types/d-active-types';
import {DActiveStyles} from './DActiveExercises-styles';
import {D_ACTIVE_API_URL} from '../../constants/dactive-constants';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <Card title={item.title} image={item.image} />;
};
const DActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([]);

  // start the json-server first to fetch the data from mock api
  // "npx json-server src/constants/d-active-db.json"
  useEffect(() => {
    fetch(D_ACTIVE_API_URL)
      .then(res => res.json())
      .then(data => SET_D_ACTIVE_DATA(data))
      .catch(e => console.log(e.message));
  }, []);
  return (
    <View style={DActiveStyles.mainContainer}>
      <TopNav />
      <FlatList
        data={D_ACTIVE_DATA}
        contentContainerStyle={DActiveStyles.listContainer}
        renderItem={({item}) => renderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DActiveExercises;
