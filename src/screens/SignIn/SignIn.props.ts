import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthNavigatorParamList, AuthNavigationProp } from '@navigation/AuthNavigator'

export type SignInProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthNavigatorParamList, 'SignIn'>,
    AuthNavigationProp
  >
  route: RouteProp<AuthNavigatorParamList, 'SignIn'>
}
