import React, { memo } from 'react'
import { View, Button } from 'react-native'
import { firebase } from '@services'
import { ProfileProps } from './Profile.props'
import { styles } from './Profile.styles'

export const Profile = memo<ProfileProps>(() => {
  return (
    <View style={styles.container}>
      <Button title={'logout'} onPress={() => firebase.signOut()} />
    </View>
  )
})
