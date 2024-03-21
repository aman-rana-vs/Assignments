import React from 'react'
import { Text, View } from 'react-native'

import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Fever from '../../assets/images/Fever.svg'
import BreathingDifficulty from '../../assets/images/BreathingDifficulty.svg'
import Cough from '../../assets/images/Cough.svg'
import { slides } from '../../constants/onboarding-constants'
import { RootNativeStackParamsList } from '../../types/navigation-types'
import { styles } from './asCarousel-styles'

const ASCarousel = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()
  const images = {
    'Fever': <Fever />,
    'Cough': <Cough />,
    'Breathing Difficulty': <BreathingDifficulty />,
  }
  const buttonLabel = (label: string) => {
    return <Text>{label}</Text>
  }

  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          const { title, description } = item
          return (
            <View style={styles.subContainer}>
              <View style={styles.imageContainer}>{images[title as keyof typeof images]}</View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          )
        }}
        activeDotStyle={styles.dots}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          navigation.navigate('Login')
        }}
      />
    </View>
  )
}

export default ASCarousel
