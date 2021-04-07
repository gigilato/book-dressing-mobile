import { ReactNode } from 'react'
import { TextProps as RNTextProps } from 'react-native'
import { ColorProps, LayoutProps, SpaceProps, FontProps } from '@theme'

export type TextVariant = 'body' | 'title' | 'header' | 'label' | 'error' | 'button' | 'input'

export interface TextProps
  extends Omit<RNTextProps, 'fontSize' | 'fontFamily'>,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FontProps {
  variant?: TextVariant
  children?: ReactNode
  textTransform?: 'upperfirst' | 'capitalize' | 'uppercase' | 'lowercase'
}
