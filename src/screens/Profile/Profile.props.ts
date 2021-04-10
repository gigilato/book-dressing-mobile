import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigatorParamList, ProfileNavigationProp } from '@navigation'
import { BookFragment, UserFragment } from '@api/hooks/generated'

export type MyProfileProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'MyProfile'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'MyProfile'>
}

export type UserProfileProps = {
  data: UserFragment
  isMyProfile: boolean
  onPressBook: (book: BookFragment) => any
  onPressEdit?: () => any
}
