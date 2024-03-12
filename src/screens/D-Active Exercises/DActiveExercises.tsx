import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import TopNav from './DactiveHeader';
import Card from '../../components/d-active-card/DactiveCard';
import {ID_ACTIVE} from '../../types/d-active-types';
import {fetchDactiveData} from '../../services/get-dactive-data';

import {DActiveStyles} from './DActiveExercises-styles';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <Card title={item.title} image={item.image} />;
};
const DActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([]);

  // start the json-server first to fetch the data from mock api
  // "npx json-server src/constants/d-active-db.json"
  useEffect(() => {
    fetchDactiveData(SET_D_ACTIVE_DATA);
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
