import { ReactNode } from 'react'
import { ViewProps as ViewProperties } from 'react-native'
import { ColorProps, FlexProps, SpaceProps } from '@theme'

export type ScreenVariant = 'scrollable'

export interface ScreenProps extends ViewProperties, ColorProps, FlexProps, SpaceProps {
  variant?: ScreenVariant
  children?: ReactNode
  safeTop?: boolean
  safeBottom?: boolean
  noPadding?: boolean
}
