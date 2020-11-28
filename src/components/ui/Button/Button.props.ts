import { PressableProps, PressableVariant } from '@components/ui/Pressable'

export type ButtonProps = Omit<PressableProps, 'variant'> & {
  title: string
  loading?: boolean
  variant?: PressableVariant | 'text'
}
