import React, { memo } from 'react'
import { TextInput } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toPairs, upperFirst } from 'lodash'
import { FormInputProps } from './FormInput.props'

export const FormInput = memo<FormInputProps>(({ name, rules, defaultValue = '', ...props }) => {
  const { t } = useTranslation('form')
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <TextInput
          placeholder={t(`${name}Placeholder`)}
          onBlur={onBlur}
          onChangeText={(text) => onChange(text)}
          value={value}
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
})
