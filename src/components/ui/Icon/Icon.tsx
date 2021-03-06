import React, { memo, useCallback, useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { Ionicons } from '@expo/vector-icons'
import { getSpacing, useStyle } from '@hooks/useStyle'
import { Pressable } from '@components/ui/Pressable'
import { View } from '@components/ui/View'
import { Text } from '@components/ui/Text'
import { IconProps, LikeIconProps } from './Icon.props'

export const Icon = memo<IconProps>(
  ({ name, size = 20, rounded, color = 'text', onPress, pressableProps, ...props }) => {
    const [currentProps, themeStyle] = useStyle({ color, ...props })
    const iconSize = getSpacing(size)
    return (
      <Pressable disabled={!onPress} onPress={onPress} {...pressableProps}>
        <Ionicons
          name={name}
          size={iconSize}
          style={[rounded && { borderRadius: iconSize / 2 }, themeStyle]}
          {...currentProps}
        />
      </Pressable>
    )
  }
)

export const BackIcon = memo<Omit<IconProps, 'name'>>((props) => {
  const { top } = useSafeAreaInsets()
  return (
    <Icon
      name="chevron-back"
      size="navigationIcon"
      pressableProps={{ pl: 'defaultLeftInset', top, py: 'm', pr: 'l' }}
      {...props}
    />
  )
})

export const LikeIcon = memo<LikeIconProps>(({ onPress, hasLiked, likeCount, ...props }) => {
  const onPressHeart = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    onPress && onPress()
  }, [onPress])

  const color = useMemo(() => (hasLiked ? 'love' : 'text'), [hasLiked])

  return (
    <View flexDirection="row" alignItems="center" justifyContent="space-between" w={50}>
      <Icon
        name={hasLiked ? 'heart' : 'heart-outline'}
        color={color}
        onPress={onPressHeart}
        {...props}
      />
      <Text color={color}>{likeCount}</Text>
    </View>
  )
})
