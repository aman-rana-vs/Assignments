import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/Feather'
import ASCountryCard from '../../components/country-card/ASCountryCard'
import ASHeader from '../../components/header/ASHeader'

import { COVID_API_URL } from '../../constants/api-constants'
import { fetchData } from '../../services/api/get-data'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'
import { styles } from './home-styles'
import { ICountryData } from '../../types/country-types'
const renderFunction = (item: ICountryData) => {
  return <ASCountryCard item={item} />
}
const Home = () => {
  const [covidData, setCovidData] = useState([])
  const [page, setPage] = useState<number>(1)
  const LIMIT = 6
  const covidDataLength = covidData.length

  const startIdx = (page - 1) * LIMIT

  const endIdx = Math.min(startIdx + Number(LIMIT), covidDataLength)

  const paginatedCovidData = [...covidData].slice(startIdx, endIdx)

  const previousHandler = () => {
    if (page === 1) return
    setPage(page - 1)
  }
  const nextHandler = () => {
    setPage(page === Math.ceil(covidDataLength / LIMIT) ? 1 : page + 1)
  }

  const getCovidData = async () => {
    const result = await fetchData(COVID_API_URL)
    if (result.success) setCovidData(result.data)
  }

  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <View style={styles.container}>
      <ASHeader title="Covid-19" />
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Live Reports</Text>
            <Text style={styles.subTitle}>Top five countries</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]} onPress={previousHandler}>
              <Icon
                name="chevron-left"
                size={Spacing.space_10}
                color={page == 1 ? COLORS.neutral[10] : COLORS.neutral[600]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={nextHandler}>
              <Icon name="chevron-right" size={Spacing.space_10} color={COLORS.neutral[600]} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={paginatedCovidData}
          renderItem={({ item }) => renderFunction(item)}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
      </View>
    </View>
  )
}

export default Home
