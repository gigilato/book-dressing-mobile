import { FunctionComponent } from 'react'
import { ColorProps, SpaceProps, TypoProps, LayoutProps } from '@theme'

export type IconProps = ColorProps &
  SpaceProps &
  TypoProps &
  LayoutProps & {
    name: string
    size?: number
  }

export type StyledIconComponent = FunctionComponent<IconProps>
