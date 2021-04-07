import { UserFragment } from '@api/hooks/generated'
import { Nullable } from '@utils/types'

export interface CacheValue {
  user: Nullable<UserFragment>
}
