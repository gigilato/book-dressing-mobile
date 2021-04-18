import React, { memo, useMemo } from 'react'
import { FlatList } from 'react-native'
import _ from 'lodash'
import { AsyncFlatList, View } from '@components/ui'
import { useLoansQuery } from '@api/hooks/generated'
import { LoanCard, LoanCardSkeleton } from '@components/LoanCard'
import { LoanListProps } from './LoanList.props'

const loaderData = _.times(12, (n) => n.toString())
const ItemSeparatorComponent = () => <View h="s" />

export const LoanList = memo<LoanListProps>(({ queryOptions, onPressBook, variant, ...props }) => {
  const query = useLoansQuery({ notifyOnNetworkStatusChange: true, ...queryOptions })
  const loans = useMemo(() => query.data?.loans, [query.data])
  return (
    <AsyncFlatList
      query={query}
      data={loans}
      renderItem={({ item }) => (
        <LoanCard variant={variant} data={item.node} onPressBook={onPressBook} />
      )}
      renderLoader={() => (
        <FlatList
          data={loaderData}
          keyExtractor={(item) => item}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeparatorComponent />}
          renderItem={() => <LoanCardSkeleton />}
        />
      )}
      ItemSeparatorComponent={() => <ItemSeparatorComponent />}
      ListFooterComponent={() => <View h="defaultBottomInset" />}
      {...props}
    />
  )
})
