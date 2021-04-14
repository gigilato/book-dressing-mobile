import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { defaultLeftInset, defaultRightInset } = theme.sizes

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: defaultLeftInset,
    right: defaultRightInset,
    top: 0,
    zIndex: 1,
    justifyContent: 'center',
  },
})
