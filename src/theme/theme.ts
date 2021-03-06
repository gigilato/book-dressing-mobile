import { colors } from './theme.colors'
import { spacings } from './theme.spacings'
import { fonts } from './theme.fonts'
import { fontSizes } from './theme.fontSizes'
import { sizes } from './theme.sizes'
import { layouts } from './theme.layouts'
import { palette } from './theme.palette'
import { radii } from './theme.radii'
import { timings } from './theme.timings'

export const theme = {
  colors,
  spacings,
  fonts,
  fontSizes,
  sizes,
  layouts,
  palette,
  radii,
  timings,
} as const

export type Theme = typeof theme
