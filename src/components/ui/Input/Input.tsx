import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import _ from 'lodash'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { theme } from '@theme'
import { InputProps } from './Input.props'

const { colors } = theme

export const Input = memo<InputProps>(
  forwardRef<TextInput, InputProps>(({ label, error, placeholder, ...props }, ref) => {
    return (
      <View flex={1}>
        {label && (
          <Text>
            <Text variant="label">{_.upperFirst(label)}</Text>
            {error && error.length !== 0 && <Text variant="error">{`  ${error}`}</Text>}
          </Text>
        )}
        <TextInput
          style={{ color: colors.text }}
          placeholderTextColor={colors.placeholder}
          placeholder={_.upperFirst(placeholder)}
          ref={ref}
          {...props}
        />
      </View>
    )
  })
)
