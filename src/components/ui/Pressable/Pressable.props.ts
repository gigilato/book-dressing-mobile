import { PressableProps as RNPressableProps } from 'react-native'
import {
  ColorProps,
  BorderProps,
  SpaceProps,
  LayoutProps,
  FlexProps,
  PositionProps,
  RadiiProps,
} from '@theme'
import { FunctionComponent } from 'react'

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
  PositionProps &
  RadiiProps

export type PressableProps = Omit<RNPressableProps, 'style'> & {
  scale?: number
  debounce?: boolean
} & StyledPressableProps
