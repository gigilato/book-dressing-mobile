import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RequestNavigatorParamList, RequestNavigationProp } from '@navigation'

export type LoansProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RequestNavigatorParamList, 'Loans'>,
    RequestNavigationProp
  >
  route: RouteProp<RequestNavigatorParamList, 'Loans'>
}
