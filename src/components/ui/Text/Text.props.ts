import { ColorProps, SpaceProps, TypoProps } from '@theme'

export type TextVariant = 'body' | 'title' | 'header'

export type TextProps = ColorProps &
  SpaceProps &
  TypoProps & {
    variant?: TextVariant
  }
