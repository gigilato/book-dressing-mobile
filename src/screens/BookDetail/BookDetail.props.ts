import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  ExplorerNavigatorParamList,
  ExplorerNavigationProp,
  ProfileNavigatorParamList,
  ProfileNavigationProp,
} from '@navigation'
import { BookFragment } from '@api/hooks/generated'

export type ExplorerBookDetailProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ExplorerNavigatorParamList, 'ExplorerBookDetail'>,
    ExplorerNavigationProp
  >
  route: RouteProp<ExplorerNavigatorParamList, 'ExplorerBookDetail'>
}

export type ProfileBookDetailProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileNavigatorParamList, 'ProfileBookDetail'>,
    ProfileNavigationProp
  >
  route: RouteProp<ProfileNavigatorParamList, 'ProfileBookDetail'>
}

export type BookDetailProps = {
  data: BookFragment
  onPressBack: () => any
}
