import React, { memo, ReactElement, useCallback, forwardRef, useMemo, useRef } from 'react'
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { NetworkStatus } from '@apollo/client'
import { ErrorState } from '@components/ui/ErrorState'
import { AsyncFlatListProps, ConnectionInterface, ConnectionNode } from './AsyncFlatList.props'
import { styles } from './AsyncFlatList.styles'

export const AsyncFlatList: <T, K extends ConnectionInterface<ConnectionNode>>(
  props: AsyncFlatListProps<T, K>
) => ReactElement | null = memo(
  forwardRef<FlatList, AsyncFlatListProps<any, any>>(
    (
      { query, data, getDerivedData, pageSize = 10, ListFooterComponent, renderLoader, ...props },
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
        return renderLoader ? renderLoader() : <ActivityIndicator />
      if (error)
        return (
          <ErrorState
            type="error"
            onPressRetry={() => refetch()}
            loading={networkStatus === NetworkStatus.refetch}
          />
        )

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
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={() => <ErrorState type="empty" />}
          ListFooterComponent={
            hasNextPage
              ? () => <ActivityIndicator size="small" style={styles.footerActivityIndicator} />
              : ListFooterComponent
          }
          {...props}
        />
      )
    }
  )
)
