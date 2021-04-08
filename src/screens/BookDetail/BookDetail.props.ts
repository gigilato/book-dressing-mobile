import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ExplorerNavigatorParamList, ExplorerNavigationProp } from '@navigation'
import { BookFragment } from '@api/hooks/generated'

export type ExplorerBookDetailProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ExplorerNavigatorParamList, 'ExplorerBookDetail'>,
    ExplorerNavigationProp
  >
  route: RouteProp<ExplorerNavigatorParamList, 'ExplorerBookDetail'>
}

export type BookDetailProps = {
  data: BookFragment
  onPressBack: () => any
}
