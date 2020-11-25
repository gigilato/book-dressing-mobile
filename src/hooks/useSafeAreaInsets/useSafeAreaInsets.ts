import { useMemo } from 'react'
import { useSafeAreaInsets as useDefaultSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from '@theme'

const { metrics } = theme

export const useSafeAreaInsets = () => {
  const { bottom, ...insets } = useDefaultSafeAreaInsets()
  const bottomInset = useMemo(() => (bottom === 0 ? metrics.defaultBottomInset : bottom), [bottom])
  return {
    ...insets,
    bottom: bottomInset,
  }
}
