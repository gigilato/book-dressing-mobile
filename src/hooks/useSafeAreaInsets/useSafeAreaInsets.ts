import { useMemo } from 'react'
import { useSafeAreaInsets as useDefaultSafeAreaInsets } from 'react-native-safe-area-context'
import { theme } from '@theme'

const {
  sizes: { defaultBottomInset },
} = theme

export const useSafeAreaInsets = () => {
  const { bottom, ...insets } = useDefaultSafeAreaInsets()
  const bottomInset = useMemo(() => (bottom === 0 ? defaultBottomInset : bottom), [bottom])
  return {
    ...insets,
    bottom: bottomInset,
  }
}
