import React, { memo, useMemo } from 'react'
import { StyleProp, View as RNView, ViewStyle } from 'react-native'
import _ from 'lodash'
import { useStyle } from '@hooks/useStyle'
import { ViewProps } from './View.props'
import { styles } from './View.styles'

export const View = memo<ViewProps>(({ style, shadow, ...props }) => {
  const [currentProps, themeStyle] = useStyle(props)
  const viewStyles = useMemo(
    () => _.flattenDeep<StyleProp<ViewStyle>>([shadow && styles.shadow, themeStyle, style]),
    [shadow, themeStyle, style]
  )
  return <RNView style={viewStyles} {...currentProps} />
})
