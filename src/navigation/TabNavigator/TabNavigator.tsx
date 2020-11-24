import React, { memo } from 'react'
import { View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavigatorParamList, TabNavigatorProps } from './TabNavigator.types'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const Placeholder = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={'logout'} onPress={() => null} />
    </View>
  )
}

export const TabNavigator = memo<TabNavigatorProps>(() => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Placeholder" component={Placeholder} />
    </Tab.Navigator>
  )
})
