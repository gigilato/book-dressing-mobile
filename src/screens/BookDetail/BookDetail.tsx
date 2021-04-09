import React, { memo, useCallback, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useTranslation } from 'react-i18next'
import { View, Screen, Icon, Text, Button, Pressable } from '@components/ui'
import { BookCard } from '@components'
import { theme } from '@theme'
import { ExplorerBookDetailProps, BookDetailProps } from './BookDetail.props'
import { styles } from './BookDetail.styles'

const { sharedElementOpen } = theme.timings

const BookDetail = memo<BookDetailProps>(({ data, onPressBack }) => {
  const { top } = useSafeAreaInsets()
  const { t } = useTranslation('book')

  const animatedOpacity = useSharedValue(0)

  useEffect(() => {
    animatedOpacity.value = withDelay(sharedElementOpen + 100, withSpring(1))
  }, [animatedOpacity])

  const backIconAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))
  const contentAnimatedStyle = useAnimatedStyle(() => ({ opacity: animatedOpacity.value }))

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
          <BookCard data={data} ratioWidth={170} />
        </View>
        <Animated.View style={contentAnimatedStyle}>
          <Text fontFamily="poppins600" fontSize="h2" textAlign="center" mt="l">
            {data.title}
          </Text>
          <Text
            fontFamily="poppins500"
            numberOfLines={1}
            ellipsizeMode="tail"
            px="l"
            fontSize="h3"
            textAlign="center">
            {data.author}
          </Text>
          <View flexDirection="row" my="l">
            <View flexDirection="row" flex={1} alignItems="center">
              <Pressable>
                <Text color="primary">{`@${data.owner.username}`}</Text>
              </Pressable>
            </View>
            <View flexDirection="row" alignItems="center">
              <Icon name="chatbubble" pressableProps={{ px: 's' }} />
              <Text>0</Text>
              <Icon name="heart" pressableProps={{ px: 's' }} />
              <Text>0</Text>
            </View>
          </View>
          <Button title={t('askForLoan')} />
          <View h="hairline" bg="grey" mt="l" mb="m" />
          <Text fontFamily="poppins500" fontSize="h3" textTransform="upperfirst" mb="xxs">
            {t('description')}
          </Text>
          <Text fontFamily="poppins300">{data.description}</Text>
        </Animated.View>
      </Screen>
      <Animated.View style={[styles.backIconContainer, backIconAnimatedStyle]}>
        <Icon
          name="chevron-back"
          size="navigationIcon"
          onPress={onGoBack}
          pressableProps={{ pl: 'defaultLeftInset', top, py: 'm', pr: 'l' }}
        />
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
