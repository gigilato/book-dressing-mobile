import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import _ from 'lodash'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Input } from '@components/ui'
import { FormInputProps } from './FormInput.props'

export const FormInput = memo<FormInputProps>(
  forwardRef<TextInput, FormInputProps>(
    ({ name, rules, defaultValue = '', onBlur: handleOnBlur, ...props }, ref) => {
      const { t } = useTranslation('form')
      const {
        control,
        formState: { errors },
      } = useFormContext()
      return (
        <Controller
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              ref={ref}
              label={t(`${name}Label`)}
              placeholder={t(`${name}Placeholder`)}
              onBlur={(e) => {
                if (handleOnBlur) handleOnBlur(e)
                onBlur()
              }}
              onChangeText={(text) => onChange(text)}
              value={value}
              error={errors[name]?.message}
              variant="form"
              {...props}
            />
          )}
          name={name}
          rules={_.toPairs(rules).reduce(
            (result, [key, value]) => ({
              ...result,
              [key]: { value, message: t(`${name}Error${_.upperFirst(key)}`) },
            }),
            {}
          )}
          defaultValue={defaultValue}
        />
      )
    }
  )
)
