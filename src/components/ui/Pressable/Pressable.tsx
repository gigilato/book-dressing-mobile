import _ from 'lodash'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { Pressable as RNPressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  withSpring,
} from 'react-native-reanimated'
import { useStyle } from '@hooks/useStyle'
import { PressableProps, AnimatedPressableComponent } from './Pressable.props'
import {
  pressableAnimationConfig,
  PRESSABLE_ANIM_END,
  PRESSABLE_ANIM_START,
} from './Pressable.utils'

const AnimatedPressable = Animated.createAnimatedComponent(
  RNPressable
) as AnimatedPressableComponent

export const Pressable = memo<PressableProps>(
  ({
    onPress,
    onPressIn: handleOnPressIn,
    onPressOut: handleOnPressOut,
    children,
    control,
    pressOpacity = 1,
    pressScale = 1,
    style,
    ...props
  }) => {
    const animatedScale = useSharedValue(PRESSABLE_ANIM_START)
    const animatedOpacity = useSharedValue(PRESSABLE_ANIM_START)
    const animatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedOpacity.value,
        [PRESSABLE_ANIM_START, PRESSABLE_ANIM_END],
        [1, pressOpacity]
      ),
      transform: [
        {
          scale: interpolate(
            animatedScale.value,
            [PRESSABLE_ANIM_START, PRESSABLE_ANIM_END],
            [1, pressScale]
          ),
        },
      ],
    }))

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
        animatedScale.value = withSpring(PRESSABLE_ANIM_END, pressableAnimationConfig)
        animatedOpacity.value = withSpring(PRESSABLE_ANIM_END, pressableAnimationConfig)
        handleOnPressIn && handleOnPressIn(event)
      },
      [animatedOpacity, animatedScale, handleOnPressIn]
    )

    const onPressOut = useCallback(
      (event: GestureResponderEvent) => {
        animatedScale.value = withSpring(PRESSABLE_ANIM_START, pressableAnimationConfig)
        animatedOpacity.value = withSpring(PRESSABLE_ANIM_START, pressableAnimationConfig)
        handleOnPressOut && handleOnPressOut(event)
      },
      [animatedOpacity, animatedScale, handleOnPressOut]
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
        style={[...pressableStyles, animatedStyle]}
        {...currentProps}>
        {children}
      </AnimatedPressable>
    )
  }
)
