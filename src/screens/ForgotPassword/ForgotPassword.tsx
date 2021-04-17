import React, { memo, useCallback, useState } from 'react'
import app from 'firebase'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput } from '@components/form'
import { Text, Button, Screen, BackIcon, View } from '@components/ui'
import { notifier } from '@services'
import { ForgotPasswordFormInputs, ForgotPasswordProps } from './ForgotPassword.props'

export const ForgotPassword = memo<ForgotPasswordProps>(({ navigation }) => {
  const { t } = useTranslation('signIn')
  const [loading, setLoading] = useState(false)
  const methods = useForm<ForgotPasswordFormInputs>({ mode: 'onBlur' })
  const onSubmit = useCallback(
    async ({ email }: ForgotPasswordFormInputs) => {
      setLoading(true)
      try {
        await app.auth().sendPasswordResetEmail(email)
        notifier.showNotification({
          title: t('resetPasswordErrorTitle'),
          description: t('resetPasswordErrorContent'),
          type: 'error',
        })
        navigation.goBack()
      } catch (error) {}
      setLoading(false)
    },
    [t, navigation]
  )

  return (
    <FormProvider {...methods}>
      <Screen>
        <View flex={1} justifyContent="center">
          <Text px="xl" mb={50} textAlign="center" variant="title">
            {t('resetPasswordText')}
          </Text>
          <FormInput
            name="email"
            rules={{ required: true }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button
            mt={50}
            title={t('common:confirm')}
            onPress={methods.handleSubmit(onSubmit)}
            loading={loading}
          />
        </View>
        <View position="absolute">
          <BackIcon onPress={() => navigation.goBack()} />
        </View>
      </Screen>
    </FormProvider>
  )
})
