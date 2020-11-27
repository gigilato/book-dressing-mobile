import React, { memo, useMemo } from 'react'
import { BlurView as RNBlurView } from 'expo-blur'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'
import { position, space, borderRadius } from 'styled-system'
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar'
import { useSafeAreaInsets } from '@hooks'
import { updateColorOpacity } from '@utils/color'
import { AnimatedIcon } from './AnimatedIcon'
import { TabBarProps, BubbleComponentProps, BlurProps } from './TabBar.props'
import { styles } from './TabBar.styles'

const BlurView = styled<BlurProps>(RNBlurView)`
  position: absolute
  right:0
  left:0
  ${position}
  ${space}
  ${borderRadius}
`

export const TabBar = memo<TabBarProps>(({ ...props }) => {
  const { bottom } = useSafeAreaInsets()
  const { colors, sizes } = useTheme()
  const tabs = useMemo(() => {
    const activeColor = colors.reverseText
    const inactiveColor = colors.text
    const labelStyle = { color: activeColor, fontFamily: 'poppins500' }
    const background = {
      activeColor: colors.reverseBackground,
      inactiveColor: updateColorOpacity(colors.reverseBackground, 0),
    }
    return {
      RequestNavigator: {
        labelStyle,
        icon: {
          component: (iconProps: BubbleComponentProps) => (
            <AnimatedIcon {...iconProps} name="notification" />
          ),
          activeColor,
          inactiveColor,
        },
        background,
      },
      ExplorerNavigator: {
        labelStyle,
        icon: {
          component: (iconProps: BubbleComponentProps) => (
            <AnimatedIcon {...iconProps} name="book" />
          ),
          activeColor,
          inactiveColor,
        },
        background,
      },
      ProfileNavigator: {
        labelStyle,
        icon: {
          component: (iconProps: BubbleComponentProps) => (
            <AnimatedIcon {...iconProps} name="user" />
          ),
          activeColor,
          inactiveColor,
        },
        background,
      },
    } as TabsConfig<BubbleTabBarItemConfig>
  }, [colors])

  return (
    <BlurView tint="dark" intensity={100} bottom={bottom} borderRadius="l" mx="xl">
      <AnimatedTabBar
        tabs={tabs}
        style={{ height: sizes.tabBarHeight, ...styles.tabBar }}
        safeAreaInsets={{ bottom: 0 }}
        itemOuterSpace={{ vertical: 0 }}
        {...props}
      />
    </BlurView>
  )
})
