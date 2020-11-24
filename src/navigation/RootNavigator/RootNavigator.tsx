import React, { memo, useRef, useEffect, useState } from 'react'
import firebase from 'firebase'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { navigation, auth } from '@services'
import { RootNavigatorParamList } from './RootNavigator.types'
import { TabNavigator } from '../TabNavigator'
import { AuthNavigator } from '../AuthNavigator'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

export const RootNavigator = memo(() => {
  const navigationRef = useRef<NavigationContainerRef>()

  useEffect(() => {
    navigation.setRef(navigationRef)
  })
  const [isAuthenticated, setAuthentification] = useState(!!auth.getValue())

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then(async (accessToken) => {
          await auth.setValue({
            accessToken,
            refreshToken: user.refreshToken,
            userId: user.uid,
          })
          setAuthentification(true)
        })
      } else {
        setAuthentification(false)
        auth.clear()
      }
    })
  }, [])

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
    </NavigationContainer>
  )
})
