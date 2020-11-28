import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Profile, SearchBook } from '@screens'
import { defaultStackScreenOptions } from '../navigation.utils'
import { ProfileNavigatorParamList } from './ProfileNavigator.types'

const Stack = createStackNavigator<ProfileNavigatorParamList>()

export const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator
      initialRouteName="SearchBook"
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SearchBook" component={SearchBook} />
    </Stack.Navigator>
  )
})
