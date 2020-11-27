import React, { memo, useCallback, useState } from 'react'
import { Button, ActivityIndicator } from 'react-native'
import { useForm, FormProvider } from 'react-hook-form'
import { showMessage } from 'react-native-flash-message'
import { firebase } from '@services'
import { FormInput } from '@components/form'
import { Box } from '@components/ui'
import { SignInFormInputs, SignInProps } from './SignIn.props'
import { useTranslation } from 'react-i18next'

export const SignIn = memo<SignInProps>(() => {
  const { t } = useTranslation('signIn')
  const [loading, setLoading] = useState(false)
  const methods = useForm<SignInFormInputs>({ mode: 'onBlur' })
  const onSubmit = useCallback(
    async ({ email, password }: SignInFormInputs) => {
      setLoading(true)
      try {
        await firebase.signIn(email, password)
      } catch (error) {
        showMessage({
          message: t('errors:signInErrorTitle'),
          description: t('errors:signInErrorContent'),
          type: 'danger',
        })
      }
      setLoading(false)
    },
    [t]
  )
  return (
    <FormProvider {...methods}>
      <Box variant="screen">
        <Box flex={1} />
        <Box flex={1} justifyContent="center">
          <FormInput name="email" rules={{ required: true }} autoCapitalize="none" />
          <Box height="separator" />
          <FormInput
            name="password"
            rules={{ required: true }}
            autoCapitalize="none"
            secureTextEntry
          />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button title={'signIn'} onPress={methods.handleSubmit(onSubmit)} />
          )}
        </Box>
        <Box flex={1} />
      </Box>
    </FormProvider>
  )
})
