import React, { memo } from 'react'
import { Feather } from '@expo/vector-icons'
import { useStyle } from '@hooks/useStyle'
import { IconProps } from './Icon.props'

export const Icon = memo<IconProps>(({ name, size = 20, ...props }) => {
  const [currentProps, themeStyle] = useStyle(props)
  return <Feather name={name} size={size} style={themeStyle} {...currentProps} />
})
