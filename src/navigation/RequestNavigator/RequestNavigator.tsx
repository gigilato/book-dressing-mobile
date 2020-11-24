import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Profile } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { RequestNavigatorParamList } from './RequestNavigator.types'

const Stack = createStackNavigator<RequestNavigatorParamList>()

export const RequestNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
})
