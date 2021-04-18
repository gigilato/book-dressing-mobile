import React, { memo, useMemo } from 'react'
import { Skeleton } from '@motify/skeleton'
import { SharedElement } from 'react-navigation-shared-element'
import { theme } from '@theme'
import { Image, Pressable } from '@components/ui'
import { getBookCoverHeight } from '@utils/books'
import { BookCoverProps, BookCoverSkeletonProps } from './BookCover.props'

const {
  radii,
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
  sizes: { BookCoverHeight, BookCoverWidth },
} = theme

const borderRadius = radii.xs

export const BookCover = memo<BookCoverProps>(({ data, onPress, ratioWidth }) => {
  const containerProps = useMemo(
    () => ({
      bg: 'charleston',
      borderRadius: borderRadius,
      width: ratioWidth ?? BookCoverWidth,
      height: ratioWidth ? getBookCoverHeight(ratioWidth) : BookCoverHeight,
    }),
    [ratioWidth]
  )
  return (
    <Pressable
      onPress={() => onPress && onPress(data)}
      pressScale={0.98}
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

export const BookCoverSkeleton = memo<BookCoverSkeletonProps>(({ ratioWidth }) => {
  return (
    <Skeleton
      radius={borderRadius}
      colors={[skeletonPrimaryColor, skeletonSecondaryColor]}
      height={ratioWidth ? getBookCoverHeight(ratioWidth) : BookCoverHeight}
      width={ratioWidth ?? BookCoverWidth}
    />
  )
})
