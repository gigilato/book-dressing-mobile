import styled from 'styled-components/native'
import { color, space, variant } from 'styled-system'
import { TextProps, TextVariant } from './Text.props'

export const Text = styled.Text<TextProps>(
  color,
  space,
  variant<TextProps, TextVariant>({
    variants: {
      body: {
        color: 'text',
      },
      title: {
        bg: 'primary',
        color: 'error',
      },
    },
  })
)
