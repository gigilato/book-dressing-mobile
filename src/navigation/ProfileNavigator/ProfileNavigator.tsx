import React, { memo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MyProfile, SearchBook } from '@screens'
import { defaultStackScreenOptions, HeaderTitle } from '../navigation.utils'
import { ProfileNavigatorParamList } from './ProfileNavigator.types'

const Stack = createStackNavigator<ProfileNavigatorParamList>()

export const ProfileNavigator = memo(() => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfile"
      screenOptions={{
        ...defaultStackScreenOptions,
      }}>
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={({ route }) => ({
          headerTitle: ({ onLayout }) => (
            <HeaderTitle onLayout={onLayout}>{route.params?.data?.username ?? ''}</HeaderTitle>
          ),
        })}
      />
      <Stack.Screen name="SearchBook" component={SearchBook} />
    </Stack.Navigator>
  )
})
