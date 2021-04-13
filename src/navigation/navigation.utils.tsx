import React, { memo } from 'react'
import {
  StackNavigationOptions,
  StackHeaderTitleProps,
  StackHeaderLeftButtonProps,
} from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { Button, Text } from '@components/ui'

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

export const DefaultCancelHeaderLeft = memo<StackHeaderLeftButtonProps>(({ onPress }) => {
  const { t } = useTranslation()
  return (
    <Button
      variant="text"
      title={t('cancel')}
      pl="m"
      h="100%"
      justifyContent="center"
      onPress={onPress}
    />
  )
})

type StackHeaderRightButtonProps = {
  onPress?: () => any
  loading?: boolean
}

export const DefaultFinishHeaderRight = memo<StackHeaderRightButtonProps>(
  ({ onPress, loading }) => {
    const { t } = useTranslation()
    return (
      <Button
        variant="text"
        title={t('finish')}
        pr="m"
        h="100%"
        textProps={{ color: 'primary' }}
        justifyContent="center"
        onPress={onPress}
        loading={loading}
      />
    )
  }
)
