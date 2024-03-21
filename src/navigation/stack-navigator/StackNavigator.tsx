import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../../screens/splash/Splash'
import Onboarding from '../../screens/onboarding/Onboarding'
import Login from '../../screens/login/Login'
import { TabNavigator } from '../tab-navigator/TabNavigator'
import { RootNativeStackParamsList } from '../../types/navigation-types'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootNativeStackParamsList>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator
