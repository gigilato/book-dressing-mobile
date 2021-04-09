import React, { memo } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { getSpacing, useStyle } from '@hooks/useStyle'
import { Pressable } from '@components/ui/Pressable'
import { IconProps } from './Icon.props'

export const Icon = memo<IconProps>(
  ({ name, size = 20, rounded, color = 'text', onPress, pressableProps, ...props }) => {
    const [currentProps, themeStyle] = useStyle({ color, ...props })
    const iconSize = getSpacing(size)
    return (
      <Pressable disabled={!onPress} onPress={onPress} {...pressableProps}>
        <Ionicons
          name={name}
          size={iconSize}
          style={[rounded && { borderRadius: iconSize / 2 }, themeStyle]}
          {...currentProps}
        />
      </Pressable>
    )
  }
)
