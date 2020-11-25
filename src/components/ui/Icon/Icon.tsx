import React, { memo } from 'react'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '@assets/icons/icons.config'
import { IconProps } from './Icon.props'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'book-dressing', 'book-dressing.ttf')

export const Icon = memo<IconProps>(({ name, size = 20, style }) => {
  return <CustomIcon style={style} name={name} size={size} />
})
