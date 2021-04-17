import React, { memo } from 'react'
import { Loans } from '@screens'
import { createStackNavigator } from '@react-navigation/stack'
import { defaultStackScreenOptions } from '../navigation.utils'
import { RequestNavigatorParamList } from './RequestNavigator.types'

const Stack = createStackNavigator<RequestNavigatorParamList>()

export const RequestNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="Loans" component={Loans} />
    </Stack.Navigator>
  )
})
