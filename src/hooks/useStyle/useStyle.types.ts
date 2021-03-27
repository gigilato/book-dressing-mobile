import { StyleProp, ViewStyle } from 'react-native'

export type Style = StyleProp<ViewStyle>
export type Styler = (style: Style, key: string, value: any) => void
export type Transformer = (value: any) => void
