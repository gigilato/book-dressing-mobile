import 'react-native-gesture-handler'
import { registerRootComponent } from 'expo'
import { Platform, UIManager } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { App } from './src/App'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental)
  UIManager.setLayoutAnimationEnabledExperimental(true)

enableScreens()

registerRootComponent(App)
