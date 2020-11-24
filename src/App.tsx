import React, { memo, useCallback, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'
import { AppLoading } from '@components'
import { AuthProvider } from '@components/providers'
import { RootNavigator } from '@navigation'
import { client } from '@api/apollo'

export const App = memo(() => {
  const [loading, isLoading] = useState(true)
  const onFinishLoading = useCallback(() => isLoading(false), [isLoading])

  if (loading) return <AppLoading onFinishLoading={onFinishLoading} />

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  )
})
