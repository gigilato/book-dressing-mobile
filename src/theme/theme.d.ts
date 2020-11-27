import 'styled-components'
import { Theme } from 'styled-system'
import { colors } from './theme.colors'
import { metrics } from './theme.metrics'
import { fonts } from './theme.fonts'
import { space } from './theme.space'
import { fontSizes } from './theme.fontSizes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: typeof colors
    metrics: typeof metrics
    fonts: typeof fonts
    space: typeof space
    fontSizes: typeof fontSizes
  }
}
