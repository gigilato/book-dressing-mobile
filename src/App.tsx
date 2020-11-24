import React, { memo, useCallback, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import firebase from 'firebase'
import { ApolloProvider } from '@apollo/client'
import { AppLoading } from '@components'
import { RootNavigator } from '@navigation'
import { client } from '@api/apollo'

export const App = memo(() => {
  const [loading, isLoading] = useState(true)
  const onFinishLoading = useCallback(() => isLoading(false), [isLoading])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user)
      } else {
        console.log('no user')
      }
    })
  })

  if (loading) return <AppLoading onFinishLoading={onFinishLoading} />

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ApolloProvider>
  )
})
