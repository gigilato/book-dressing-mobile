import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabNavigationProp, TabNavigatorParamList } from '../TabNavigator'

export type ExplorerNavigatorParamList = {
  Profile: undefined
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
