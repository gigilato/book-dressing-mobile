import React, { memo } from 'react'
import { View } from 'react-native'
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar'
import { useSafeAreaInsets } from '@hooks'
import { getRgbaCode } from '@utils/color'
import { AnimatedIcon } from './AnimatedIcon'
import { TabBarProps, BubbleComponentProps } from './TabBar.props'
import { styles } from './TabBar.styles'

const color1 = '#5B37B7'
const color2 = '#4361ee'
const color3 = '#FFBD00'
const inactiveColor = 'rgba(0,0,0,1)'

const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  RequestNavigator: {
    labelStyle: { color: color1 },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="notification" />,
      activeColor: getRgbaCode(color1),
      inactiveColor,
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  ExplorerNavigator: {
    labelStyle: { color: color2 },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="book" />,
      activeColor: getRgbaCode(color2),
      inactiveColor,
    },
    background: {
      activeColor: 'rgba(207,235,255,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  ProfileNavigator: {
    labelStyle: { color: color3 },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="user" />,
      activeColor: getRgbaCode(color3),
      inactiveColor,
    },
    background: {
      activeColor: 'rgba(255,235,178,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
}

export const TabBar = memo<TabBarProps>(({ ...props }) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { bottom }]}>
      <AnimatedTabBar
        tabs={tabs}
        style={styles.tabBar}
        safeAreaInsets={{ bottom: 0 }}
        itemOuterSpace={{ vertical: 0 }}
        {...props}
      />
    </View>
  )
})
