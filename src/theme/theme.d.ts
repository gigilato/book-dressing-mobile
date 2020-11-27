import 'styled-components'
import { Theme } from 'styled-system'
import { colors } from './theme.colors'
import { sizes } from './theme.sizes'
import { fonts } from './theme.fonts'
import { space } from './theme.space'
import { fontSizes } from './theme.fontSizes'
import { radii } from './theme.radii'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: typeof colors
    sizes: typeof sizes
    fonts: typeof fonts
    space: typeof space
    fontSizes: typeof fontSizes
    radii: typeof radii
  }
}
