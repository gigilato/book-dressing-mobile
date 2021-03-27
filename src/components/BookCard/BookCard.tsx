import React, { memo, useMemo } from 'react'
import { theme } from '@theme'
import { Image, Pressable, View } from '@components/ui'
import { BookCardProps } from './BookCard.props'

const {
  radii,
  sizes: { bookCardHeight, bookCardWidth, bookCardNoCoverHeight, bookCardNoCoverWidth },
} = theme

export const BookCard = memo<BookCardProps>(({ data, onPress }) => {
  const containerProps = useMemo(
    () => ({
      bg: 'reverseBackground',
      borderRadius: radii.s,
      width: bookCardWidth,
      height: bookCardHeight,
    }),
    []
  )
  return (
    <Pressable onPress={() => onPress(data)} scale={0.98} control="debounce">
      {data.thumbnailUrl ? (
        //@ts-ignore
        <Image source={{ uri: data.thumbnailUrl }} resizeMode="cover" {...containerProps} />
      ) : (
        //@ts-ignore
        <View justifyContent="center" alignItems="center" {...containerProps}>
          <Image
            source={'bookUnavaliable'}
            width={bookCardNoCoverWidth}
            height={bookCardNoCoverHeight}
            resizeMode="contain"
          />
        </View>
      )}
    </Pressable>
  )
})
