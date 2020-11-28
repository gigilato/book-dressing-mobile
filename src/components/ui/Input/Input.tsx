import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { color, space, typography, fontSize, variant } from 'styled-system'
import { Box } from '@components/ui/Box'
import { Text } from '@components/ui/Text'
import { StyledInputComponent, StyledInputProps, InputProps, InputVariant } from './Input.props'

const StyledInput = styled(TextInput)`
  ${color}
  ${space}
  ${typography}
  ${fontSize}
  ${variant<StyledInputProps, InputVariant>({
    variants: {
      default: {
        fontFamily: 'poppins400',
        fontSize: 'big',
      },
    },
  })}
` as StyledInputComponent

export const Input = memo<InputProps>(
  forwardRef<TextInput, InputProps>(({ label, error, ...props }, ref) => {
    const { colors } = useTheme()
    return (
      <Box>
        <Text>
          <Text variant="label">{label}</Text>
          {error && error.length !== 0 && <Text variant="error">{`  ${error}`}</Text>}
        </Text>
        <StyledInput
          variant="default"
          color="text"
          placeholderTextColor={colors.placeholder}
          ref={ref}
          {...props}
        />
      </Box>
    )
  })
)
