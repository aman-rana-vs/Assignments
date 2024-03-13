import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import DActiveHeader from './DActiveHeader';
import {ID_ACTIVE} from '../../types/d-active-types';
import DActiveCard from '../../components/d-active-card/DActiveCard';

import {fetchDactiveData} from '../../services/get-dactive-data';

import {DActiveStyles} from './DActiveExercises-styles';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <DActiveCard title={item.title} image={item.image} />;
};
const DActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([]);

  useEffect(() => {
    fetchDactiveData(SET_D_ACTIVE_DATA);
  }, []);

  return (
    <View style={DActiveStyles.container}>
      <DActiveHeader />
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
