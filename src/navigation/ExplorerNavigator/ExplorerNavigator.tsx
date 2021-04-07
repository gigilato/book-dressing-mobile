import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Explorer } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { ExplorerNavigatorParamList } from './ExplorerNavigator.types'

const Stack = createStackNavigator<ExplorerNavigatorParamList>()

export const ExplorerNavigator = memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="Explorer" component={Explorer} />
    </Stack.Navigator>
  )
})
