import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { defaultLeftInset, defaultRightInset, defaultTopInset } = theme.sizes

export const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: defaultTopInset,
    left: defaultLeftInset,
    right: defaultRightInset,
    zIndex: 1,
  },
})
