import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { registerRootComponent } from 'expo'
import { Platform, UIManager, LogBox } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { App } from './src/App'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

enableScreens(false)

SplashScreen.preventAutoHideAsync().catch(() => null)
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true)

registerRootComponent(App)
