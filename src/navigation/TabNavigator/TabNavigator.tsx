import React, { memo } from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
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
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RequestNavigator"
        component={RequestNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'git-compare' : 'git-compare-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route)
          return {
            tabBarIcon: ({ color, focused }) => (
              <Icon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
            tabBarVisible: routeName !== 'UpdateProfile' && routeName !== 'UpdatePassword',
          }
        }}
      />
    </Tab.Navigator>
  )
})
