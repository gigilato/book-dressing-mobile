import React, { memo, useLayoutEffect, useMemo, useState } from 'react'
import { Image as RNImage, ImageStyle, StyleProp } from 'react-native'
import _ from 'lodash'
import { images } from '@assets'
import { useStyle } from '@hooks/useStyle'
import { Nullable } from '@utils/types'
import { ImageProps } from './Image.props'
import { styles } from './Image.styles'
import { CacheManager } from './Image.cache'

export const Image = memo<ImageProps>(({ source, variant, style, ...props }) => {
  const [cachedUri, setCachedUri] = useState<Nullable<string>>(
    typeof source === 'string' ? null : CacheManager.get(source.uri).getCachedPath()
  )
  const [otherProps, themeStyle] = useStyle<any, ImageStyle>(props)
  const imageStyles = useMemo(
    () => _.flattenDeep<StyleProp<ImageStyle>>([variant && styles[variant], style, themeStyle]),
    [variant, themeStyle, style]
  )

  useLayoutEffect(() => {
    if (typeof source === 'string') return
    CacheManager.get(source.uri)
      .getPath()
      .then((uri) => setCachedUri(uri))
  }, [source])

  return (
    <RNImage
      source={
        typeof source === 'string' ? images[source] : { uri: cachedUri ? cachedUri : source.uri }
      }
      style={imageStyles}
      {...otherProps}
    />
  )
})
