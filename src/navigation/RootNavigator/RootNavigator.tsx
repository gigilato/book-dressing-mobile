import React, { memo, useRef, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigation, notifier } from '@services'
import { theme } from '@theme'
import { Notifier, NotifierRef } from '@components'
import { TabNavigator } from '@navigation/TabNavigator'
import { AuthNavigator } from '@navigation/AuthNavigator'
import { RootNavigatorParamList, RootNavigatorProps } from './RootNavigator.types'

const Stack = createStackNavigator<RootNavigatorParamList>()

export const RootNavigator = memo<RootNavigatorProps>(({ isAuthenticated }) => {
  const navigationRef = useRef<NavigationContainerRef>(null)
  const notifierRef = useRef<NotifierRef>(null)

  useEffect(() => {
    navigation.setRef(navigationRef)
    notifier.setRef(notifierRef)
  }, [])

  return (
    <NavigationContainer ref={navigationRef} theme={{ dark: true, ...theme }}>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
      <Notifier ref={notifierRef} />
    </NavigationContainer>
  )
})
