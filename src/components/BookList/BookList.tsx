import React, { memo, useMemo } from 'react'
import { FlatList } from 'react-native'
import _ from 'lodash'
import { useLayout } from '@react-native-community/hooks'
import { AsyncFlatList, View } from '@components/ui'
import { BookCard, BookCardSkeleton } from '@components/BookCard'
import { useBooksQuery } from '@api/hooks/generated'
import { BookListProps } from './BookList.props'
import { styles } from './BookList.styles'

const numColumns = 3
const columnSpace = 10
const loaderData = _.times(12, (n) => n.toString())
const ItemSeparatorComponent = () => <View h="s" />

export const BookList = memo<BookListProps>(({ queryOptions, onPressBook }) => {
  const { onLayout, width } = useLayout()
  const query = useBooksQuery({ notifyOnNetworkStatusChange: true, ...queryOptions })
  const books = useMemo(() => query.data?.books, [query.data?.books])
  const ratioWidth = useMemo(() => (width === 0 ? undefined : width / numColumns - columnSpace), [
    width,
  ])
  return (
    <AsyncFlatList
      onLayout={onLayout}
      query={query}
      data={books}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <BookCard data={item.node} onPress={onPressBook} ratioWidth={ratioWidth} />
      )}
      renderLoader={() => (
        <FlatList
          data={loaderData}
          keyExtractor={(item) => item}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeparatorComponent />}
          renderItem={() => <BookCardSkeleton ratioWidth={ratioWidth} />}
        />
      )}
      ItemSeparatorComponent={() => <ItemSeparatorComponent />}
      ListFooterComponent={() => <View h="defaultBottomInset" />}
      columnWrapperStyle={styles.columnWrapper}
    />
  )
})
