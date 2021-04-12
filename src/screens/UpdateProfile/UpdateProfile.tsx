import React, { memo, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import BottomSheet from '@gorhom/bottom-sheet'
import { Pressable, Screen, View, Button } from '@components/ui'
import { Avatar, MediaPickerActionSheet } from '@components'
import { UpdateProfileProps } from './UpdateProfile.props'

export const UpdateProfile = memo<UpdateProfileProps>(
  ({
    route: {
      params: { data },
    },
  }) => {
    const { t } = useTranslation('profile')
    const ref = useRef<BottomSheet>(null)
    const onPressEditPicture = useCallback(() => ref.current?.expand(), [])
    return (
      <>
        <Screen variant="scrollable">
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
        <MediaPickerActionSheet
          ref={ref}
          title={t('updatePicture')}
          onPress={(uri) => console.log(uri)}
        />
      </>
    )
  }
)
