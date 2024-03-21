import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import CovstatsLogo from '../../assets/images/CovstatsLogo.svg'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootNativeStackParamsList } from '../../types/navigation-types'
import { styles } from './splash-styles'

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()

  const fetchVisits = async () => {
    let initialCount = await AsyncStorage.getItem('Visit')
    if (initialCount) return false
    else {
      AsyncStorage.setItem('Visit', '1')
      return true
    }
  }
  useEffect(() => {
    setTimeout(async () => {
      let res = await fetchVisits()
      if (res) navigation.navigate('Onboarding')
      else navigation.navigate('Login')
    }, 3000)
  })
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CovstatsLogo />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <Text style={styles.copyrightText}>© Copyright COVSTATS 2020. All rights reserved</Text>
    </View>
  )
}

export default Splash
