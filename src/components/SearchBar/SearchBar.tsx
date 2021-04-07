import React, { memo, useState, useCallback, useRef, useEffect } from 'react'
import { LayoutAnimation, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'
import { theme } from '@theme'
import { View, Icon, Button, Input } from '@components/ui'
import { SearchBarProps } from './SearchBar.props'

const {
  colors: { searchPlaceHolder },
} = theme

export const SearchBar = memo<SearchBarProps>(({ onSearch, onCancel: handleOnCancel }) => {
  const { t } = useTranslation()

  const [hasFocus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef<TextInput>(null)

  const onChangeText = useCallback((text: string) => setValue(text), [])

  const animateFocus = useCallback((focus: boolean) => {
    LayoutAnimation.easeInEaseOut()
    setFocus(focus)
  }, [])

  const onCancel = useCallback(() => {
    if (handleOnCancel) handleOnCancel()
    setValue('')
    input.current?.blur()
  }, [handleOnCancel])

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value)
      if (handleOnCancel) handleOnCancel()
    }, 500)
    return () => clearTimeout(handler)
  }, [value, onSearch, handleOnCancel])

  return (
    <View flexDirection="row" alignItems="center">
      <View
        flexDirection="row"
        flex={1}
        bg="searchBackground"
        height={35}
        px="xs"
        alignItems="center"
        borderRadius="s">
        <Icon name="search" color="searchPlaceHolder" mr="xs" />
        <Input
          ref={input}
          value={value}
          onChangeText={onChangeText}
          placeholder={t('search')}
          placeholderTextColor={searchPlaceHolder}
          onFocus={() => animateFocus(true)}
          onBlur={() => animateFocus(false)}
        />
      </View>
      {(hasFocus || value.length > 0) && (
        <Button title={t('cancel')} ml="s" variant="text" onPress={onCancel} />
      )}
    </View>
  )
})
