import React, { memo, useLayoutEffect, useMemo } from 'react'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useLayout } from '@react-native-community/hooks'
import { useTranslation } from 'react-i18next'
import { View, Button, Screen, Text } from '@components/ui'
import { Avatar, BookList } from '@components'
import { theme } from '@theme'
import { useMeQuery } from '@api/hooks'
import { MyProfileProps, UserProfileProps } from './Profile.props'
import { styles } from './Profile.styles'

const { defaultTopInset } = theme.sizes

const UserProfile = memo<UserProfileProps>(({ data, isMyProfile, onPressEdit, onPressBook }) => {
  const { t } = useTranslation('profile')
  const { onLayout, height } = useLayout()

  const scrollY = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y
  })

  const headerAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateY: -1 * Math.min(Math.max(scrollY.value, 0), height + defaultTopInset) },
      ],
    }),
    [height]
  )

  return (
    <Screen pt={0}>
      <Animated.View style={[styles.header, headerAnimatedStyle]} onLayout={onLayout}>
        <View flexDirection="row" justifyContent="center">
          <Avatar size={80} uri={data.pictureUrl} />
          <View ml="l" alignItems="center" justifyContent="center">
            <Text variant="title">{data.bookCount}</Text>
            <Text variant="title" textTransform="upperfirst">
              {t('common:book', { count: data.bookCount })}
            </Text>
          </View>
        </View>
        {isMyProfile && (
          <Button
            mt="l"
            variant="secondary"
            title={t('updateProfile')}
            onPress={() => onPressEdit && onPressEdit()}
          />
        )}
        <View my="l" bg="reverseBackground" h="hairline" />
      </Animated.View>
      <BookList
        queryOptions={{
          variables: { limit: 12, where: { onlyActive: !isMyProfile, userUuid: data.uuid } },
        }}
        onPressBook={onPressBook}
        onScroll={onScroll}
        contentContainerStyle={{
          marginTop: height + defaultTopInset,
          paddingBottom: height + defaultTopInset,
        }}
      />
    </Screen>
  )
})

export const MyProfile = memo<MyProfileProps>(({ navigation }) => {
  const query = useMeQuery()
  const me = useMemo(() => query.data!.me, [query.data])
  useLayoutEffect(() => {
    navigation.setParams({ data: me })
  }, [me, navigation])
  return (
    <UserProfile
      data={me}
      isMyProfile={true}
      onPressEdit={() => navigation.navigate('UpdateProfile', { data: me })}
      onPressBook={(book) => navigation.navigate('ProfileBookDetail', { data: book })}
    />
  )
})
