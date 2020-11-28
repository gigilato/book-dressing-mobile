import { FunctionComponent } from 'react'
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

export type PressableVariant = 'primary'

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
  RadiiProps & { variant?: PressableVariant }

export type PressableProps = Omit<RNPressableProps, 'style'> & {
  scale?: number
  debounce?: boolean
} & StyledPressableProps
