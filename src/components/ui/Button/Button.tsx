import React, { memo } from 'react'
import { ActivityIndicator } from 'react-native'
import { Pressable } from '@components/ui/Pressable'
import { Text } from '@components/ui/Text'
import { ButtonProps } from './Button.props'
import { useTheme } from 'styled-components'

export const Button = memo<ButtonProps>(
  ({ title, loading, variant = 'primary', control = 'throttle', ...props }) => {
    const { colors } = useTheme()
    return (
      <Pressable
        control={control}
        scale={variant === 'text' ? 0.98 : 0.95}
        variant={variant !== 'text' ? variant : undefined}
        {...props}>
        {loading ? (
          <ActivityIndicator color={colors.text} />
        ) : (
          <Text variant="button" textTransform="upperfirst">
            {title}
          </Text>
        )}
      </Pressable>
    )
  }
)
