import React, { memo, useMemo } from 'react'
import { BlurView } from 'expo-blur'
import { useTheme } from 'styled-components'
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar'
import { useSafeAreaInsets } from '@hooks'
import { updateColorOpacity } from '@utils/color'
import { AnimatedIcon } from './AnimatedIcon'
import { TabBarProps, BubbleComponentProps } from './TabBar.props'
import { styles } from './TabBar.styles'

export const TabBar = memo<TabBarProps>(({ ...props }) => {
  const { bottom } = useSafeAreaInsets()
  const { colors } = useTheme()
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
    <BlurView tint="dark" intensity={100} style={[styles.container, { bottom }]}>
      <AnimatedTabBar
        tabs={tabs}
        style={styles.tabBar}
        safeAreaInsets={{ bottom: 0 }}
        itemOuterSpace={{ vertical: 0 }}
        {...props}
      />
    </BlurView>
  )
})
