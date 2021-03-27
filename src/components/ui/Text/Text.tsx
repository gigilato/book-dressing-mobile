import React, { memo, useMemo } from 'react'
import { StyleProp, Text as RNText, TextStyle } from 'react-native'
import _ from 'lodash'
import { useStyle } from '@hooks/useStyle'
import { TextProps } from './Text.props'
import { textVariants } from './Text.utils'

export const Text = memo<TextProps>(
  ({ textTransform, children, style, variant = 'body', ...props }) => {
    const content = useMemo(() => {
      if (typeof children !== 'string' || !textTransform) return children
      return textTransform === 'lowercase'
        ? children.toLowerCase()
        : textTransform === 'uppercase'
        ? children.toUpperCase()
        : textTransform === 'capitalize'
        ? _.capitalize(children)
        : _.upperFirst(children)
    }, [children, textTransform])
    const [currentProps, themeStyle] = useStyle({ ...textVariants[variant], ...props })
    const textStyle = useMemo(
      () => _.flattenDeep<StyleProp<TextStyle>>([themeStyle, style]),
      [themeStyle, style]
    )
    return (
      <RNText style={textStyle} {...currentProps}>
        {content}
      </RNText>
    )
  }
)
