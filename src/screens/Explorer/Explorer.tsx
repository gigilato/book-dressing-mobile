import React, { memo, useState } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated'
import { Screen } from '@components/ui'
import { BookList, SearchBar } from '@components'
import { ExplorerProps } from './Explorer.props'
import { styles } from './Explorer.styles'

const height = 70

export const Explorer = memo<ExplorerProps>(({ navigation }) => {
  const [search, setSearch] = useState('')
  const scrollY = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y
  })

  const headerAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: -1 * Math.min(Math.max(scrollY.value, 0), height) }],
    }),
    []
  )
  return (
    <Screen pt={0} pb={0}>
      <Animated.View style={[styles.header, { height }, headerAnimatedStyle]}>
        <SearchBar onSearch={(value) => setSearch(value)} />
      </Animated.View>
      <BookList
        queryOptions={{ variables: { limit: 12, where: { search, onlyActive: true } } }}
        onPressBook={(book) => navigation.navigate('ExplorerBookDetail', { data: book })}
        onScroll={onScroll}
        contentContainerStyle={{
          marginTop: height,
          paddingBottom: height,
        }}
      />
    </Screen>
  )
})
