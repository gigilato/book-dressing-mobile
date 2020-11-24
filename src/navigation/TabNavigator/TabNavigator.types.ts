import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { RootNavigationProp, RootNavigatorParamList } from '../RootNavigator'

export type TabNavigatorParamList = {
  Placeholder: undefined
}

export type TabNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, 'TabNavigator'>,
  RootNavigationProp
>

export type TabNavigatorProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootNavigatorParamList, 'TabNavigator'>,
    RootNavigationProp
  >
  route: RouteProp<RootNavigatorParamList, 'TabNavigator'>
}
