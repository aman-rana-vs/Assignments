import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import React from 'react'
import { THRESHOLD } from '../../constants/common-constants'
import { COLORS } from '../../theme/color'
import { styles } from './asCountryCard-styles'
import { ICountryData } from '../../types/country-types'

interface IASCountryCardProps {
  item: ICountryData
}
const ASCountryCard = ({ item }: IASCountryCardProps) => {
  const { country, countryInfo, cases } = item
  const { flag } = countryInfo

  let iconName = cases > THRESHOLD ? 'chevron-up' : 'chevron-down'
  let iconColor = cases > THRESHOLD ? COLORS.primary[100] : COLORS.success[50]
  return (
    <View style={styles.container}>
      <View style={styles.countryDataContainer}>
        <Image source={{ uri: flag }} style={styles.image} />
        {/* <View style={styles.countryNameContainer}> */}
        <Text style={styles.countryName} numberOfLines={1} ellipsizeMode="tail">
          {country}
        </Text>
        {/* </View> */}
      </View>
      <View style={styles.covidDataContainer}>
        <Text style={styles.covidData}>{cases}</Text>
        <View style={styles.icon}>
          <Icon name={iconName} color={iconColor} size={15} />
        </View>
      </View>
    </View>
  )
}

export default ASCountryCard
