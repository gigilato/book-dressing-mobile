import React, { memo } from 'react'
import { Image } from '@components/ui'
import { AvatarProps } from './Avatar.props'

export const Avatar = memo<AvatarProps>(({ uri, size = 20, ...props }) => {
  return (
    <Image
      source={uri ? { uri } : 'defaultUser'}
      h={size}
      w={size}
      borderRadius={size / 2}
      bg="secondaryBackground"
      {...props}
    />
  )
})
