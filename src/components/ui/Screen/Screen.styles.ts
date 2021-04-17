import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { defaultLeftInset, defaultRightInset, defaultTopInset, defaultBottomInset } = theme.sizes

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: defaultRightInset,
    paddingLeft: defaultLeftInset,
    paddingTop: defaultTopInset,
  },
  scrollableContainer: {
    paddingRight: defaultRightInset,
    paddingLeft: defaultLeftInset,
    paddingTop: defaultTopInset,
    paddingBottom: defaultBottomInset,
  },
  noPadding: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
})
