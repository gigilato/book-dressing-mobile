import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationProp, RootNavigatorParamList } from '../RootNavigator'

export type AuthNavigatorParamList = {
  SignIn: undefined
}

export type AuthNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, 'AuthNavigator'>,
  RootNavigationProp
>

export type AuthNavigatorProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootNavigatorParamList, 'AuthNavigator'>,
    RootNavigationProp
  >
  route: RouteProp<RootNavigatorParamList, 'AuthNavigator'>
}
