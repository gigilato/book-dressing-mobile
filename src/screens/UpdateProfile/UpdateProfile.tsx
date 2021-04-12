import React, { memo, useCallback } from 'react'
import { Pressable, Screen, View, Button } from '@components/ui'
import { Avatar } from '@components'
import { UpdateProfileProps } from './UpdateProfile.props'
import { useTranslation } from 'react-i18next'

export const UpdateProfile = memo<UpdateProfileProps>(
  ({
    route: {
      params: { data },
    },
  }) => {
    const { t } = useTranslation('profile')
    const onPressEditPicture = useCallback(() => {
      console.log('test')
    }, [])
    return (
      <Screen>
        <View alignItems="center">
          <Pressable onPress={onPressEditPicture} pressOpacity={0.8}>
            <Avatar uri={data.pictureUrl} size={120} />
          </Pressable>
          <Button
            p="l"
            variant="text"
            onPress={onPressEditPicture}
            title={t('updatePicture')}
            textProps={{ color: 'primary' }}
          />
        </View>
      </Screen>
    )
  }
)
