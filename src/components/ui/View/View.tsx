import React, { memo, useMemo } from 'react'
import { StyleProp, View as RNView, ViewStyle } from 'react-native'
import flattenDeep from 'lodash/flattenDeep'
import { useStyle } from '@hooks/useStyle'
import { ViewProps } from './View.props'
import { styles } from './View.styles'

export const View = memo<ViewProps>(({ style, shadow, ...props }) => {
  const [filteredProps, themeStyle] = useStyle(props)
  const viewStyles = useMemo(
    () => flattenDeep<StyleProp<ViewStyle>>([shadow && styles.shadow, themeStyle, style]),
    [shadow, themeStyle, style]
  )
  return <RNView style={viewStyles} {...filteredProps} />
})
