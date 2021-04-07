import { StyleSheet } from 'react-native'
import { theme } from '@theme'

const { colors, fontSizes, spacings } = theme

export const styles = StyleSheet.create({
  input: {
    color: colors.text,
    fontFamily: 'poppins300',
    fontSize: fontSizes.big,
    borderBottomColor: colors.text,
    paddingTop: spacings.xxs,
    paddingBottom: spacings.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
