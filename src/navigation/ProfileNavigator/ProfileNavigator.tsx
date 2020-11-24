import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Profile } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { ProfileNavigatorParamList } from './ProfileNavigator.types'

const Stack = createStackNavigator<ProfileNavigatorParamList>()

export const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
})
