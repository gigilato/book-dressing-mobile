import { MutableRefObject } from 'react'
import { ShowNotificationArgs, NotifierRef } from '@components'

export class Notifier {
  private ref: MutableRefObject<NotifierRef | null> | undefined

  setRef = (ref: MutableRefObject<NotifierRef | null>): void => {
    this.ref = ref
  }

  showNotification = (args: ShowNotificationArgs) => this.ref?.current?.showNotification(args)
}

export const notifier = new Notifier()
