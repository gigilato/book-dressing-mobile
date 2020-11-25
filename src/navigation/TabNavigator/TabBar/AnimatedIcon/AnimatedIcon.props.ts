import Animated from 'react-native-reanimated'
import { animatedIconPaths } from './AnimatedIcon.utils'

type AnimatedIconName = keyof typeof animatedIconPaths

export interface AnimatedIconProps {
  name: AnimatedIconName
  animatedFocus: Animated.Node<number>
  color: Animated.Node<string>
  size: number
}
