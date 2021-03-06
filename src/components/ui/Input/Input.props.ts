import { Ref } from 'react'
import { TextInputProps, TextInput } from 'react-native'
import { ViewProps } from '@components/ui/View'

export type InputVariant = 'form'

export type InputProps = TextInputProps & {
  containerProps?: ViewProps
  ref?: Ref<TextInput>
  label?: string
  error?: string
  variant?: InputVariant
}
