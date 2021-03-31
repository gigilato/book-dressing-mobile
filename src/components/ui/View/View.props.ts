import { ReactNode } from 'react'
import { ViewProps as ViewProperties } from 'react-native'
import { BorderProps, ColorProps, FlexProps, LayoutProps, SpaceProps } from '@theme'

export type ViewVariant = 'screen'

export interface ViewProps
  extends ViewProperties,
    ColorProps,
    FlexProps,
    BorderProps,
    SpaceProps,
    LayoutProps {
  variant?: ViewVariant
  children?: ReactNode
  shadow?: boolean
}
