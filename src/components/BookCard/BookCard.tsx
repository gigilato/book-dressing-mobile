import React, { memo, useMemo } from 'react'
import { theme } from '@theme'
import { Image, Pressable } from '@components/ui'
import { BookCardProps } from './BookCard.props'

const {
  radii,
  sizes: { bookCardHeight, bookCardWidth, bookCardNoCoverHeight, bookCardNoCoverWidth },
} = theme

export const BookCard = memo<BookCardProps>(({ data, onPress, ratioWidth }) => {
  const containerProps = useMemo(
    () => ({
      bg: 'reverseBackground',
      borderRadius: radii.s,
      width: ratioWidth ?? bookCardWidth,
      height: ratioWidth ? (ratioWidth * bookCardHeight) / bookCardWidth : bookCardHeight,
    }),
    [ratioWidth]
  )
  return (
    <Pressable
      onPress={() => onPress(data)}
      scale={0.98}
      control="debounce"
      disabled={!data.pictureUrl}>
      {data.pictureUrl ? (
        <Image source={{ uri: data.pictureUrl }} resizeMode="cover" {...containerProps} />
      ) : (
        <Image
          source={'bookUnavaliable'}
          width={bookCardNoCoverWidth}
          height={bookCardNoCoverHeight}
          resizeMode="contain"
        />
      )}
    </Pressable>
  )
})
