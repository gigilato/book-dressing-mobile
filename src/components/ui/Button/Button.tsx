import React, { memo } from 'react'
import _ from 'lodash'
import { ActivityIndicator } from 'react-native'
import { Pressable } from '@components/ui/Pressable'
import { Text, TextVariant } from '@components/ui/Text'
import { theme } from '@theme'
import { ButtonProps } from './Button.props'
import { buttonVariants } from './Button.utils'

export const Button = memo<ButtonProps>(
  ({ title, loading, variant = 'primary', control = 'throttle', textProps, ...props }) => {
    return (
      <Pressable
        control={control}
        scale={variant === 'text' ? 0.98 : 0.95}
        {...buttonVariants[variant]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={theme.colors.text} />
        ) : (
          <Text
            variant={`button${_.upperFirst(variant)}` as TextVariant}
            textTransform="upperfirst"
            {...textProps}>
            {title}
          </Text>
        )}
      </Pressable>
    )
  }
)
