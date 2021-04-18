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

const {
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
} = theme

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
        <BookCover data={book} ratioWidth={65} onPress={onPressBook} />
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

export const LoanCardSkeleton = memo(() => {
  return <Skeleton colors={[skeletonPrimaryColor, skeletonSecondaryColor]} />
})
