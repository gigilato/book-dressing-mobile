import { RegisterOptions } from 'react-hook-form'
import { InputProps } from '@components/ui'

export interface FormInputProps
  extends Omit<InputProps, 'label' | 'error' | 'placeholder' | 'onChangeText' | 'value'> {
  name: string
  defaultValue?: string
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>
}
