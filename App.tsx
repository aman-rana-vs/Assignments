import React from 'react'
import { View, Text, StatusBar, TurboModuleRegistry } from 'react-native'

import Notifications from './src/screens/notifications/Notifications'
import DActiveExercises from './src/screens/dActive exercises/DActiveExercises'
import { COLORS } from './src/theme/colors'

import { styles } from './styles'

const App = () => {
  const showNotificationScreen = false
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.neutralWhite} barStyle="dark-content" />
      {showNotificationScreen ? <Notifications /> : <DActiveExercises />}
    </View>
  )
}

export default App
