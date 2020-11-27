import { DefaultTheme } from 'styled-components'
import { colors } from './theme.colors'
import { sizes } from './theme.sizes'
import { fonts } from './theme.fonts'
import { space } from './theme.space'
import { fontSizes } from './theme.fontSizes'
import { radii } from './theme.radii'

export * from './theme.palette'
export * from './theme.sizes'
export * from './theme.colors'
export * from './theme.types'
export * from './theme.fonts'
export * from './theme.space'
export * from './theme.fontSizes'
export * from './theme.radii'

export const theme: DefaultTheme = {
  colors,
  sizes,
  fonts,
  space,
  fontSizes,
  radii,
} as const
