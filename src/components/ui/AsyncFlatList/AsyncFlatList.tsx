import React, {
  memo,
  ReactElement,
  useCallback,
  forwardRef,
  useMemo,
  useState,
  useRef,
} from 'react'
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { NetworkStatus } from '@apollo/client'
import { Text } from '@components/ui/Text'
import { AsyncFlatListProps, ConnectionInterface, ConnectionNode } from './AsyncFlatList.props'

export const AsyncFlatList: <T, K extends ConnectionInterface<ConnectionNode>>(
  props: AsyncFlatListProps<T, K>
) => ReactElement | null = memo(
  forwardRef<FlatList, AsyncFlatListProps<any, any>>(
    (
      {
        query,
        data,
        renderLoader,
        renderFooter,
        renderHeader,
        renderEmptyState,
        renderErrorState,
        getDerivedData,
        pageSize = 10,
        ...props
      },
      ref
    ) => {
      const { error, networkStatus, refetch, fetchMore, variables } = query
      const offset = useRef(0)

      const derivedData = useMemo(() => {
        if (!getDerivedData || !data) return null
        return getDerivedData(data)
      }, [data, getDerivedData])

      const {
        pageInfos: { hasNextPage },
        edges,
      } = derivedData ??
        data ?? {
          pageInfos: { hasNextPage: false },
          edges: [],
        }

      const onEndReached = useCallback(() => {
        if (!hasNextPage) return
        offset.current = offset.current + pageSize
        fetchMore({
          variables: {
            ...variables,
            offset: offset.current,
          },
        })
      }, [hasNextPage, fetchMore, variables, pageSize])

      if (networkStatus === NetworkStatus.loading || networkStatus === NetworkStatus.setVariables)
        return <ActivityIndicator />
      if (error) return <Text>error</Text>

      return (
        <FlatList
          ref={ref}
          keyExtractor={(item) => item.node.uuid}
          data={edges}
          refreshControl={
            <RefreshControl
              refreshing={networkStatus === NetworkStatus.refetch}
              onRefresh={refetch}
            />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={(): ReactElement => <Text>empty</Text>}
          ListHeaderComponent={renderHeader ? renderHeader(data) : null}
          ListFooterComponent={
            renderFooter
              ? renderFooter(data)
              : !hasNextPage
              ? null
              : (): ReactElement => <ActivityIndicator size="large" />
          }
          {...props}
        />
      )
    }
  )
)
