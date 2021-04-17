import React, { memo } from 'react'
import { Skeleton } from '@motify/skeleton'
import { SharedElement } from 'react-navigation-shared-element'
import { useTranslation } from 'react-i18next'
import format from 'date-fns/format'
import { theme } from '@theme'
import { Image, Pressable, View, Text, Icon } from '@components/ui'
import { Avatar } from '@components'
import { LoanStatus } from '@api/hooks/generated'
import { LoanCardProps } from './LoanCard.props'

const {
  colors: { skeletonPrimaryColor, skeletonSecondaryColor },
  sizes: { bookCardHeight, bookCardWidth },
} = theme

const width = 65
const height = (width * bookCardHeight) / bookCardWidth

export const LoanCard = memo<LoanCardProps>(
  ({
    data,
    data: {
      uuid,
      user,
      status,
      createdAt,
      book: { title, pictureUrl, owner },
    },
    onPress,
    variant,
  }) => {
    const { t } = useTranslation('loans')
    return (
      <Pressable
        onPress={() => onPress && onPress(data)}
        pressScale={0.98}
        control="debounce"
        flexDirection="row"
        disabled={!onPress}>
        <SharedElement id={`book.${uuid}`}>
          <Image
            source={pictureUrl ? { uri: pictureUrl } : 'bookUnavaliable'}
            resizeMode="cover"
            bg="charleston"
            width={width}
            height={height}
          />
        </SharedElement>
        <View ml="s" justifyContent="center" flex={1}>
          {/* first row */}
          <Text variant="title">{title}</Text>
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
      </Pressable>
    )
  }
)

export const LoanCardSkeleton = memo(() => {
  return <Skeleton colors={[skeletonPrimaryColor, skeletonSecondaryColor]} />
})
