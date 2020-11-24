import { memo, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
// import { Asset } from 'expo-asset'
import { i18n, firebase, auth, navigation } from '@services'
import { fonts } from '@assets'
import { AppLoadingProps } from './AppLoading.props'

SplashScreen.preventAutoHideAsync().catch(() => null)

export const AppLoading = memo<AppLoadingProps>(({ onFinishLoading }) => {
  useEffect(() => {
    Promise.all([
      Font.loadAsync(fonts),
      // Asset.loadAsync(Object.values(images)),
      i18n.setup(),
      firebase.setup(),
      auth.setup(navigation),
    ]).then(async () => {
      await onFinishLoading()
      SplashScreen.hideAsync()
    })
  }, [onFinishLoading])

  return null
})
