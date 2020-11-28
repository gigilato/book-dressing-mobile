import React, { memo, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { Image, Pressable, Box } from '@components/ui'
import { BookCardProps } from './BookCard.props'

export const BookCard = memo<BookCardProps>(({ data, onPress }) => {
  const {
    radii,
    sizes: { bookCardHeight, bookCardWidth, bookCardNoCoverHeight, bookCardNoCoverWidth },
  } = useTheme()
  const containerProps = useMemo(
    () => ({
      bg: 'reverseBackground',
      borderRadius: radii.s,
      width: bookCardWidth,
      height: bookCardHeight,
    }),
    [bookCardHeight, bookCardWidth, radii.s]
  )
  return (
    <Pressable onPress={() => onPress(data)} scale={0.98} control="debounce">
      {data.thumbnailUrl ? (
        //@ts-ignore
        <Image source={{ uri: data.thumbnailUrl }} resizeMode="cover" {...containerProps} />
      ) : (
        //@ts-ignore
        <Box justifyContent="center" alignItems="center" {...containerProps}>
          <Image
            source={'bookUnavaliable'}
            width={bookCardNoCoverWidth}
            height={bookCardNoCoverHeight}
            resizeMode="contain"
          />
        </Box>
      )}
    </Pressable>
  )
})
