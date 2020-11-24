import React, { memo, useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from './components'

export const App = memo(() => {
  const [loading, isLoading] = useState(true)
  const onFinishLoading = useCallback(() => isLoading(false), [isLoading])

  if (loading) return <AppLoading onFinishLoading={onFinishLoading} />

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
