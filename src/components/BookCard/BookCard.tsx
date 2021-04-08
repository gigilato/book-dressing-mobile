import React, { memo, useMemo } from 'react'
import { Skeleton } from '@motify/skeleton'
import { theme } from '@theme'
import { Image, Pressable } from '@components/ui'
import { BookCardProps, BookCardSkeletonProps } from './BookCard.props'

const {
  radii,
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
  sizes: { bookCardHeight, bookCardWidth, bookCardNoCoverHeight, bookCardNoCoverWidth },
} = theme

const borderRadius = radii.xs

export const BookCard = memo<BookCardProps>(({ data, onPress, ratioWidth }) => {
  const containerProps = useMemo(
    () => ({
      bg: 'charleston',
      borderRadius: borderRadius,
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

export const BookCardSkeleton = memo<BookCardSkeletonProps>(({ ratioWidth }) => {
  return (
    <Skeleton
      radius={borderRadius}
      colors={[skeletonPrimaryColor, skeletonSecondaryColor]}
      height={ratioWidth ? (ratioWidth * bookCardHeight) / bookCardWidth : bookCardHeight}
      width={ratioWidth ?? bookCardWidth}
    />
  )
})
