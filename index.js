import 'react-native-gesture-handler'
import { registerRootComponent } from 'expo'
import { Platform, UIManager } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { App } from './src/App'

SplashScreen.preventAutoHideAsync().catch(() => null)
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true)

registerRootComponent(App)
