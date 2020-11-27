import React, { memo } from 'react'
import { View, Button } from 'react-native'
import { Text, Pressable } from '@components/ui'
import { firebase } from '@services'
import { ProfileProps } from './Profile.props'
import { styles } from './Profile.styles'

export const Profile = memo<ProfileProps>(() => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('test')} debounce>
        <Text variant="header">test</Text>
      </Pressable>
      <Button title={'logout'} onPress={() => firebase.signOut()} />
    </View>
  )
})
