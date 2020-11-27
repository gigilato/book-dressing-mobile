import React, { memo, useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'
import { AppLoading } from '@components'
import { RootNavigator } from '@navigation'
import { client } from '@api/apollo'
import { theme } from '@theme'

export const App = memo(() => {
  const [loading, isLoading] = useState(true)
  const onFinishLoading = useCallback(() => isLoading(false), [isLoading])

  if (loading) return <AppLoading onFinishLoading={onFinishLoading} />

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  )
})
