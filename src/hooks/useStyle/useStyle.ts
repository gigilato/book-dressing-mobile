import { StyleProp, ViewStyle } from 'react-native'
import { theme, ColorValue, Layout, SizeValue, SpacingValue, RadiiValue } from '@theme'
import { useMemo } from 'react'

type Style = StyleProp<ViewStyle>
type Styler = (style: Style, key: string, value: any) => void
type Handler = (value: any) => void

const handle = (handler: Handler, alias?: string): Styler => {
  return (style: Style, key: string, value: any) => {
    if (!style) return
    style[alias ? alias : key] = handler(value)
  }
}

const getColor = (value: ColorValue) => {
  const { palette, colors } = theme
  return colors[value] ?? palette[value] ?? value
}

const getSpacing = (value: SpacingValue | SizeValue) => {
  const { spacings, sizes } = theme
  return spacings[value] ?? sizes[value] ?? value
}

const getLayout = (value: Layout) => {
  const { layouts } = theme
  return layouts[value] ?? value
}

const getRadius = (value: RadiiValue) => {
  const { radii } = theme
  return radii[value] ?? value
}

const styledProps: Record<string, Styler> = {
  bg: handle(getColor, 'backgroundColor'),
  backgroundColor: handle(getColor),
  color: handle(getColor),
  borderColor: handle(getColor),
  borderRadius: handle(getRadius),
  borderTopLeftRadius: handle(getRadius),
  borderTopRightRadius: handle(getRadius),
  borderBottomLeftRadius: handle(getRadius),
  borderBottomRightRadius: handle(getRadius),
  m: handle(getSpacing, 'margin'),
  mt: handle(getSpacing, 'marginTop'),
  mr: handle(getSpacing, 'marginRight'),
  mb: handle(getSpacing, 'marginBottom'),
  ml: handle(getSpacing, 'marginLeft'),
  mh: handle(getSpacing, 'marginHorizontal'),
  mv: handle(getSpacing, 'marginVertical'),
  p: handle(getSpacing, 'padding'),
  pt: handle(getSpacing, 'paddingTop'),
  pr: handle(getSpacing, 'paddingRight'),
  pb: handle(getSpacing, 'paddingBottom'),
  pl: handle(getSpacing, 'paddingLeft'),
  ph: handle(getSpacing, 'paddingHorizontal'),
  pv: handle(getSpacing, 'paddingVertical'),
  h: handle(getSpacing, 'height'),
  w: handle(getSpacing, 'width'),
  height: handle(getSpacing),
  width: handle(getSpacing),
  minHeight: handle(getSpacing),
  minWidth: handle(getSpacing),
  maxHeight: handle(getSpacing),
  maxWidth: handle(getSpacing),
  top: handle(getSpacing),
  right: handle(getSpacing),
  bottom: handle(getSpacing),
  left: handle(getSpacing),
  zIndex: handle(getLayout),
}

export const useStyle = <T>(props: Record<string, any>): [T, StyleProp<ViewStyle>] => {
  const themedStyle = useMemo(() => {
    const filteredProps: T = <T>{}
    const style = {}

    // Any props that doesn't need treatment will be directly added to the style object
    Object.keys(props).forEach((key) => {
      if (styledProps[key]) styledProps[key](style, key, props[key])
      else {
        filteredProps[key] = props[key]
        style[key] = props[key]
      }
    })
    return [filteredProps, style] as [T, StyleProp<ViewStyle>]
  }, [props])

  return themedStyle
}
