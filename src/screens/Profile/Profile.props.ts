import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigatorParamList, ProfileNavigationProp } from '@navigation'

export type ProfileProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'Profile'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'Profile'>
}
