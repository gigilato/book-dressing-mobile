import { toPairs, fromPairs } from 'lodash'
import { fonts as fontAssets } from '@assets'

export const fonts = fromPairs(toPairs(fontAssets).map(([key]) => [key, key]))
