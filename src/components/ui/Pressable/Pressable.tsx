import React, { memo, useCallback, useRef } from 'react'
import { Pressable as RNPressable, GestureResponderEvent } from 'react-native'
import Animated, { useValue } from 'react-native-reanimated'
import styled from 'styled-components/native'
import { color, border, space, flex, layout, position, borderRadius, variant } from 'styled-system'
import {
  PressableProps,
  AnimatedPressableComponent,
  StyledPressableProps,
  PressableVariant,
} from './Pressable.props'

const ANIM_START = 0
const ANIM_END = 1
const getAnimationConfig = (toValue: number) => ({
  toValue,
  mass: 1,
  damping: 15,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
})

const AnimatedPressable = Animated.createAnimatedComponent(
  RNPressable
) as AnimatedPressableComponent

const StyledPressable = styled<AnimatedPressableComponent>(AnimatedPressable)`
  ${position}
  ${space}
  ${color}
  ${border}
  ${flex}
  ${layout}
  ${borderRadius}
  ${variant<StyledPressableProps, PressableVariant>({
    variants: {
      primary: {
        px: 'm',
        py: 's',
        backgroundColor: 'primary',
        borderRadius: 'l',
        alignItems: 'center',
      },
    },
  })}
`

export const Pressable = memo<PressableProps>(
  ({
    onPress,
    onPressIn: onPressInCallback,
    onPressOut: onPressOutCallback,
    children,
    debounce,
    scale = 1,
    ...props
  }) => {
    const animatedValue = useValue(ANIM_START)
    const scaleAnimation = animatedValue.interpolate({
      inputRange: [ANIM_START, ANIM_END],
      outputRange: [1, scale],
    })

    const timeout = useRef<number>()
    const debouncedOnPress = useCallback(
      (event: GestureResponderEvent) => {
        if (!onPress) return
        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
          onPress(event)
          timeout.current = undefined
        }, 1000)
      },
      [onPress]
    )

    const onPressIn = useCallback(
      (event: GestureResponderEvent) => {
        Animated.spring(animatedValue, getAnimationConfig(ANIM_END)).start()
        if (onPressInCallback) onPressInCallback(event)
      },
      [onPressInCallback, animatedValue]
    )

    const onPressOut = useCallback(
      (event: GestureResponderEvent) => {
        Animated.spring(animatedValue, getAnimationConfig(ANIM_START)).start()
        if (onPressOutCallback) onPressOutCallback(event)
      },
      [onPressOutCallback, animatedValue]
    )

    return (
      <StyledPressable
        onPress={debounce ? debouncedOnPress : onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{ transform: [{ scale: scaleAnimation }] }}
        {...props}>
        {children}
      </StyledPressable>
    )
  }
)
