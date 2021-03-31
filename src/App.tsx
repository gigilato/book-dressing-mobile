import React, { memo, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'
import * as SplashScreen from 'expo-splash-screen'
import app from 'firebase'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { fonts, images } from '@assets'
import { i18n, firebase, Logger } from '@services'
import { RootNavigator } from '@navigation'
import { client } from '@api/apollo'

export const App = memo(() => {
  const [isLoading, setLoading] = useState(true)
  const [isAuthLoading, setAuthLoading] = useState(true)
  const [areAssetsLoading, setAssetsLoading] = useState(true)
  const [isAuthenticated, setAuthentication] = useState(false)

  useEffect(() => {
    Promise.all([
      Font.loadAsync(fonts),
      Asset.loadAsync(Object.values(images)),
      i18n.setup(),
    ]).then(() => setAssetsLoading(false))
  }, [])

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(async (user) => {
      const idToken = await (async () => (user ? user.getIdToken() : null))()
      firebase.setCurrentIdToken(idToken)
      if (idToken) Logger.log(`idToken = ${idToken}`)
      setAuthentication(!!user)
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!isAuthLoading && !areAssetsLoading) {
      setLoading(false)
      SplashScreen.hideAsync()
    }
  }, [isAuthLoading, areAssetsLoading])

  if (isLoading) return null

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <RootNavigator isAuthenticated={isAuthenticated} />
      </SafeAreaProvider>
    </ApolloProvider>
  )
})
