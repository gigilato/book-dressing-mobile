import { from } from '@apollo/client'
import { contextLink } from './apollo.context'
import { errorLink } from './apollo.error'
import { httpLink } from './apollo.http'
import { loggerLink } from './apollo.logger'
import { retryLink } from './apollo.retry'

export const link = from([contextLink, loggerLink, errorLink, retryLink, httpLink])
