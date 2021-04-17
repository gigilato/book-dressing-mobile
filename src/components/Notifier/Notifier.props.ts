export type ShowNotificationArgs = {
  title?: string
  txTitle?: string
  description?: string
  txDescription?: string
  type?: 'success' | 'error'
}

export type NotifierRef = {
  showNotification: (args: ShowNotificationArgs) => void
}
