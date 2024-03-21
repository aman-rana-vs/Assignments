import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator'
import { StyleSheet, View } from 'react-native'
import { COLORS } from './src/theme/color'
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
