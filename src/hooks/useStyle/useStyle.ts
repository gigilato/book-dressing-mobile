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
  BorderLeftRadius: handler(getRadius, 'borderTopLeftRadius', 'borderBottomLeftWidth'),
  BorderRightRadius: handler(getRadius, 'borderTopRightRadius', 'borderBottomRightWidth'),
  BorderTopRadius: handler(getRadius, 'borderTopRightRadius', 'borderTopLeftRadius'),
  BorderBottomRadius: handler(getRadius, 'borderBottomRightRadius', 'borderBottomLeftRadius'),
  BorderTopWidth: handler(getRadius, 'borderTopRightWidth', 'borderTopLeftWidth'),
  BorderBottomWidth: handler(getRadius, 'borderBottomRightWidth', 'borderBottomLeftWidth'),
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
}

export const useStyle = <T, S = ViewStyle>(props: Record<string, any>): [T, StyleProp<S>] => {
  const themedStyle = useMemo(() => {
    const currentProps: T = <T>{}
    const style = {}

    // Any props that doesn't need treatment will be directly added to the style object
    Object.keys(props).forEach((key) => {
      if (styledProps[key]) styledProps[key](style, key, props[key])
      else {
        currentProps[key] = props[key]
        style[key] = props[key]
      }
    })
    return [currentProps, style] as [T, StyleProp<S>]
  }, [props])

  return themedStyle
}
