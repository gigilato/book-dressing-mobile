import React, { FC } from 'react'
import { Pressable, TextStyle, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import { variant } from 'styled-system'
import { ButtonProps, ButtonVariant } from './Button.props'

const Container = styled(Pressable)<{ variant?: ButtonVariant }>(
  variant<ViewStyle, ButtonVariant>({
    variants: {
      primary: {
        backgroundColor: 'primary',
      },
    },
  })
)
const Title = styled.Text<{ variant?: ButtonVariant }>(
  variant<TextStyle, ButtonVariant, 'variant'>({
    variants: {
      primary: {
        color: 'error',
      },
    },
  })
)

export const Button: FC<ButtonProps> = ({ variant: variantProps }) => {
  return (
    <Container variant={variantProps}>
      <Title variant={variantProps}>AHHHH</Title>
    </Container>
  )
}
