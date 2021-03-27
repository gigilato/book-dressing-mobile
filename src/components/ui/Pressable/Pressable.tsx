import _ from 'lodash'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { Pressable as RNPressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import Animated, { useValue } from 'react-native-reanimated'
import { useStyle } from '../../../hooks/useStyle'
import { PressableProps, AnimatedPressableComponent } from './Pressable.props'
import {
  getPressableAnimationConfig,
  PRESSABLE_ANIM_END,
  PRESSABLE_ANIM_START,
} from './Pressable.utils'

const AnimatedPressable = Animated.createAnimatedComponent(
  RNPressable
) as AnimatedPressableComponent

export const Pressable = memo<PressableProps>(
  ({
    onPress,
    onPressIn: onPressInCallback,
    onPressOut: onPressOutCallback,
    children,
    control,
    scale = 1,
    style,
    ...props
  }) => {
    const animatedValue = useValue(PRESSABLE_ANIM_START)
    const scaleAnimation = animatedValue.interpolate({
      inputRange: [PRESSABLE_ANIM_START, PRESSABLE_ANIM_END],
      outputRange: [1, scale],
    })

    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const debouncedOnPress = useCallback(
      (event: GestureResponderEvent) => {
        if (!onPress) return
        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
          onPress(event)
          timeout.current = undefined
        }, 500)
      },
      [onPress]
    )
    const throttledOnPress = useCallback(
      (event: GestureResponderEvent) => {
        if (!onPress || timeout.current) return
        timeout.current = setTimeout(() => {
          if (timeout.current) clearTimeout(timeout.current)
          timeout.current = undefined
        }, 1000)
        onPress(event)
      },
      [onPress]
    )

    const onPressIn = useCallback(
      (event: GestureResponderEvent) => {
        Animated.spring(animatedValue, getPressableAnimationConfig(PRESSABLE_ANIM_END)).start()
        if (onPressInCallback) onPressInCallback(event)
      },
      [onPressInCallback, animatedValue]
    )

    const onPressOut = useCallback(
      (event: GestureResponderEvent) => {
        Animated.spring(animatedValue, getPressableAnimationConfig(PRESSABLE_ANIM_START)).start()
        if (onPressOutCallback) onPressOutCallback(event)
      },
      [onPressOutCallback, animatedValue]
    )

    const [currentProps, themeStyle] = useStyle(props)
    const pressableStyles = useMemo(
      () => _.flattenDeep<StyleProp<ViewStyle>>([themeStyle, style]),
      [themeStyle, style]
    )

    return (
      <AnimatedPressable
        onPress={
          control === 'debounce'
            ? debouncedOnPress
            : control === 'throttle'
            ? throttledOnPress
            : onPress
        }
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[...pressableStyles, { transform: [{ scale: scaleAnimation }] }]}
        {...currentProps}>
        {children}
      </AnimatedPressable>
    )
  }
)
