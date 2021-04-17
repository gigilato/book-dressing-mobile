import { StyleSheet } from 'react-native'
import { theme } from '@theme'

export const styles = StyleSheet.create({
  tabbar: { backgroundColor: 'transparent' },
  indicator: { backgroundColor: theme.colors.text },
  loanList: {
    paddingLeft: theme.sizes.defaultLeftInset,
    paddingRight: theme.sizes.defaultRightInset,
  },
})
