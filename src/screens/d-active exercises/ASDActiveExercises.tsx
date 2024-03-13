import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {ID_ACTIVE} from '../../types/d-active-types';
import DActiveCard from '../../components/d-active-card/ASDActiveCard';

import {fetchDactiveData} from '../../services/get-dactive-data';

import {ASDActiveStyles} from './ASDActiveExercises-styles';
import ASHeader from '../../components/header/ASHeader';

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <DActiveCard title={item.title} image={item.image} />;
};

const ASDActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([]);

  useEffect(() => {
    fetchDactiveData(SET_D_ACTIVE_DATA);
  }, []);

  return (
    <View style={ASDActiveStyles.container}>
      <ASHeader title="D-Active" emptyView={false} />
      <FlatList
        data={D_ACTIVE_DATA}
        contentContainerStyle={ASDActiveStyles.listContainer}
        renderItem={({item}) => renderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ASDActiveExercises;
