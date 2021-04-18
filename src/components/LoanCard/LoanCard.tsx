import React, { memo } from 'react'
import { Skeleton } from '@motify/skeleton'
import { useTranslation } from 'react-i18next'
import format from 'date-fns/format'
import { theme } from '@theme'
import { View, Text, Icon } from '@components/ui'
import { Avatar } from '@components/Avatar'
import { BookCover } from '@components/BookCover'
import { LoanStatus } from '@api/hooks/generated'
import { LoanCardProps } from './LoanCard.props'
import { getBookCoverHeight } from '../../utils/books'

const {
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
} = theme

const width = 65

export const LoanCard = memo<LoanCardProps>(
  ({
    data: {
      user,
      status,
      createdAt,
      book,
      book: { title, owner },
    },
    onPressBook,
    variant,
  }) => {
    const { t } = useTranslation('loans')
    return (
      <View flexDirection="row">
        <BookCover data={book} ratioWidth={width} onPress={onPressBook} />
        <View ml="s" justifyContent="center" flex={1}>
          {/* first row */}
          <Text variant="title" numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          {/* second row */}
          <View flexDirection="row" mt="xxs" py={1} alignItems="center">
            <Avatar size={20} uri={variant === 'loan' ? owner.pictureUrl : user.pictureUrl} />
            <Text fontSize="h4" ml="xs">
              {variant === 'loan' ? owner.username : user.username}
            </Text>
          </View>
          {/* third row */}
          <View flexDirection="row" justifyContent="space-between" alignItems="center">
            <View flexDirection="row" alignItems="center">
              <Icon size={20} name="calendar" />
              <Text ml="xs" fontSize="small">
                {format(new Date(createdAt), 'dd-MM-yyyy')}
              </Text>
            </View>
            <View
              py="xxs"
              width={90}
              alignItems="center"
              borderRadius="xs"
              borderColor="text"
              borderWidth="hairline">
              <Text textAlign="right">
                {t(
                  status === LoanStatus.Request
                    ? 'pending'
                    : LoanStatus.Active
                    ? 'active'
                    : 'finished'
                )}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
)

const skeletonColors = [skeletonPrimaryColor, skeletonSecondaryColor]
const skeletonTextHeight = 18
export const LoanCardSkeleton = memo(() => {
  return (
    <View flexDirection="row">
      <Skeleton colors={skeletonColors} width={width} height={getBookCoverHeight(width)} />
      <View ml="s" justifyContent="center" flex={1}>
        <Skeleton colors={skeletonColors} width={200} height={skeletonTextHeight} />
        <View my="xxs">
          <Skeleton colors={skeletonColors} width={150} height={skeletonTextHeight} />
        </View>
        <Skeleton colors={skeletonColors} width={120} height={skeletonTextHeight} />
      </View>
    </View>
  )
})
