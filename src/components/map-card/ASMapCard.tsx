import React from 'react'
import { Text, View } from 'react-native'
import Map from '../../assets/images/Map.svg'
import { styles } from './asMapCard-styles'
const ASMapCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COVID - 19 Affected Areas</Text>
      <View style={styles.subContainer}>
        <View style={styles.legendDark} />
        <Text style={styles.legendText}>Most Affected</Text>
        <View style={styles.legendLight} />
        <Text style={styles.legendText}>Less Affected</Text>
      </View>
      <Map />
    </View>
  )
}

export default ASMapCard
