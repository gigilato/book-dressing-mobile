import { IconName } from '@assets'
import { StyleProp, TextStyle } from 'react-native'

export interface IconProps {
  name: IconName
  size?: number
  style?: StyleProp<TextStyle>
}
