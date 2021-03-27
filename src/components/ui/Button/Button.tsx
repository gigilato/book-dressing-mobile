import React, { memo } from 'react'
import { ActivityIndicator } from 'react-native'
import { Pressable } from '@components/ui/Pressable'
import { Text } from '@components/ui/Text'
import { theme } from '@theme'
import { ButtonProps } from './Button.props'
import { buttonVariants } from './Button.utils'

export const Button = memo<ButtonProps>(
  ({ title, loading, variant = 'button', control = 'throttle', ...props }) => {
    return (
      <Pressable
        control={control}
        scale={variant === 'text' ? 0.98 : 0.95}
        {...buttonVariants[variant]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={theme.colors.text} />
        ) : (
          <Text variant="button" textTransform="upperfirst">
            {title}
          </Text>
        )}
      </Pressable>
    )
  }
)
