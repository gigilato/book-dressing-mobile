import { ValidationRules } from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface FormInputProps extends TextInputProps {
  name: string
  defaultValue?: string
  rules?: ValidationRules
}
