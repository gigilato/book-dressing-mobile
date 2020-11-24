import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { AuthNavigatorParamList } from './AuthNavigator.types'

const Stack = createStackNavigator<AuthNavigatorParamList>()

export const AuthNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
})
