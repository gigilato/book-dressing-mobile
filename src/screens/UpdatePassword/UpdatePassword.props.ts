import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigationProp, ProfileNavigatorParamList } from '@navigation'

export type UpdatePasswordProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'UpdatePassword'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'UpdatePassword'>
}
