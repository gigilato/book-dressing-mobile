import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, ForgotPassword } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { AuthNavigatorParamList } from './AuthNavigator.types'

const Stack = createStackNavigator<AuthNavigatorParamList>()

export const AuthNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
})
