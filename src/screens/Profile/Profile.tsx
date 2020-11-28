import React, { memo } from 'react'
import { Box, Button } from '@components/ui'
import { firebase } from '@services'
import { ProfileProps } from './Profile.props'

export const Profile = memo<ProfileProps>(() => {
  return (
    <Box variant="screen">
      <Button title={'logout'} onPress={() => firebase.signOut()} />
    </Box>
  )
})
