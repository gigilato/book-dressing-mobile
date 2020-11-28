import { FunctionComponent, Ref } from 'react'
import { TextInputProps, TextInput } from 'react-native'
import { ColorProps, SpaceProps, TypoProps } from '@theme'

export type InputVariant = 'default'

export type StyledInputProps = ColorProps &
  SpaceProps &
  TypoProps &
  TextInputProps & { variant?: InputVariant }
export type StyledInputComponent = FunctionComponent<Omit<StyledInputProps, 'style'>>
export type InputProps = Omit<TextInputProps, 'style'> &
  StyledInputProps & { ref?: Ref<TextInput>; label?: string; error?: string; full?: boolean }
