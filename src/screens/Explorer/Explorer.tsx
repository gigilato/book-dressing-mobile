import React, { memo } from 'react'
import { View } from '@components/ui'
import { BookList, SearchBar } from '@components'
import { ExplorerProps } from './Explorer.props'

export const Explorer = memo<ExplorerProps>(() => {
  return (
    <View variant="screen" pt={0} pb={0}>
      <View py="m">
        <SearchBar onSearch={(search) => console.log(search)} />
      </View>
      <BookList queryOptions={{ variables: { limit: 12 } }} />
    </View>
  )
})
