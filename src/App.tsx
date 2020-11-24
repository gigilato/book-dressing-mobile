import React, { memo, useCallback, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppLoading } from '@components'
import { AuthProvider } from '@components/providers'
import { RootNavigator } from '@navigation'

export const App = memo(() => {
  const [loading, isLoading] = useState(true)
  const onFinishLoading = useCallback(() => isLoading(false), [isLoading])

  if (loading) return <AppLoading onFinishLoading={onFinishLoading} />

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  )
})
