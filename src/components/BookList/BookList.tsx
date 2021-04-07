import React, { memo, useMemo } from 'react'
import { useLayout } from '@react-native-community/hooks'
import { AsyncFlatList, View } from '@components/ui'
import { BookCard } from '@components/BookCard'
import { useBooksQuery } from '@api/hooks/generated'
import { BookListProps } from './BookList.props'
import { styles } from './BookList.styles'

export const BookList = memo<BookListProps>(({ queryOptions }) => {
  const { onLayout, width } = useLayout()
  const query = useBooksQuery({ notifyOnNetworkStatusChange: true, ...queryOptions })
  const books = useMemo(() => query.data?.books, [query.data?.books])
  return (
    <AsyncFlatList
      onLayout={onLayout}
      query={query}
      data={books}
      numColumns={3}
      renderItem={({ item }) => (
        <BookCard
          data={{ ...item.node }}
          onPress={(book) => console.log(book)}
          ratioWidth={width === 0 ? undefined : width / 3 - 10}
        />
      )}
      ItemSeparatorComponent={() => <View h="s" />}
      columnWrapperStyle={styles.columnWrapper}
    />
  )
})
