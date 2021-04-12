import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { defaultLeftInset, defaultRightInset } = theme.sizes

export const styles = StyleSheet.create({
  container: {
    marginRight: defaultRightInset,
    marginLeft: defaultLeftInset,
  },
  backdrop: {
    backgroundColor: theme.colors.background,
  },
})
