import { Platform, Linking } from 'react-native'
import Constants from 'expo-constants'
import * as IntentLauncher from 'expo-intent-launcher'

const pkg = Constants.manifest.releaseChannel
  ? Constants.manifest.android?.package
  : 'host.exp.exponent'

export const openAppSettings = () => {
  if (Platform.OS === 'ios') Linking.openURL('app-settings:')
  else
    IntentLauncher.startActivityAsync(IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS, {
      data: 'package:' + pkg,
    })
}
