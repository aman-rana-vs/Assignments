import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import DActiveCard from '../../components/dActive-card/ASDActiveCard'
import ASHeader from '../../components/header/ASHeader'
import { ID_ACTIVE } from '../../types/dactive-types'

import { fetchDactiveData } from '../../services/api/get-dactive-data'

import { ASDActiveStyles } from './DActiveExercises-styles'

const renderFunction = (item: ID_ACTIVE): JSX.Element => {
  return <DActiveCard title={item.title} image={item.image} />
}

const DActiveExercises = () => {
  const [D_ACTIVE_DATA, SET_D_ACTIVE_DATA] = useState([])

  useEffect(() => {
    fetchDactiveData(SET_D_ACTIVE_DATA)
  }, [])

  return (
    <View style={ASDActiveStyles.container}>
      <ASHeader title="D-Active" emptyView={false} />
      <FlatList
        data={D_ACTIVE_DATA}
        contentContainerStyle={ASDActiveStyles.listContainer}
        renderItem={({ item }) => renderFunction(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default DActiveExercises