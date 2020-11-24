import React, { memo, useRef, useEffect, useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { navigation } from '@services'
import { useAuth } from '@hooks'
import { RootNavigatorParamList } from './RootNavigator.types'
import { TabNavigator } from '../TabNavigator'
import { AuthNavigator } from '../AuthNavigator'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

export const RootNavigator = memo(() => {
  const navigationRef = useRef<NavigationContainerRef>()

  useEffect(() => {
    navigation.setRef(navigationRef)
  })
  const { isAuthenticated } = useAuth()

  const CurrentNavigator = useMemo(
    () =>
      isAuthenticated ? (
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ stackAnimation: 'none' }}
        />
      ) : (
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ stackAnimation: 'none' }}
        />
      ),
    [isAuthenticated]
  )

  return (
    <NavigationContainer
      //@ts-ignore
      ref={navigationRef}>
      <StatusBar backgroundColor="transparent" translucent style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          stackPresentation: 'modal',
        }}>
        {CurrentNavigator}
      </Stack.Navigator>
    </NavigationContainer>
  )
})
