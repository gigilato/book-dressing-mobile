import { FunctionComponent } from 'react'
import { PressableProps as RNPressableProps, StyleProp, ViewStyle } from 'react-native'
import { ColorProps, BorderProps, SpaceProps, LayoutProps, FlexProps, PositionProps } from '@theme'

export type AnimatedPressableComponent = FunctionComponent<
  Omit<RNPressableProps, 'style'> & {
    style: any
  }
>

export type StyledPressableProps = ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps

export type PressableProps = Omit<RNPressableProps, 'style'> & {
  style?: StyleProp<ViewStyle>
  scale?: number
  control?: 'debounce' | 'throttle'
} & StyledPressableProps
