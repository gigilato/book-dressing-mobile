import React, { memo } from 'react'
import { StackNavigationOptions, StackHeaderTitleProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { Text } from '@components/ui'

export const HeaderTitle = memo<StackHeaderTitleProps>((props) => {
  const { t } = useTranslation('navigation')
  return <Text variant="header">{t(props.children as string)}</Text>
})

export const defaultStackScreenOptions: StackNavigationOptions = {
  gestureEnabled: true,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitle: (props) => <HeaderTitle {...props} />,
}
