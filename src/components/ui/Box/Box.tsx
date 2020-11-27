import styled from 'styled-components/native'
import { color, border, space, flex, layout, position, borderRadius, size } from 'styled-system'
import { BoxProps } from './Box.props'

export const Box = styled.View<BoxProps>(
  color,
  border,
  space,
  flex,
  layout,
  position,
  borderRadius,
  size
)
