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
import {
  useBookQuery,
  useLikeBookMutation,
  useRequestLoanMutation,
  useCancelLoanMutation,
  LoanStatus,
} from '@api/hooks/generated'
import { useMeQuery } from '@api/hooks'
import { bookQuery } from '@api/graphql'
import { ExplorerBookDetailProps, BookDetailProps } from './BookDetail.props'
import { styles } from './BookDetail.styles'

const { sharedElementOpen } = theme.timings

const BookDetail = memo<BookDetailProps>(({ data, onPressBack }) => {
  const { t } = useTranslation('book')
  const query = useBookQuery({
    variables: { bookUuid: data.uuid },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  })
  const book = useMemo(() => query.data?.book ?? data, [query.data, data])
  const { data: userData } = useMeQuery({ fetchPolicy: 'cache-only' })
  const isMyBook = useMemo(() => book.owner.uuid === userData?.me.uuid, [book.owner, userData])

  const animatedOpacity = useSharedValue(0)

  useEffect(() => {
    animatedOpacity.value = withDelay(sharedElementOpen + 100, withSpring(1))
  }, [animatedOpacity])

  const backIconAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))
  const contentAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))

  const [likeBook] = useLikeBookMutation()
  const onPressLike = useCallback(() => {
    const { uuid, hasLiked, likeCount } = book
    likeBook({
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

  const [requestLoan, { loading: requestLoading }] = useRequestLoanMutation()
  const onPressRequest = useCallback(() => {
    requestLoan({
      variables: { bookUuid: book.uuid },
      refetchQueries: [{ query: bookQuery, variables: { bookUuid: book.uuid } }],
      awaitRefetchQueries: true,
    })
  }, [book, requestLoan])

  const [cancelLoan, { loading: cancelLoading }] = useCancelLoanMutation()
  const onPressCancel = useCallback(
    (loanUuid: string) => {
      cancelLoan({
        variables: { loanUuid },
        refetchQueries: [{ query: bookQuery, variables: { bookUuid: book.uuid } }],
        awaitRefetchQueries: true,
      })
    },
    [book, cancelLoan]
  )

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
          <View flexDirection="row" mt="l">
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
          {!isMyBook && (
            <View mt="l">
              {book.available && !book.currentRequest ? (
                <Button
                  title={t('requestLoan')}
                  loading={requestLoading}
                  onPress={onPressRequest}
                />
              ) : book.currentRequest && book.currentRequest.status === LoanStatus.Request ? (
                <Button
                  title={t('cancelLoan')}
                  loading={cancelLoading}
                  onPress={() => onPressCancel(book.currentRequest!.uuid)}
                />
              ) : book.currentRequest && book.currentRequest.status === LoanStatus.Active ? (
                <Text fontSize="big" textAlign="center">
                  {t('loanActive')}
                </Text>
              ) : (
                <Text fontSize="big" textAlign="center" color="error">
                  {t('unavailable')}
                </Text>
              )}
            </View>
          )}
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
