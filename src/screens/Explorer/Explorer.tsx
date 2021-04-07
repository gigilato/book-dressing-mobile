import React, { memo, useState } from 'react'
import { View } from '@components/ui'
import { BookList, SearchBar } from '@components'
import { ExplorerProps } from './Explorer.props'

export const Explorer = memo<ExplorerProps>(() => {
  const [search, setSearch] = useState('')
  return (
    <View variant="screen" pt={0} pb={0}>
      <View py="m">
        <SearchBar onSearch={(value) => setSearch(value)} />
      </View>
      <BookList queryOptions={{ variables: { limit: 12, where: { search } } }} />
    </View>
  )
})
