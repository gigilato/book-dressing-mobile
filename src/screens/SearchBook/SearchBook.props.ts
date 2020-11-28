import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigatorParamList, ProfileNavigationProp } from '@navigation'

export type SearchBookProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'SearchBook'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'SearchBook'>
}
