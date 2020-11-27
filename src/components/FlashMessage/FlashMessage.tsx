import React, { memo, useEffect } from 'react'
import DefaultFlashMessage, { FlashMessageProps } from 'react-native-flash-message'
import { useTheme, DefaultTheme } from 'styled-components'

export const FlashMessage = memo<FlashMessageProps>((props) => {
  const { colors } = useTheme() as DefaultTheme
  useEffect(() => {
    DefaultFlashMessage.setColorTheme({ danger: colors.error })
  }, [colors])
  return <DefaultFlashMessage position="top" {...props} />
})
