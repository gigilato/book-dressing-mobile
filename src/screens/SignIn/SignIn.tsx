import React, { memo, useCallback, useRef, useState } from 'react'
import app from 'firebase'
import { TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput } from '@components/form'
import { View, Button, Screen } from '@components/ui'
import { notifier } from '@services'
import { SignInFormInputs, SignInProps } from './SignIn.props'

export const SignIn = memo<SignInProps>(({ navigation }) => {
  const { t } = useTranslation('signIn')
  const [loading, setLoading] = useState(false)
  const methods = useForm<SignInFormInputs>({ mode: 'onBlur' })
  const onSubmit = useCallback(async ({ email, password }: SignInFormInputs) => {
    setLoading(true)
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      notifier.showNotification({
        txTitle: 'errors:signInErrorTitle',
        txDescription: 'errors:signInErrorContent',
        type: 'error',
      })
    }
    setLoading(false)
  }, [])

  const passwordRef = useRef<TextInput>(null)
  const onBlurEmail = useCallback(() => passwordRef.current?.focus(), [])
  return (
    <FormProvider {...methods}>
      <Screen>
        <View flex={1} />
        <View flex={1} justifyContent="center">
          <FormInput
            name="email"
            rules={{ required: true }}
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlurEmail}
          />
          <View height="separator" />
          <FormInput
            ref={passwordRef}
            name="password"
            rules={{ required: true }}
            autoCapitalize="none"
            secureTextEntry
          />
          <Button
            variant="text"
            title={t('forgotPassword')}
            mt="m"
            textProps={{ variant: 'label', textAlign: 'right' }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
          <Button
            mt={50}
            title={t('signIn')}
            onPress={methods.handleSubmit(onSubmit)}
            loading={loading}
          />
        </View>
        <View flex={1} />
      </Screen>
    </FormProvider>
  )
})
