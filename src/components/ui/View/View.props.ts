import { ReactNode } from 'react'
import { ViewProps as ViewProperties } from 'react-native'
import { BorderProps, ColorProps, FlexProps, LayoutProps, SpaceProps, PositionProps } from '@theme'

export type ViewVariant = 'absoluteFill'

export interface ViewProps
  extends ViewProperties,
    ColorProps,
    FlexProps,
    BorderProps,
    SpaceProps,
    LayoutProps,
    PositionProps {
  variant?: ViewVariant
  children?: ReactNode
  shadow?: boolean
  safeTop?: boolean
  safeBottom?: boolean
}
