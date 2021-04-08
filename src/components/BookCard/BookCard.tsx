import React, { memo, useMemo } from 'react'
import { Skeleton } from '@motify/skeleton'
import { theme } from '@theme'
import { Image, Pressable } from '@components/ui'
import { BookCardProps, BookCardSkeletonProps } from './BookCard.props'
import { SharedElement } from 'react-navigation-shared-element'

const {
  radii,
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
  sizes: { bookCardHeight, bookCardWidth },
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
      onPress={() => onPress && onPress(data)}
      scale={0.98}
      control="debounce"
      disabled={!onPress}>
      <SharedElement id={`book.${data.uuid}`}>
        <Image
          source={data.pictureUrl ? { uri: data.pictureUrl } : 'bookUnavaliable'}
          resizeMode="cover"
          {...containerProps}
        />
      </SharedElement>
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
