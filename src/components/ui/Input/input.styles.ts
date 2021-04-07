import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { colors, fontSizes } = theme

export const styles = StyleSheet.create({
  input: {
    color: colors.text,
    fontFamily: 'poppins300',
    fontSize: fontSizes.big,
  },
})
