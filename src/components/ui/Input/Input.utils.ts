import { StyleSheet } from 'react-native'
import { theme } from '@theme'
import { InputVariant } from './Input.props'

const { colors, spacings } = theme

export const inputVariants: Record<InputVariant, any> = {
  form: {
    borderBottomColor: colors.secondaryBackground,
    paddingTop: spacings.xxs,
    paddingBottom: spacings.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}
