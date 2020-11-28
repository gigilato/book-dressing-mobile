import { useMemo } from 'react'
import { useSafeAreaInsets as useDefaultSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

export const useSafeAreaInsets = () => {
  const {
    sizes: { defaultBottomInset, tabBarHeight },
    space,
  } = useTheme()
  const { bottom, ...insets } = useDefaultSafeAreaInsets()
  const bottomInset = useMemo(() => (bottom === 0 ? defaultBottomInset : bottom), [
    bottom,
    defaultBottomInset,
  ])
  return {
    ...insets,
    bottom: bottomInset,
    tab: tabBarHeight + bottomInset + space.s,
  }
}
