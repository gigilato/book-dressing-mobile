import React, { memo, useCallback, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { showMessage } from 'react-native-flash-message'
import { firebase } from '@services'
import { FormInput } from '@components/form'
import { Box, Button } from '@components/ui'
import { SignInFormInputs, SignInProps } from './SignIn.props'

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

  const passwordRef = useRef<TextInput>(null)
  const onBlurEmail = useCallback(() => passwordRef.current?.focus(), [])
  return (
    <FormProvider {...methods}>
      <Box variant="screen">
        <Box flex={1} />
        <Box flex={1} justifyContent="center">
          <FormInput
            name="email"
            rules={{ required: true }}
            autoCapitalize="none"
            onBlur={onBlurEmail}
          />
          <Box height="separator" />
          <FormInput
            ref={passwordRef}
            name="password"
            rules={{ required: true }}
            autoCapitalize="none"
            secureTextEntry
          />
          <Box height={50} />
          <Button title={t('signIn')} onPress={methods.handleSubmit(onSubmit)} loading={loading} />
        </Box>
        <Box flex={1} />
      </Box>
    </FormProvider>
  )
})
