import React, { memo, useLayoutEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Button, Screen } from '@components/ui'
import { Avatar, BookList } from '@components'
import { useMeQuery } from '@api/hooks'
import { MyProfileProps, UserProfileProps } from './Profile.props'

const UserProfile = memo<UserProfileProps>(({ data, isMyProfile, onPressEdit, onPressBook }) => {
  const { t } = useTranslation('profile')

  return (
    <Screen>
      <View>
        <Avatar size={80} uri={data.pictureUrl} />
      </View>
      {isMyProfile && (
        <Button mt="l" variant="secondary" title={t('updateProfile')} onPress={onPressEdit} />
      )}
      <View my="l" bg="reverseBackground" h="hairline" />
      <BookList
        queryOptions={{
          variables: { limit: 12, where: { onlyActive: !isMyProfile, userUuid: data.uuid } },
        }}
        onPressBook={onPressBook}
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
      onPressEdit={() => null}
      onPressBook={(book) => navigation.navigate('ProfileBookDetail', { data: book })}
    />
  )
})
