import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { palette } = theme

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: palette.yami,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
})
