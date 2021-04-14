import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthNavigatorParamList, AuthNavigationProp } from '@navigation/AuthNavigator'

export type ForgotPasswordProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthNavigatorParamList, 'ForgotPassword'>,
    AuthNavigationProp
  >
  route: RouteProp<AuthNavigatorParamList, 'ForgotPassword'>
}

export type ForgotPasswordFormInputs = {
  email: string
}
