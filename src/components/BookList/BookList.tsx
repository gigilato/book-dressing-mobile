import React, { memo, useMemo } from 'react'
import { useLayout } from '@react-native-community/hooks'
import { AsyncFlatList, View } from '@components/ui'
import { BookCard } from '@components/BookCard'
import { useBooksQuery } from '@api/hooks/generated'
import { BookListProps } from './BookList.props'
import { styles } from './BookList.styles'

const numColumns = 3
const columnSpace = 10

export const BookList = memo<BookListProps>(({ queryOptions }) => {
  const { onLayout, width } = useLayout()
  const query = useBooksQuery({ notifyOnNetworkStatusChange: true, ...queryOptions })
  const books = useMemo(() => query.data?.books, [query.data?.books])
  return (
    <AsyncFlatList
      onLayout={onLayout}
      query={query}
      data={books}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <BookCard
          data={item.node}
          onPress={(book) => console.log(book)}
          ratioWidth={width === 0 ? undefined : width / numColumns - columnSpace}
        />
      )}
      ItemSeparatorComponent={() => <View h="s" />}
      ListFooterComponent={() => <View h="defaultBottomInset" />}
      columnWrapperStyle={styles.columnWrapper}
    />
  )
})
