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
  title: {
    fontFamily: 'poppins500',
    color: 'text',
    fontSize: 'h3',
  },
  header: {
    fontFamily: 'poppins600',
    color: 'text',
    fontSize: 'h1',
  },
  label: {
    color: 'text',
    fontFamily: 'poppins600',
    fontSize: 'big',
  },
  error: {
    color: 'error',
    fontFamily: 'poppins200',
    fontSize: 'small',
  },
  button: {
    color: 'text',
    fontFamily: 'poppins600',
    fontSize: 'big',
  },
}
