import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { View as MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { Button } from '@components/ui/Button'
import { Icon } from '@components/ui/Icon'
import { ErrorStateProps } from './ErrorState.props'

export const ErrorState = memo<ErrorStateProps>(
  ({ type = 'error', onPressRetry, loading, containerStyle }) => {
    const { t } = useTranslation('errors')
    return (
      <View alignItems="center" style={containerStyle}>
        <MotiView
          from={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'timing',
            duration: 200,
            easing: Easing.inOut(Easing.ease),
          }}>
          <Icon color="text" name={type === 'error' ? 'construct' : 'information'} size={150} />
        </MotiView>
        <View my="m">
          <Text color="text">
            {t(type === 'error' ? 'errorStateContent' : 'emptyStateContent')}
          </Text>
        </View>
        {onPressRetry && <Button onPress={onPressRetry} title={t('retry')} loading={loading} />}
      </View>
    )
  }
)
