import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabNavigationProp, TabNavigatorParamList } from '@navigation/TabNavigator'
import { UserFragment } from '@api/hooks/generated'

export type ProfileNavigatorParamList = {
  MyProfile: {
    data?: UserFragment
  }
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
