import React, { memo } from 'react'
import { Feather } from '@expo/vector-icons'
import { IconProps } from './Icon.props'

export const Icon = memo<IconProps>(({ name, size = 20, style }) => {
  return <Feather style={style} name={name} size={size} />
})
