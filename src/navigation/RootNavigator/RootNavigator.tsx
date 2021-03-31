import React, { memo, useRef, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { FlashMessage } from '@components'
import { navigation } from '@services'
import { theme } from '@theme'
import { TabNavigator } from '@navigation/TabNavigator'
import { AuthNavigator } from '@navigation/AuthNavigator'
import { RootNavigatorParamList, RootNavigatorProps } from './RootNavigator.types'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

export const RootNavigator = memo<RootNavigatorProps>(({ isAuthenticated }) => {
  const navigationRef = useRef<NavigationContainerRef>(null)

  useEffect(() => {
    navigation.setRef(navigationRef)
  }, [])

  return (
    <NavigationContainer ref={navigationRef} theme={{ dark: true, ...theme }}>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          stackPresentation: 'modal',
        }}>
        {isAuthenticated ? (
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
        )}
      </Stack.Navigator>
      <FlashMessage />
    </NavigationContainer>
  )
})
