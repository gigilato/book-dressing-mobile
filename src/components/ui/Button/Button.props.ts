import { PressableProps } from '@components/ui/Pressable'

export type ButtonVariant = 'button' | 'text'

export type ButtonProps = Omit<PressableProps, 'children'> & {
  title: string
  loading?: boolean
  variant?: ButtonVariant
}
