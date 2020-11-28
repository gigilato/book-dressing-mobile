import React, { memo } from 'react'
import styled from 'styled-components'
import { color, space, flex, layout, position, size as ssSize } from 'styled-system'
import { Feather } from '@expo/vector-icons'
import { IconProps, StyledIconComponent } from './Icon.props'

const StyledIcon = styled(Feather)`
  ${color}
  ${space}
  ${flex}
  ${layout}
  ${position}
  ${ssSize}
` as StyledIconComponent

export const Icon = memo<IconProps>(({ name, size = 20, ...props }) => {
  return <StyledIcon name={name} size={size} {...props} />
})
