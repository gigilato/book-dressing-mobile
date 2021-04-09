import React, { memo, useMemo } from 'react'
import { StyleProp, View as RNView, ViewStyle, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import _ from 'lodash'
import { useStyle } from '@hooks/useStyle'
import { ScreenProps } from './Screen.props'
import { styles } from './Screen.styles'

export const Screen = memo<ScreenProps>(
  ({ style, variant, children, safeBottom, safeTop, ...props }) => {
    const [currentProps, themeStyle] = useStyle(props)
    const viewStyles = useMemo(
      () => _.flattenDeep<StyleProp<ViewStyle>>([themeStyle, style]),
      [themeStyle, style]
    )

    const { bottom, top } = useSafeAreaInsets()

    if (variant === 'scrollable')
      return (
        <ScrollView contentContainerStyle={[styles.scrollableContainer, viewStyles]}>
          {safeTop && <RNView style={{ height: top }} />}
          {children}
          {safeBottom && <RNView style={{ height: bottom }} />}
        </ScrollView>
      )

    return (
      <RNView style={[styles.container, viewStyles]} {...currentProps}>
        {safeTop && <RNView style={{ height: top }} />}
        {children}
        {safeBottom && <RNView style={{ height: bottom }} />}
      </RNView>
    )
  }
)
