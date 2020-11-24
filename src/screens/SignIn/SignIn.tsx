import React, { memo } from 'react'
import { Button, View } from 'react-native'
import { firebase } from '@services'
import { styles } from './SignIn.styles'
import { SignInProps } from './SignIn.props'

export const SignIn = memo<SignInProps>(() => {
  return (
    <View style={styles.container}>
      <Button
        title={'signIn'}
        onPress={async () => {
          firebase.signIn('gislain.moreira@gmail.com', 'azerty')
        }}
      />
    </View>
  )
})
