import React from 'react'
import { ScrollView, View } from 'react-native'
import ASHeader from '../../components/header/ASHeader'
import ASMapCard from '../../components/map-card/ASMapCard'
import ASTopCountryList from '../../components/top-country-list/ASTopCountryList'
import { styles } from './map-styles'

const Map = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="World Wide map" />
      <ASMapCard />
      <ASTopCountryList />
    </View>
  )
}

export default Map
