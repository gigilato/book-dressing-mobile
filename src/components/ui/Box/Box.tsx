import styled from 'styled-components/native'
import {
  color,
  border,
  space,
  flex,
  layout,
  position,
  borderRadius,
  size,
  variant,
} from 'styled-system'
import { BoxProps, BoxVariant } from './Box.props'

export const Box = styled.View<BoxProps>`
  ${color}
  ${border}
  ${space}
  ${flex}
  ${layout}
  ${position}
  ${borderRadius}
  ${size}
  ${variant<BoxProps, BoxVariant>({
    variants: {
      screen: {
        flex: 1,
        px: 'l',
        pt: 's',
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
