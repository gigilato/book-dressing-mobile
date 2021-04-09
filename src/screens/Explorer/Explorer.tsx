import React, { memo, useState } from 'react'
import { View, Screen } from '@components/ui'
import { BookList, SearchBar } from '@components'
import { ExplorerProps } from './Explorer.props'

export const Explorer = memo<ExplorerProps>(({ navigation }) => {
  const [search, setSearch] = useState('')
  return (
    <Screen pt={0} pb={0}>
      <View py="m">
        <SearchBar onSearch={(value) => setSearch(value)} />
      </View>
      <BookList
        queryOptions={{ variables: { limit: 12, where: { search } } }}
        onPressBook={(book) => navigation.navigate('ExplorerBookDetail', { data: book })}
      />
    </Screen>
  )
})
