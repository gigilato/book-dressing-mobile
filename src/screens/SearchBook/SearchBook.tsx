import React, { memo, useCallback, useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import _ from 'lodash'
import { View, Text } from '@components/ui'
import { BookCover, SearchBar } from '@components'
import { theme } from '@theme'
import { getQueryUrl, GoogleBooksData, parseGoogleBooksItems } from '@utils/googleBooks'
import { useSafeAreaInsets } from '@hooks'
import { SearchBookProps } from './SearchBook.props'

const { colors } = theme

export const SearchBook = memo<SearchBookProps>(() => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState(false)
  const { bottom } = useSafeAreaInsets()

  const onSearch = useCallback(async (search: string) => {
    setLoading(true)
    setError(false)
    setData([])
    const query = getQueryUrl(search)
    try {
      const response = await axios.get<GoogleBooksData>(query)
      const googleData = parseGoogleBooksItems(response.data?.items)
      setData(googleData)
    } catch (requestError) {
      setError(true)
    }
    setLoading(false)
  }, [])
  const onCancel = useCallback(() => setData([]), [])
  return (
    <View flex={1}>
      <SearchBar onSearch={onSearch} onCancel={onCancel} />
      <View mb="s" />
      {isLoading ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator color={colors.text} />
        </View>
      ) : error ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <Text>Error</Text>
        </View>
      ) : (
        <FlatList
          data={_.chunk(data, 3)}
          renderItem={({ item }) => (
            <View justifyContent="space-between" flexDirection="row">
              {item.map((book) => (
                <BookCover key={book.id} onPress={(b) => console.log(b)} data={book} />
              ))}
              {_.times(3 - item.length, (n) => (
                <View key={n} height="BookCoverHeight" width="BookCoverWidth" />
              ))}
            </View>
          )}
          ItemSeparatorComponent={() => <View height="separator" />}
          ListFooterComponent={() => <View height={bottom} />}
        />
      )}
    </View>
  )
})
