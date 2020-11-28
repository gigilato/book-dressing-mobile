import React, { memo, forwardRef } from 'react'
import { TextInput } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toPairs, upperFirst } from 'lodash'
import { Input } from '@components/ui'
import { FormInputProps } from './FormInput.props'

export const FormInput = memo<FormInputProps>(
  forwardRef<TextInput, FormInputProps>(
    ({ name, rules, defaultValue = '', onBlur: handleOnBlur, ...props }, ref) => {
      const { t } = useTranslation('form')
      const { control, errors } = useFormContext()
      return (
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
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
              {...props}
            />
          )}
          name={name}
          rules={toPairs(rules).reduce(
            (result, [key, value]) => ({
              ...result,
              [key]: { value, message: t(`${name}Error${upperFirst(key)}`) },
            }),
            {}
          )}
          defaultValue={defaultValue}
        />
      )
    }
  )
)
