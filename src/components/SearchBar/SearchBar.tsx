import React, { memo, useState, useCallback, useRef, useEffect } from 'react'
import { LayoutAnimation, TextInput } from 'react-native'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Box, Icon, Button, Input } from '@components/ui'
import { SearchBarProps } from './SearchBar.props'

export const SearchBar = memo<SearchBarProps>(({ onSearch }) => {
  const { t } = useTranslation()

  const {
    colors: { searchPlaceHolder },
  } = useTheme()
  const [hasFocus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef<TextInput>(null)

  const onChangeText = useCallback((text: string) => setValue(text), [])

  const animateFocus = useCallback((focus: boolean) => {
    LayoutAnimation.easeInEaseOut()
    setFocus(focus)
  }, [])

  const onCancel = useCallback(() => {
    setValue('')
    input.current?.blur()
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => onSearch(value), 500)
    return () => clearTimeout(handler)
  }, [value, onSearch])

  return (
    <Box flexDirection="row" alignItems="center">
      <Box
        flexDirection="row"
        flex={1}
        bg="searchBackground"
        height={35}
        alignItems="center"
        borderRadius="s"
        px="xs">
        <Icon name="search" color="searchPlaceHolder" />
        <Input
          ref={input}
          value={value}
          onChangeText={onChangeText}
          placeholder={t('search')}
          placeholderTextColor={searchPlaceHolder}
          full
          ml="xs"
          onFocus={() => animateFocus(true)}
          onBlur={() => animateFocus(false)}
        />
      </Box>
      {(hasFocus || value.length > 0) && (
        <Button title={t('cancel')} ml="s" variant="text" onPress={onCancel} />
      )}
    </Box>
  )
})
