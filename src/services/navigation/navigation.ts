import { MutableRefObject } from 'react'
import { PartialState, NavigationState, NavigationContainerRef } from '@react-navigation/native'

export class Navigation {
  private ref: MutableRefObject<NavigationContainerRef | undefined> | undefined

  setRef = (ref: MutableRefObject<NavigationContainerRef | undefined>): void => {
    this.ref = ref
  }

  navigate = (name: string, params?: any): void => this.ref?.current?.navigate(name, params)
  goBack = (): void => this.ref?.current?.goBack()
  resetRoot = (state?: PartialState<NavigationState> | NavigationState): void =>
    this.ref?.current?.resetRoot(state)
}

export const navigation = new Navigation()
