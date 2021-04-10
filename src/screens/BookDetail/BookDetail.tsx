import React, { memo, useMemo, useCallback, useEffect } from 'react'
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useTranslation } from 'react-i18next'
import { View, Screen, Text, Button, Pressable, BackIcon, LikeIcon } from '@components/ui'
import { BookCard, Avatar } from '@components'
import { theme } from '@theme'
import { useBookQuery, useLikeBookMutation } from '@api/hooks/generated'
import { ExplorerBookDetailProps, BookDetailProps } from './BookDetail.props'
import { styles } from './BookDetail.styles'

const { sharedElementOpen } = theme.timings

const BookDetail = memo<BookDetailProps>(({ data, onPressBack }) => {
  const { t } = useTranslation('book')
  const query = useBookQuery({ variables: { bookUuid: data.uuid } })
  const book = useMemo(() => query.data?.book ?? data, [query.data, data])

  const animatedOpacity = useSharedValue(0)

  useEffect(() => {
    animatedOpacity.value = withDelay(sharedElementOpen + 100, withSpring(1))
  }, [animatedOpacity])

  const backIconAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))
  const contentAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))

  const [likeBook] = useLikeBookMutation()
  const onPressLike = useCallback(async () => {
    const { uuid, hasLiked, likeCount } = book
    await likeBook({
      variables: { bookUuid: uuid },
      optimisticResponse: {
        __typename: 'Mutation',
        likeBook: {
          ...book,
          hasLiked: !hasLiked,
          likeCount: hasLiked ? likeCount - 1 : likeCount + 1,
        },
      },
    })
  }, [book, likeBook])

  const onGoBack = useCallback(() => {
    // TODO: change that with spring call and runOnJS
    const duration = 200
    animatedOpacity.value = withTiming(0, { duration })
    setTimeout(onPressBack, duration)
  }, [onPressBack, animatedOpacity])

  return (
    <>
      <Screen variant="scrollable" safeTop safeBottom>
        <View alignItems="center">
          <BookCard data={book} ratioWidth={170} />
        </View>
        <Animated.View style={contentAnimatedStyle}>
          <Text fontFamily="poppins600" fontSize="h2" textAlign="center" mt="l">
            {book.title}
          </Text>
          <Text
            fontFamily="poppins500"
            numberOfLines={1}
            ellipsizeMode="tail"
            px="l"
            fontSize="h3"
            textAlign="center">
            {book.author}
          </Text>
          <View flexDirection="row" my="l">
            <View flex={1}>
              <Pressable>
                <View flexDirection="row" alignItems="center">
                  <Avatar bg="red" size={40} uri={book.owner?.pictureUrl ?? undefined} />
                  <Text fontSize="h3" ml="s">
                    {book.owner.username}
                  </Text>
                </View>
              </Pressable>
            </View>
            <LikeIcon onPress={onPressLike} hasLiked={book.hasLiked} likeCount={book.likeCount} />
          </View>
          <Button title={t('askForLoan')} />
          <View h="hairline" bg="grey" mt="l" mb="m" />
          <Text fontFamily="poppins500" fontSize="h3" textTransform="upperfirst" mb="xxs">
            {t('description')}
          </Text>
          <Text fontFamily="poppins300">{book.description}</Text>
        </Animated.View>
      </Screen>
      <Animated.View style={[styles.backIconContainer, backIconAnimatedStyle]}>
        <BackIcon onPress={onGoBack} />
      </Animated.View>
    </>
  )
})

export const ExplorerBookDetail = memo<ExplorerBookDetailProps>(
  ({
    navigation,
    route: {
      params: { data },
    },
  }) => {
    return <BookDetail data={data} onPressBack={() => navigation.goBack()} />
  }
)
