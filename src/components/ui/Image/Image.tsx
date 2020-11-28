import React, { memo } from 'react'
import styled from 'styled-components/native'
import { space, flex, layout, position, borderRadius, size, variant, color } from 'styled-system'
import { images } from '@assets'
import { ImageProps, StyledImageProps, ImageVariant } from './Image.props'

const StyledImage = styled.Image<StyledImageProps>`
  ${space}
  ${color}
  ${flex}
  ${layout}
  ${position}
  ${borderRadius}
  ${size}
  ${variant<Omit<StyledImageProps, 'source'>, ImageVariant>({
    variants: {
      full: {
        flex: 1,
        width: undefined,
        height: undefined,
      },
      absoluteFill: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
    },
  })}
`

export const Image = memo<ImageProps>(({ source, ...props }) => {
  return <StyledImage source={typeof source === 'string' ? images[source] : source} {...props} />
})
