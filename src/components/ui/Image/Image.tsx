import React, { memo, useMemo } from 'react'
import { Image as RNImage, ImageStyle, StyleProp } from 'react-native'
import _ from 'lodash'
import { images } from '@assets'
import { useStyle } from '@hooks/useStyle'
import { ImageProps } from './Image.props'
import { styles } from './Image.styles'

export const Image = memo<ImageProps>(({ source, variant, style, ...props }) => {
  const [otherProps, themeStyle] = useStyle<any, ImageStyle>(props)
  const imageStyles = useMemo(
    () => _.flattenDeep<StyleProp<ImageStyle>>([variant && styles[variant], style, themeStyle]),
    [variant, themeStyle, style]
  )
  return (
    <RNImage
      source={typeof source === 'string' ? images[source] : source}
      style={imageStyles}
      {...otherProps}
    />
  )
})
