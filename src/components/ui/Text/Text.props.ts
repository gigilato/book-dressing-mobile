import { ColorProps, SpaceProps } from '@theme'

export type TextVariant = 'body' | 'title'

export type TextProps = ColorProps &
  SpaceProps & {
    variant?: TextVariant
  }
