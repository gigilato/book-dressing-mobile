import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import _ from 'lodash'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { theme } from '@theme'
import { InputProps } from './Input.props'
import { styles } from './input.styles'
import { inputVariants } from './Input.utils'

const { colors } = theme

export const Input = memo<InputProps>(
  forwardRef<TextInput, InputProps>(
    ({ label, error, placeholder, style, variant, containerProps, ...props }, ref) => {
      return (
        <View {...containerProps}>
          {label && (
            <Text>
              <Text variant="label">{_.upperFirst(label)}</Text>
              {error && error.length !== 0 && <Text variant="error">{`  ${error}`}</Text>}
            </Text>
          )}
          <TextInput
            style={[styles.input, variant && inputVariants[variant], style]}
            placeholderTextColor={colors.placeholder}
            placeholder={_.upperFirst(placeholder)}
            ref={ref}
            {...props}
          />
        </View>
      )
    }
  )
)
