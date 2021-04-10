import { ButtonVariant } from './Button.props'

export const buttonVariants: Record<ButtonVariant, any> = {
  primary: {
    px: 'm',
    py: 'xs',
    backgroundColor: 'primary',
    borderRadius: 'xs',
    alignItems: 'center',
  },
  secondary: {
    px: 'm',
    py: 'xxs',
    borderWidth: 'hairline',
    borderColor: 'text',
    borderRadius: 'xs',
    alignItems: 'center',
  },
  text: {},
}
