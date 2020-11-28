import React, { memo } from 'react'
import { Box, Button } from '@components/ui'
import { BookCard, SearchBar } from '@components'
import { firebase } from '@services'
import { ProfileProps } from './Profile.props'

export const Profile = memo<ProfileProps>(() => {
  return (
    <Box variant="screen">
      <SearchBar onSearch={(search) => console.log(search)} />
      <BookCard
        onPress={(b) => console.log(b)}
        data={{
          __typename: 'book',
          authors: [],
          categories: [],
          createdAt: new Date(),
          description: '',
          id: '1',
          pageCount: 0,
          publisher: '',
          title: '',
          thumbnailUrl:
            'https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale',
        }}
      />
      <Button title={'logout'} onPress={() => firebase.signOut()} />
    </Box>
  )
})
