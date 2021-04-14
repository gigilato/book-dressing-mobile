import React, { memo, useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import _ from 'lodash'

import { AsyncFlatList, View } from '@components/ui'
import { BookCard, BookCardSkeleton } from '@components/BookCard'
import { useBooksQuery } from '@api/hooks/generated'
import { BookListProps } from './BookList.props'
import { styles } from './BookList.styles'
import { emptyBookData } from './BookList.utils'

const numColumns = 3
const columnSpace = 10
const loaderData = _.times(12, (n) => n.toString())
const ItemSeparatorComponent = () => <View h="s" />

export const BookList = memo<BookListProps>(({ queryOptions, onPressBook, ...props }) => {
  const [width, setWidth] = useState(0)
  const query = useBooksQuery({ notifyOnNetworkStatusChange: true, ...queryOptions })
  const books = useMemo(() => {
    if (!query.data?.books) return undefined
    const { edges } = query.data.books
    return edges.length % numColumns === numColumns - 1
      ? {
          ...query.data.books,
          edges: [...query.data.books.edges, { node: emptyBookData }],
        }
      : query.data.books
  }, [query.data?.books])
  const ratioWidth = useMemo(() => (width === 0 ? undefined : width / numColumns - columnSpace), [
    width,
  ])
  return (
    <AsyncFlatList
      onContentSizeChange={(w) => setWidth(w)}
      query={query}
      data={books}
      numColumns={numColumns}
      renderItem={({ item }) =>
        item.node.uuid === emptyBookData.uuid ? (
          <View w={ratioWidth} />
        ) : (
          <BookCard data={item.node} onPress={onPressBook} ratioWidth={ratioWidth} />
        )
      }
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
      {...props}
    />
  )
})
