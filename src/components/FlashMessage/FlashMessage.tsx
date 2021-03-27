import React, { memo, useLayoutEffect } from 'react'
import DefaultFlashMessage, { FlashMessageProps } from 'react-native-flash-message'
import { theme } from '@theme'

export const FlashMessage = memo<FlashMessageProps>((props) => {
  useLayoutEffect(() => {
    DefaultFlashMessage.setColorTheme({ danger: theme.colors.error })
  }, [])
  return <DefaultFlashMessage position="top" {...props} />
})
