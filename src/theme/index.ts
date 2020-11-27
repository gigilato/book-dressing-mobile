import { DefaultTheme } from 'styled-components'
import { colors } from './theme.colors'
import { metrics } from './theme.metrics'
import { fonts } from './theme.fonts'
import { space } from './theme.space'
import { fontSizes } from './theme.fontSizes'

export * from './theme.palette'
export * from './theme.metrics'
export * from './theme.colors'
export * from './theme.types'
export * from './theme.fonts'
export * from './theme.space'
export * from './theme.fontSizes'

export const theme: DefaultTheme = {
  colors,
  metrics,
  fonts,
  space,
  fontSizes,
} as const
