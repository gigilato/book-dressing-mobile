import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import upperFirst from 'lodash/upperFirst'
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
  forwardRef<TextInput, InputProps>(({ label, error, placeholder, full, ...props }, ref) => {
    const { colors } = useTheme()
    return (
      <Box flex={full ? 1 : undefined}>
        {label && (
          <Text>
            <Text variant="label">{upperFirst(label)}</Text>
            {error && error.length !== 0 && <Text variant="error">{`  ${error}`}</Text>}
          </Text>
        )}
        <StyledInput
          variant="default"
          color="text"
          placeholderTextColor={colors.placeholder}
          placeholder={upperFirst(placeholder)}
          ref={ref}
          {...props}
        />
      </Box>
    )
  })
)
