import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/Home'
import Map from '../../screens/map/Map'
import Icon from 'react-native-vector-icons/Feather'
import Education from '../../screens/education/Education'
import Discovery from '../../screens/discovery/Discovery'
import News from '../../screens/news/News'
import { RootTabParamsList } from '../../types/navigation-types'
import { View } from 'react-native'
import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'

const Tab = createBottomTabNavigator<RootTabParamsList>()

export function TabNavigator() {
  const tabBarIconOptions = (title: string) => {
    return {
      tabBarIcon: ({ focused }: { focused: Boolean }) => (
        <View>
          <Icon
            name={title}
            size={Spacing.space_24}
            color={focused ? COLORS.primary[50] : COLORS.neutral[50]}
          />
        </View>
      ),
    }
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary[50],
        tabBarInactiveTintColor: COLORS.neutral[50],
      }}>
      <Tab.Screen name="Home" component={Home} options={tabBarIconOptions('home')} />
      <Tab.Screen name="Map" component={Map} options={tabBarIconOptions('map')} />
      <Tab.Screen name="Education" component={Education} options={tabBarIconOptions('user')} />
      <Tab.Screen name="Discovery" component={Discovery} options={tabBarIconOptions('map-pin')} />
      <Tab.Screen name="News" component={News} options={tabBarIconOptions('book-open')} />
    </Tab.Navigator>
  )
}
