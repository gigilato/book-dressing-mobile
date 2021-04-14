import React, { memo, useCallback, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import app from 'firebase'
import { useForm, FormProvider } from 'react-hook-form'
import { Screen, View } from '@components/ui'
import { FormInput } from '@components/form'
import { UpdatePasswordProps, UpdatePasswordFormInputs } from './UpdatePassword.props'
import { TextInput } from 'react-native'

export const UpdatePassword = memo<UpdatePasswordProps>(({ navigation }) => {
  const { t } = useTranslation('form')
  const { handleSubmit, setError, setValue, ...methods } = useForm<UpdatePasswordFormInputs>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = useCallback(
    async ({ currentPassword, confirmPassword, newPassword }: UpdatePasswordFormInputs) => {
      if (confirmPassword !== newPassword) {
        return setError('confirmPassword', {
          type: 'manual',
          message: t('confirmPasswordErrorDifferent'),
        })
      }
      navigation.setParams({ loading: true })
      try {
        const { email } = app.auth().currentUser as app.User
        const credentials = app.auth.EmailAuthProvider.credential(email as string, currentPassword)
        await (app.auth().currentUser as app.User).reauthenticateWithCredential(credentials)
        await (app.auth().currentUser as app.User).updatePassword(newPassword)
        navigation.setParams({ loading: false })
        navigation.goBack()
      } catch (e) {
        if (e.code === 'auth/wrong-password') {
          setError('currentPassword', {
            type: 'manual',
            message: t('currentPasswordErrorWrong'),
          })
        }
        navigation.setParams({ loading: false })
      }
    },
    [navigation, setError, t]
  )
  useEffect(() => {
    navigation.setParams({ onPressHeaderRight: handleSubmit(onSubmit) })
  }, [handleSubmit, navigation, onSubmit])

  const newPasswordRef = useRef<TextInput>(null)
  const onBlurCurrentPassword = useCallback(() => newPasswordRef.current?.focus(), [])
  const confirmPasswordRef = useRef<TextInput>(null)
  const onBlurNewPassword = useCallback(() => confirmPasswordRef.current?.focus(), [])

  return (
    <Screen>
      <FormProvider
        handleSubmit={handleSubmit}
        setValue={setValue}
        setError={setError}
        {...methods}>
        <FormInput
          name="currentPassword"
          secureTextEntry
          autoCapitalize="none"
          rules={{ required: true }}
          onBlur={onBlurCurrentPassword}
        />
        <View h="separator" />
        <FormInput
          ref={newPasswordRef}
          onBlur={onBlurNewPassword}
          name="newPassword"
          secureTextEntry
          autoCapitalize="none"
          rules={{ required: true, minLength: 5 }}
        />
        <View h="separator" />
        <FormInput
          ref={confirmPasswordRef}
          name="confirmPassword"
          secureTextEntry
          autoCapitalize="none"
          rules={{ required: true }}
        />
      </FormProvider>
    </Screen>
  )
})
