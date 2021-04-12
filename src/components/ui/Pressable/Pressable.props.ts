import { FunctionComponent } from 'react'
import { PressableProps as RNPressableProps, StyleProp, ViewStyle } from 'react-native'
import { ColorProps, BorderProps, SpaceProps, LayoutProps, FlexProps, PositionProps } from '@theme'

export type AnimatedPressableComponent = FunctionComponent<
  Omit<RNPressableProps, 'style'> & {
    style: any
  }
>

export type PressableProps = Omit<RNPressableProps, 'style'> &
  ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps & {
    style?: StyleProp<ViewStyle>
    control?: 'debounce' | 'throttle'
    pressScale?: number
    pressOpacity?: number
  }
