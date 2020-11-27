import 'styled-components'
import { Theme } from 'styled-system'
import { colors } from './theme.colors'
import { metrics } from './theme.metrics'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: typeof colors
    metrics: typeof metrics
  }
}
