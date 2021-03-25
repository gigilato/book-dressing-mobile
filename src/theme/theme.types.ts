import { FlexStyle } from 'react-native'
import { LiteralUnion } from '@utils/types'
import { spacings } from './theme.spacings'
import { palette } from './theme.palette'
import { sizes } from './theme.sizes'
import { radii } from './theme.radii'
import { layouts } from './theme.layouts'

export type Palette = keyof typeof palette
export type Spacing = keyof typeof spacings
export type Radii = keyof typeof radii
export type Sizes = keyof typeof sizes
export type Layout = keyof typeof layouts
export type Color = keyof Colors

type ColorVal = LiteralUnion<Palette>
export interface Colors {
  transparent: ColorVal
  background: ColorVal
  backgroundReverse: ColorVal
  primary: ColorVal
  active: ColorVal
  inactive: ColorVal
  text: ColorVal
  textReverse: ColorVal
  textDisabled: ColorVal
  danger: ColorVal
  success: ColorVal
  input: ColorVal
  placeholder: ColorVal
  secondaryText: ColorVal
}

export type ColorValue = LiteralUnion<Color | Palette>
export type SpacingValue = Spacing | number
export type RadiiValue = Radii | number
export type SizeValue = LiteralUnion<Spacing | Sizes> | number

export interface ColorProps {
  bg?: ColorValue
  backgroundColor?: ColorValue
  color?: ColorValue
}

export interface BorderProps {
  borderWidth?: number
  borderColor?: ColorValue
  borderRadius?: RadiiValue
  borderTopLeftRadius?: RadiiValue
  borderTopRightRadius?: RadiiValue
  borderBottomLeftRadius?: RadiiValue
  borderBottomRightRadius?: RadiiValue
}

export interface SpaceProps {
  m?: SpacingValue
  mt?: SpacingValue
  mr?: SpacingValue
  mb?: SpacingValue
  ml?: SpacingValue
  mh?: SpacingValue
  mv?: SpacingValue
  p?: SpacingValue
  pt?: SpacingValue
  pr?: SpacingValue
  pb?: SpacingValue
  pl?: SpacingValue
  ph?: SpacingValue
  pv?: SpacingValue
}

export interface LayoutProps {
  h?: SizeValue
  w?: SizeValue
  height?: SizeValue
  width?: SizeValue
  minWidth?: SizeValue
  minHeight?: SizeValue
  maxWidth?: SizeValue
  maxHeight?: SizeValue
  overflow?: FlexStyle['overflow']
}

export interface FlexProps
  extends Pick<
    FlexStyle,
    | 'alignItems'
    | 'alignContent'
    | 'alignSelf'
    | 'justifyContent'
    | 'flex'
    | 'flexWrap'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexBasis'
  > {}

export interface PositionProps {
  zIndex?: Layout | number
  top?: SpacingValue
  right?: SpacingValue
  bottom?: SpacingValue
  left?: SpacingValue
  position?: FlexStyle['position']
}
