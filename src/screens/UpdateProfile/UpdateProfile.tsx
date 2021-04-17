import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useTranslation } from 'react-i18next'
import BottomSheet from '@gorhom/bottom-sheet'
import app from 'firebase'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { Pressable, Screen, View, Button } from '@components/ui'
import { FormInput } from '@components/form'
import { Avatar, MediaPickerActionSheet } from '@components'
import { cache, firebase, notifier } from '@services'
import { meQuery } from '@api/graphql'
import { useUpdateProfileMutation } from '@api/hooks/generated'
import { UpdateProfileProps, UpdateProfileFormInputs } from './UpdateProfile.props'

export const UpdateProfile = memo<UpdateProfileProps>(
  ({
    route: {
      params: { data },
    },
    navigation,
  }) => {
    const { t } = useTranslation('profile')
    const ref = useRef<BottomSheet>(null)
    const { handleSubmit, setError, setValue, ...methods } = useForm<UpdateProfileFormInputs>({
      defaultValues: {
        name: data.name,
        username: data.username,
        description: data.description,
        pictureUrl: data.pictureUrl,
      },
    })
    const [updateProfile] = useUpdateProfileMutation({
      onCompleted: ({ updateProfile: user }) => cache.setValue({ user }),
    })

    const [uploading, isUploading] = useState(false)
    const onPressEditPicture = useCallback(() => ref.current?.expand(), [])
    const handlePickerResult = useCallback(
      async (uri) => {
        isUploading(true)
        try {
          const pictureUrl: string = await firebase.uploadImageAsync(uri, 'user', data.uuid)
          setValue('pictureUrl', pictureUrl)
          updateProfile({ variables: { pictureUrl } })
        } catch (e) {
          notifier.showNotification({
            txTitle: 'errors:uploadPictureErrorTitle',
            txDescription: 'errors:uploadPictureErrorContent',
            type: 'error',
          })
        }
        isUploading(false)
      },
      [data.uuid, setValue, updateProfile]
    )

    const onSubmit = useCallback(
      async ({ description, name, username }: UpdateProfileFormInputs) => {
        navigation.setParams({ loading: true })
        try {
          await updateProfile({
            variables: {
              description: description !== data.description ? description : undefined,
              name: name !== data.name ? name : undefined,
              username: username !== data.username ? username : undefined,
            },
            refetchQueries: [{ query: meQuery }],
            awaitRefetchQueries: true,
          })
          navigation.setParams({ loading: false })
          navigation.goBack()
        } catch (e) {
          setError('username', {
            type: 'manual',
            message: t('form:usernameErrorExists'),
          })
          navigation.setParams({ loading: false })
        }
      },
      [updateProfile, data, navigation, setError, t]
    )
    useEffect(() => {
      navigation.setParams({ onPressHeaderRight: handleSubmit(onSubmit) })
    }, [handleSubmit, navigation, onSubmit])

    return (
      <>
        <Screen variant="scrollable">
          <View alignItems="center">
            <Controller
              control={methods.control}
              render={({ field: { value } }) => (
                <Pressable onPress={onPressEditPicture} pressOpacity={0.8}>
                  <Avatar uri={value} size={120} />
                  {uploading && (
                    <View
                      variant="absoluteFill"
                      bg="background"
                      opacity={0.5}
                      justifyContent="center"
                      alignItems="center">
                      <ActivityIndicator />
                    </View>
                  )}
                </Pressable>
              )}
              name="pictureUrl"
            />
            <Button
              p="l"
              variant="text"
              onPress={!uploading ? onPressEditPicture : undefined}
              title={t('updatePicture')}
              textProps={{ color: 'primary' }}
            />
          </View>
          <FormProvider
            handleSubmit={handleSubmit}
            setValue={setValue}
            setError={setError}
            {...methods}>
            <FormInput name="name" />
            <View h="separator" />
            <FormInput name="username" autoCapitalize="none" rules={{ required: true }} />
            <View h="separator" />
            <FormInput name="description" autoCapitalize="none" multiline maxLength={255} />
          </FormProvider>
          <Button
            variant="text"
            h={50}
            justifyContent="center"
            title={t('updatePassword')}
            onPress={() => navigation.navigate('UpdatePassword', {})}
          />
          <View h="hairline" bg="secondaryBackground" />
          <Button
            variant="text"
            h={50}
            justifyContent="center"
            title={t('logout')}
            textProps={{ color: 'error' }}
            onPress={() => app.auth().signOut()}
          />
        </Screen>
        <MediaPickerActionSheet ref={ref} title={t('updatePicture')} onPress={handlePickerResult} />
      </>
    )
  }
)
