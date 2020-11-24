import { RetryLink } from '@apollo/client/link/retry'

export const retryLink = new RetryLink({ attempts: { max: 3 } })
