import { ImageProps } from '@components/ui'

export type AvatarProps = Omit<
  ImageProps,
  'source' | 'h' | 'height' | 'w' | 'width' | 'borderRadius'
> & {
  uri?: string
  size?: number
}
