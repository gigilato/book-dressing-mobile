import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import { TabNavigatorParamList, TabNavigatorProps } from './TabNavigator.types'
import { RequestNavigator } from '../RequestNavigator'
import { ExplorerNavigator } from '../ExplorerNavigator'
import { ProfileNavigator } from '../ProfileNavigator'

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

export const TabNavigator = memo<TabNavigatorProps>(() => {
  // useMeQuery()
  const { t } = useTranslation('navigation')
  return (
    <Tab.Navigator initialRouteName="ExplorerNavigator" tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{ tabBarLabel: t('ProfileNavigator') }}
      />
      <Tab.Screen
        name="ExplorerNavigator"
        component={ExplorerNavigator}
        options={{ tabBarLabel: t('ExplorerNavigator') }}
      />
      <Tab.Screen
        name="RequestNavigator"
        component={RequestNavigator}
        options={{ tabBarLabel: t('RequestNavigator') }}
      />
    </Tab.Navigator>
  )
})
