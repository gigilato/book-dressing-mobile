import React, { memo, useMemo } from 'react'
import styled from 'styled-components/native'
import { color, space, typography, variant, fontSize } from 'styled-system'
import { upperFirst, capitalize } from 'lodash'
import { TextProps, TextVariant, StyledTextProps } from './Text.props'

const StyledText = styled.Text<StyledTextProps>`
  ${color}
  ${space}
  ${typography}
  ${fontSize}
  ${variant<StyledTextProps, TextVariant>({
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
      label: {
        color: 'text',
        fontFamily: 'poppins400',
        fontSize: 'big',
      },
      error: {
        color: 'error',
        fontFamily: 'poppins200',
        fontSize: 'small',
      },
    },
  })}
`

export const Text = memo<TextProps>(({ textTransform, children, ...props }) => {
  const content = useMemo(() => {
    if (typeof children !== 'string' || !textTransform) return children
    return textTransform === 'lowercase'
      ? children.toLowerCase()
      : textTransform === 'uppercase'
      ? children.toUpperCase()
      : textTransform === 'capitalize'
      ? capitalize(children)
      : upperFirst(children)
  }, [children, textTransform])
  return <StyledText {...props}>{content}</StyledText>
})
