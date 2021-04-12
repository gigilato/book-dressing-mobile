import BottomSheet, { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet'
import { Ref } from 'react'

export interface ActionSheetProps extends Omit<BottomSheetProps, 'snapPoints' | 'children'> {
  title: string
  options: { title: string; onPress: () => any }[]
  snapPoints?: (string | number)[]
  ref?: Ref<BottomSheet>
}

export interface ActionSheetBackdropProps extends BottomSheetBackdropProps {
  visible: boolean
}

export interface MediaPickerActionSheetProps {
  title: string
  onPress: (uri: string) => any
  ref?: Ref<BottomSheet>
}
