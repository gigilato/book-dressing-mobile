import React, { memo, useCallback, useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import axios from 'axios'
import { chunk, times } from 'lodash'
import { Box, Text } from '@components/ui'
import { BookCard, SearchBar } from '@components'
import { getQueryUrl, GoogleBooksData, parseGoogleBooksItems } from '@utils/googleBooks'
import { Book } from '@api/hooks/generated'
import { useSafeAreaInsets } from '@hooks'
import { SearchBookProps } from './SearchBook.props'

export const SearchBook = memo<SearchBookProps>(() => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState<Book[]>([])
  const [error, setError] = useState(false)
  const { tab } = useSafeAreaInsets()
  const { colors } = useTheme()

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
  return (
    <Box variant="screen">
      <SearchBar onSearch={onSearch} />
      <Box mb="s" />
      {isLoading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator color={colors.text} />
        </Box>
      ) : error ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>Error</Text>
        </Box>
      ) : (
        <FlatList
          data={chunk(data, 3)}
          renderItem={({ item }) => (
            <Box justifyContent="space-between" flexDirection="row">
              {item.map((book) => (
                <BookCard key={book.id} onPress={(b) => console.log(b)} data={book} />
              ))}
              {times(3 - item.length, (n) => (
                <Box key={n} height="bookCardHeight" width="bookCardWidth" />
              ))}
            </Box>
          )}
          ItemSeparatorComponent={() => <Box height="separator" />}
          ListFooterComponent={() => <Box height={tab} />}
        />
      )}
    </Box>
  )
})
