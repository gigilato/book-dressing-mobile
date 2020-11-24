import { StackNavigationProp } from '@react-navigation/stack'

export type RootNavigatorParamList = {
  AuthNavigator: undefined
  TabNavigator: undefined
}

export type RootNavigationProp = StackNavigationProp<RootNavigatorParamList>
