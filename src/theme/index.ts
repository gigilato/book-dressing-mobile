import { DefaultTheme } from 'styled-components'
import { colors } from './theme.colors'
import { metrics } from './theme.metrics'

export * from './theme.palette'
export * from './theme.metrics'
export * from './theme.colors'
export * from './theme.types'

export const theme: DefaultTheme = {
  colors,
  metrics,
} as const
