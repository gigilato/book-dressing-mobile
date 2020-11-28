import { ReactNode } from 'react'
import { TextProps as RNTextProps } from 'react-native'
import { ColorProps, SpaceProps, TypoProps } from '@theme'

export type TextVariant = 'body' | 'title' | 'header' | 'label' | 'error' | 'button'

export type StyledTextProps = ColorProps & SpaceProps & TypoProps & { variant?: TextVariant }
export type TextProps = Omit<RNTextProps, 'style' | 'selectionColor'> & {
  children?: ReactNode
  textTransform?: 'upperfirst' | 'capitalize' | 'uppercase' | 'lowercase'
} & StyledTextProps
