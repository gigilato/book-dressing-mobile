import { PressableProps } from '@components/ui/Pressable'
import { TextProps } from '@components/ui/Text'

export type ButtonVariant = 'primary' | 'secondary' | 'text'

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string
  loading?: boolean
  variant?: ButtonVariant
  textProps?: TextProps
}
