import { ImageProps as RNImageProps } from 'react-native'
import { SpaceProps, LayoutProps, FlexProps, PositionProps, RadiiProps, ColorProps } from '@theme'
import { ImageName } from '@assets'

export { ImageName } from '@assets'

export type ImageVariant = 'absoluteFill' | 'full'

export type StyledImageProps = RNImageProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps &
  RadiiProps & { variant?: ImageVariant }

export type ImageProps = Omit<StyledImageProps, 'style' | 'source'> & {
  source: ImageName | { uri: string }
}
