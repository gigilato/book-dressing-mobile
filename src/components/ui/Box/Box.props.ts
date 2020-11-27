import {
  ColorProps,
  BorderProps,
  SpaceProps,
  LayoutProps,
  FlexProps,
  PositionProps,
  RadiiProps,
} from '@theme'

export type BoxVariant = 'screen' | 'absoluteFill'

export type BoxProps = ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps &
  RadiiProps & { variant?: BoxVariant }
