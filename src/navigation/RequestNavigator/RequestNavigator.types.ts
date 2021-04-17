import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabNavigationProp, TabNavigatorParamList } from '../TabNavigator'

export type RequestNavigatorParamList = {
  Loans: undefined
}

export type RequestNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, 'RequestNavigator'>,
  TabNavigationProp
>

export type RequestNavigatorProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, 'RequestNavigator'>,
    TabNavigationProp
  >
  route: RouteProp<TabNavigatorParamList, 'RequestNavigator'>
}
