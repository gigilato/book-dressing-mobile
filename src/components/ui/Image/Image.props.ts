import { ImageProps as RNImageProps } from 'react-native'
import { SpaceProps, LayoutProps, FlexProps, PositionProps, BorderProps, ColorProps } from '@theme'
import { ImageName } from '@assets'

export type ImageVariant = 'absoluteFill' | 'full'
export type ImageProps = Omit<RNImageProps, 'source'> &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexProps &
  PositionProps &
  BorderProps & {
    source: ImageName | { uri: string }
    variant?: ImageVariant
  }
