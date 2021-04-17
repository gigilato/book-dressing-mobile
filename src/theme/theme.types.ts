import { FlexStyle } from 'react-native'
import { LiteralUnion } from '@utils/types'
import { spacings } from './theme.spacings'
import { palette } from './theme.palette'
import { sizes } from './theme.sizes'
import { radii } from './theme.radii'
import { layouts } from './theme.layouts'
import { fontSizes } from './theme.fontSizes'
import { fonts } from './theme.fonts'

export type Palette = keyof typeof palette
export type Spacing = keyof typeof spacings
export type Radii = keyof typeof radii
export type Sizes = keyof typeof sizes
export type FontSizes = keyof typeof fontSizes
export type Fonts = keyof typeof fonts
export type Layout = keyof typeof layouts
export type Color = keyof Colors

type ColorVal = LiteralUnion<Palette>
export interface Colors {
  primary: ColorVal
  error: ColorVal
  background: ColorVal
  reverseBackground: ColorVal
  secondaryBackground: ColorVal
  ternaryBackground: ColorVal
  text: ColorVal
  placeholder: ColorVal
  reverseText: ColorVal
  card: ColorVal
  border: ColorVal
  notification: ColorVal
  skeletonPrimaryColor: ColorVal
  skeletonSecondaryColor: ColorVal
}

export type ColorValue = LiteralUnion<Color | Palette>
export type FontValue = LiteralUnion<Fonts>
export type SpacingValue = LiteralUnion<Spacing | Sizes> | number
export type RadiiValue = Radii | number
export type SizeValue = LiteralUnion<Spacing | Sizes> | number
export type FontSizeValue = FontSizes | number

export interface ColorProps {
  bg?: ColorValue
  backgroundColor?: ColorValue
  color?: ColorValue
  opacity?: number
}

export interface BorderProps {
  borderWidth?: number | 'hairline'
  borderColor?: ColorValue
  borderRadius?: RadiiValue
  borderTopLeftRadius?: RadiiValue
  borderTopRightRadius?: RadiiValue
  borderBottomLeftRadius?: RadiiValue
  borderBottomRightRadius?: RadiiValue
  BorderLeftRadius?: RadiiValue
  BorderRightRadius?: RadiiValue
  BorderTopRadius?: RadiiValue
  BorderBottomRadius?: RadiiValue
  borderTopLeftWidth?: number
  borderTopRightWidth?: number
  borderBottomLeftWidth?: number
  borderBottomRightWidth?: number
  BorderLeftWidth?: number
  BorderRightWidth?: number
  BorderTopWidth?: number
  BorderBottomWidth?: number
}

export interface FontProps {
  fontFamily?: FontValue
  fontSize?: FontSizes
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
}

export interface SpaceProps {
  m?: SpacingValue
  mt?: SpacingValue
  mr?: SpacingValue
  mb?: SpacingValue
  ml?: SpacingValue
  mx?: SpacingValue
  my?: SpacingValue
  p?: SpacingValue
  pt?: SpacingValue
  pr?: SpacingValue
  pb?: SpacingValue
  pl?: SpacingValue
  px?: SpacingValue
  py?: SpacingValue
}

export interface LayoutProps {
  h?: SizeValue
  w?: SizeValue
  height?: SizeValue
  width?: SizeValue
  size?: SizeValue
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
  top?: SizeValue
  right?: SizeValue
  bottom?: SizeValue
  left?: SizeValue
  position?: FlexStyle['position']
}
