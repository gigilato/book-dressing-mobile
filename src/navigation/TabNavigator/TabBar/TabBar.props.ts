import { FunctionComponent } from 'react'
import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BubbleTabBarIconProps } from '@gorhom/animated-tabbar'
import Animated from 'react-native-reanimated'
import { BlurProps as RNBlurProps } from 'expo-blur'
import { PositionProps, RadiiProps, SpaceProps } from '@theme'

export type BlurProps = FunctionComponent<RNBlurProps & PositionProps & SpaceProps & RadiiProps>
export interface TabBarProps extends Omit<BottomTabBarProps<BottomTabBarOptions>, 'style'> {}

export interface BubbleComponentProps extends BubbleTabBarIconProps {
  color: Animated.Node<string>
}
