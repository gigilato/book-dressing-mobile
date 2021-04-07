import { FlatListProps, ListRenderItem, FlatList } from 'react-native'
import { ReactElement, Ref } from 'react'
import { QueryResult } from '@apollo/client'

export interface ConnectionNode {
  uuid: string
}
export interface ConnectionInterface<T> {
  pageInfos: { hasNextPage: boolean }
  aggregate: { count: number }
  edges: { node: T }[]
}

export interface AsyncFlatListProps<T, K extends ConnectionInterface<ConnectionNode>>
  extends Omit<FlatListProps<K['edges'][0]>, 'data' | 'renderItem'> {
  ref?: Ref<FlatList>
  query: QueryResult<T>
  data?: K
  pageSize?: number
  getDerivedData?: (data: K) => K
  renderItem: ListRenderItem<K['edges'][0]>
  renderLoader?: () => ReactElement
  renderEmptyState?: () => ReactElement
  renderErrorState?: () => ReactElement
}
