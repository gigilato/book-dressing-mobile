import { ColorValue, FontSizeValue, FontValue } from '@theme'
import { TextVariant } from './Text.props'

export const textVariants: Record<
  TextVariant,
  { color: ColorValue; fontFamily: FontValue; fontSize: FontSizeValue }
> = {
  body: {
    color: 'text',
    fontFamily: 'poppins400',
    fontSize: 'normal',
  },
  input: {
    color: 'text',
    fontFamily: 'poppins400',
    fontSize: 'big',
  },
  title: {
    fontFamily: 'poppins500',
    color: 'text',
    fontSize: 'h3',
  },
  header: {
    fontFamily: 'poppins600',
    color: 'text',
    fontSize: 'h2',
  },
  label: {
    color: 'text',
    fontFamily: 'poppins500',
    fontSize: 'normal',
  },
  span: {
    color: 'text',
    fontFamily: 'poppins400Italic',
    fontSize: 'small',
  },
  error: {
    color: 'error',
    fontFamily: 'poppins200',
    fontSize: 'small',
  },
  buttonPrimary: {
    color: 'text',
    fontFamily: 'poppins600',
    fontSize: 'normal',
  },
  buttonSecondary: {
    color: 'text',
    fontFamily: 'poppins500',
    fontSize: 'normal',
  },
  buttonText: {
    color: 'text',
    fontFamily: 'poppins500',
    fontSize: 'big',
  },
}
