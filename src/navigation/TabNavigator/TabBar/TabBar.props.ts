import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BubbleTabBarIconProps } from '@gorhom/animated-tabbar'
import Animated from 'react-native-reanimated'

export interface TabBarProps extends Omit<BottomTabBarProps<BottomTabBarOptions>, 'style'> {}

export interface BubbleComponentProps extends BubbleTabBarIconProps {
  color: Animated.Node<string>
}
