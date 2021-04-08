import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { BookFragment } from '@api/hooks/generated'
import { TabNavigationProp, TabNavigatorParamList } from '@navigation/TabNavigator'

export type ExplorerNavigatorParamList = {
  Explorer: undefined
  ExplorerBookDetail: {
    data: BookFragment
  }
}

export type ExplorerNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, 'ExplorerNavigator'>,
  TabNavigationProp
>

export type ExplorerNavigatorProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, 'ExplorerNavigator'>,
    TabNavigationProp
  >
  route: RouteProp<TabNavigatorParamList, 'ExplorerNavigator'>
}
