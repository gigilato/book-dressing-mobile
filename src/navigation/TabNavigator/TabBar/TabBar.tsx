import React, { memo } from 'react'
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar'
import { AnimatedIcon } from './AnimatedIcon'
import { TabBarProps, BubbleComponentProps } from './TabBar.props'

const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  RequestNavigator: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="notification" />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  ExplorerNavigator: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="book" />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  ProfileNavigator: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: (props: BubbleComponentProps) => <AnimatedIcon {...props} name="user" />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
}

export const TabBar = memo<TabBarProps>(({ ...props }) => {
  return <AnimatedTabBar tabs={tabs} {...props} />
})
