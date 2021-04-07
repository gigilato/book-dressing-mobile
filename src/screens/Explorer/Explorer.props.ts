import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ExplorerNavigatorParamList, ExplorerNavigationProp } from '@navigation'

export type ExplorerProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ExplorerNavigatorParamList, 'Explorer'>,
    ExplorerNavigationProp
  >
  route: RouteProp<ExplorerNavigatorParamList, 'Explorer'>
}
