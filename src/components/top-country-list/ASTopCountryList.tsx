import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

import ASTopCountryCard from '../top-country-card/ASTopCountryCard'
import { COVID_API_URL } from '../../constants/api-constants'
import { fetchData } from '../../services/api/get-data'

import { styles } from './asTopCountryList-styles'
const ASTopCountryList = () => {
  const [apiData, setApiData] = useState([])
  const getApiData = async () => {
    const result = await fetchData(COVID_API_URL)
    if (result.success) {
      setApiData(result.data)
    }
  }
  useEffect(() => {
    getApiData()
  }, [])
  const topThreeCountries = apiData.sort((a, b) => a - b).slice(0, 10)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Countries</Text>
      <FlatList
        data={topThreeCountries}
        scrollEnabled
        style={styles.listContainer}
        keyExtractor={(item: any) => item.countryInfo._id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ASTopCountryCard {...item} />}
      />
    </View>
  )
}

export default ASTopCountryList
