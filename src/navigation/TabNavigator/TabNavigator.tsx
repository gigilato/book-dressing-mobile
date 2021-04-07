import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@components/ui'
import { RequestNavigator } from '@navigation/RequestNavigator'
import { ExplorerNavigator } from '@navigation/ExplorerNavigator'
import { ProfileNavigator } from '@navigation/ProfileNavigator'
import { useMeQuery } from '@api/hooks'
import { TabNavigatorParamList, TabNavigatorProps } from './TabNavigator.types'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

export const TabNavigator = memo<TabNavigatorProps>(() => {
  useMeQuery()

  return (
    <Tab.Navigator initialRouteName="ExplorerNavigator" tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="ExplorerNavigator"
        component={ExplorerNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="RequestNavigator"
        component={RequestNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="book" color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  )
})
