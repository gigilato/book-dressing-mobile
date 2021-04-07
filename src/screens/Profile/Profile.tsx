import React, { memo } from 'react'
import app from 'firebase'
import { View, Button } from '@components/ui'
import { ProfileProps } from './Profile.props'

export const Profile = memo<ProfileProps>(() => {
  return (
    <View variant="screen">
      <Button title={'logout'} onPress={() => app.auth().signOut()} />
    </View>
  )
})
