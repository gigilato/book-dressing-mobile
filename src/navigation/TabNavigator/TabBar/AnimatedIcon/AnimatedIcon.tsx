import React, { memo } from 'react'
import Animated from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import { AnimatedIconProps } from './AnimatedIcon.props'
import { animatedIconPaths, viewBox } from './AnimatedIcon.utils'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export const AnimatedIcon = memo<AnimatedIconProps>(({ color, size, name }) => {
  return (
    <Svg width={size} height={size} viewBox={viewBox}>
      {animatedIconPaths[name].map((d, index) => (
        <AnimatedPath
          key={index}
          d={d}
          stroke={color}
          strokeWidth={1}
          fill={color}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </Svg>
  )
})
