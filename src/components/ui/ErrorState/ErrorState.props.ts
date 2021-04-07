import { StyleProp, ViewStyle } from 'react-native'

export type ErrorStateType = 'error' | 'empty'

export interface ErrorStateProps {
  containerStyle?: StyleProp<ViewStyle>
  type?: ErrorStateType
  onPressRetry?: () => any
  loading?: boolean
}
