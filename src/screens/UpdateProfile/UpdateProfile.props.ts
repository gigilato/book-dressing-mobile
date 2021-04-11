import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigationProp, ProfileNavigatorParamList } from '@navigation'

export type UpdateProfileProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'UpdateProfile'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'UpdateProfile'>
}
