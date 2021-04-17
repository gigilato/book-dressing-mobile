import React, { memo, forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '@theme'
import { NotifierComponents, NotifierRoot } from 'react-native-notifier'
import { NotifierRef } from './Notifier.props'
import { styles } from './Notifier.styles'

const {
  colors: { success, error },
} = theme

export const Notifier = memo(
  forwardRef<NotifierRef>((props, ref) => {
    const { t } = useTranslation()
    const notifierRef = useRef<NotifierRoot>(null)

    useImperativeHandle(ref, () => ({
      showNotification: ({ title, txTitle, description, txDescription, type = 'success' }) =>
        notifierRef.current?.showNotification({
          title: txTitle ? t(txTitle) : title,
          description: txDescription ? t(txDescription) : description,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: type,
            titleStyle: styles.title,
            descriptionStyle: styles.description,
            backgroundColor: type === 'success' ? success : error,
          },
        }),
    }))
    return <NotifierRoot ref={notifierRef} />
  })
)
