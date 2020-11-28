import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabNavigationProp, TabNavigatorParamList } from '../TabNavigator'

export type ProfileNavigatorParamList = {
  Profile: undefined
  SearchBook: undefined
}

export type ProfileNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamList, 'ProfileNavigator'>,
  TabNavigationProp
>

export type ProfileNavigatorProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, 'ProfileNavigator'>,
    TabNavigationProp
  >
  route: RouteProp<TabNavigatorParamList, 'ProfileNavigator'>
}
