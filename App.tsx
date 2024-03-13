import { View, Text, StatusBar, TurboModuleRegistry } from 'react-native'
import React from 'react'

import Notifications from './src/screens/notifications/Notifications'
import DActiveExercises from './src/screens/dActive exercises/DActiveExercises'

const App = () => {
  const showNotificationScreen = true
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {showNotificationScreen ? <Notifications /> : <DActiveExercises />}
    </View>
  )
}

export default App
