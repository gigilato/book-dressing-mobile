import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileNavigationProp, ProfileNavigatorParamList } from '@navigation'
import { Nullable } from '@utils/types'

export type UpdateProfileProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'UpdateProfile'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'UpdateProfile'>
}

export type UpdateProfileFormInputs = {
  name: Nullable<string>
  username: string
  description: Nullable<string>
  pictureUrl: Nullable<string>
}
