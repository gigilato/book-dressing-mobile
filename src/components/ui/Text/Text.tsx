import styled from 'styled-components/native'
import { color, space, typography, variant, fontSize } from 'styled-system'
import { TextProps, TextVariant } from './Text.props'

export const Text = styled.Text<TextProps>(
  color,
  space,
  typography,
  fontSize,
  variant<TextProps, TextVariant>({
    variants: {
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
    },
  })
)
