import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavigatorParamList, TabNavigatorProps } from './TabNavigator.types'
import { useMeQuery } from '@hooks/api'
import { RequestNavigator } from '../RequestNavigator'
import { ExplorerNavigator } from '../ExplorerNavigator'
import { ProfileNavigator } from '../ProfileNavigator'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

export const TabNavigator = memo<TabNavigatorProps>(() => {
  useMeQuery()
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: true }}>
      <Tab.Screen name="RequestNavigator" component={RequestNavigator} />
      <Tab.Screen name="ExplorerNavigator" component={ExplorerNavigator} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Tab.Navigator>
  )
})
