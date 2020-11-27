import { DefaultTheme } from 'styled-components'
import * as SS from 'styled-system'

export type RequiredTheme = Required<DefaultTheme>
export type ColorProps = SS.ColorProps<RequiredTheme>
export type BorderProps = SS.BorderProps<RequiredTheme>
export type SpaceProps = SS.SpaceProps<RequiredTheme>
export type LayoutProps = SS.LayoutProps<RequiredTheme>
export type FlexProps = SS.FlexProps<RequiredTheme>
export type PositionProps = SS.PositionProps<RequiredTheme>
export type TypoProps = SS.TypographyProps<RequiredTheme>
export type RadiiProps = SS.BorderRadiusProps<RequiredTheme>
