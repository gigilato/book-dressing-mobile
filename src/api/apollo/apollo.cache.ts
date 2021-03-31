import { InMemoryCache } from '@apollo/client/cache'

const defaultTypePolicy = { keyFields: ['uuid'] }
export const cache = new InMemoryCache({
  typePolicies: {
    User: defaultTypePolicy,
    Book: defaultTypePolicy,
    Loan: defaultTypePolicy,
  },
})
