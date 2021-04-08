import React, { memo } from 'react'
import { Feather } from '@expo/vector-icons'
import { getSpacing, useStyle } from '@hooks/useStyle'
import { Pressable } from '@components/ui/Pressable'
import { IconProps } from './Icon.props'

export const Icon = memo<IconProps>(
  ({ name, size = 20, color = 'text', onPress, pressableProps, ...props }) => {
    const [currentProps, themeStyle] = useStyle({ color, ...props })
    const iconSize = getSpacing(size)
    return (
      <Pressable disabled={!onPress} onPress={onPress} {...pressableProps}>
        <Feather name={name} size={iconSize} style={themeStyle} {...currentProps} />
      </Pressable>
    )
  }
)
