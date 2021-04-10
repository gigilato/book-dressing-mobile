import { StyleProp, ViewStyle } from 'react-native'
import {
  theme,
  ColorValue,
  Layout,
  SizeValue,
  SpacingValue,
  RadiiValue,
  FontSizeValue,
} from '@theme'
import { useMemo } from 'react'
import { Style, Styler, Transformer } from './useStyle.types'

const handler = (transformer: Transformer, ...alias: string[]): Styler => {
  return (style: Style, key: string, value: any) => {
    if (!style) return
    if (alias.length === 0) style[key] = transformer(value)
    else alias.forEach((aliasKey) => (style[aliasKey] = transformer(value)))
  }
}

const { palette, colors, radii, sizes, spacings, layouts, fontSizes } = theme

export const getColor = (value: ColorValue) => colors[value] ?? palette[value] ?? value
export const getSpacing = (value: SpacingValue | SizeValue) =>
  spacings[value] ?? sizes[value] ?? value
export const getLayout = (value: Layout) => layouts[value] ?? value
export const getRadius = (value: RadiiValue) => radii[value] ?? value
export const getFontSize = (value: FontSizeValue) => fontSizes[value] ?? value
export const getPropsToStyle = (value: any) => value

const styledProps: Record<string, Styler> = {
  bg: handler(getColor, 'backgroundColor'),
  backgroundColor: handler(getColor),
  color: handler(getColor),
  borderColor: handler(getColor),
  borderRadius: handler(getRadius),
  borderTopLeftRadius: handler(getRadius),
  borderTopRightRadius: handler(getRadius),
  borderBottomLeftRadius: handler(getRadius),
  borderBottomRightRadius: handler(getRadius),
  borderLeftRadius: handler(getRadius, 'borderTopLeftRadius', 'borderBottomLeftWidth'),
  borderRightRadius: handler(getRadius, 'borderTopRightRadius', 'borderBottomRightWidth'),
  borderTopRadius: handler(getRadius, 'borderTopRightRadius', 'borderTopLeftRadius'),
  borderBottomRadius: handler(getRadius, 'borderBottomRightRadius', 'borderBottomLeftRadius'),
  borderWidth: handler(getSpacing, 'borderWidth'),
  borderTopWidth: handler(getSpacing, 'borderTopWidth'),
  borderBottomWidth: handler(getSpacing, 'borderBottomWidth'),
  borderRightWidth: handler(getSpacing, 'borderRightWidth'),
  borderLeftWidth: handler(getSpacing, 'borderLeftWidth'),
  m: handler(getSpacing, 'margin'),
  mt: handler(getSpacing, 'marginTop'),
  mr: handler(getSpacing, 'marginRight'),
  mb: handler(getSpacing, 'marginBottom'),
  ml: handler(getSpacing, 'marginLeft'),
  mx: handler(getSpacing, 'marginHorizontal'),
  my: handler(getSpacing, 'marginVertical'),
  p: handler(getSpacing, 'padding'),
  pt: handler(getSpacing, 'paddingTop'),
  pr: handler(getSpacing, 'paddingRight'),
  pb: handler(getSpacing, 'paddingBottom'),
  pl: handler(getSpacing, 'paddingLeft'),
  px: handler(getSpacing, 'paddingHorizontal'),
  py: handler(getSpacing, 'paddingVertical'),
  h: handler(getSpacing, 'height'),
  w: handler(getSpacing, 'width'),
  size: handler(getSpacing),
  height: handler(getSpacing),
  width: handler(getSpacing),
  minHeight: handler(getSpacing),
  minWidth: handler(getSpacing),
  maxHeight: handler(getSpacing),
  maxWidth: handler(getSpacing),
  top: handler(getSpacing),
  right: handler(getSpacing),
  bottom: handler(getSpacing),
  left: handler(getSpacing),
  zIndex: handler(getLayout),
  fontSize: handler(getFontSize),
  textAlign: handler(getPropsToStyle),
  fontFamily: handler(getPropsToStyle),
}

export const useStyle = <T, S = ViewStyle>(props: Record<string, any>): [T, StyleProp<S>] => {
  const themedStyle = useMemo(() => {
    const currentProps: T = <T>{}
    const style = {}

    // Any props that doesn't need treatment will be directly added to the style object
    Object.keys(props).forEach((key) =>
      styledProps[key] ? styledProps[key](style, key, props[key]) : (currentProps[key] = props[key])
    )
    return [currentProps, style] as [T, StyleProp<S>]
  }, [props])

  return themedStyle
}
