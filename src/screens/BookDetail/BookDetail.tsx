import React, { memo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, Icon } from '@components/ui'
import { BookCard } from '@components'
import { ExplorerBookDetailProps, BookDetailProps } from './BookDetail.props'

const BookDetail = memo<BookDetailProps>(({ data, onPressBack }) => {
  const { top } = useSafeAreaInsets()
  return (
    <View variant="screen" safeTop pt={0}>
      <View alignItems="center">
        <BookCard data={data} ratioWidth={200} />
      </View>
      <Icon
        name="arrow-left"
        size="navigationIcon"
        onPress={onPressBack}
        pressableProps={{ position: 'absolute', left: 'defaultLeftInset', top }}
      />
    </View>
  )
})

export const ExplorerBookDetail = memo<ExplorerBookDetailProps>(
  ({
    navigation,
    route: {
      params: { data },
    },
  }) => {
    return <BookDetail data={data} onPressBack={() => navigation.pop()} />
  }
)
