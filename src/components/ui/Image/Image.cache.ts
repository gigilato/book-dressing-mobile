import _ from 'lodash'
import * as FileSystem from 'expo-file-system'
import * as Crypto from 'expo-crypto'
import { Nullable } from '@utils/types'

const BASE_DIR = `${FileSystem.cacheDirectory}book-dressing-cache/`

const getCacheEntry = async (
  uri: string
): Promise<{ exists: boolean; path: string; tmpPath: string }> => {
  const filename = uri.substring(
    uri.lastIndexOf('/'),
    uri.indexOf('?') === -1 ? uri.length : uri.indexOf('?')
  )
  const sha1 = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, uri)
  const ext = filename.indexOf('.') === -1 ? '.jpg' : filename.substring(filename.lastIndexOf('.'))
  const path = `${BASE_DIR}${sha1}${ext}`
  const tmpPath = `${BASE_DIR}${sha1}-${_.uniqueId()}${ext}`

  try {
    await FileSystem.makeDirectoryAsync(BASE_DIR)
  } catch (e) {
    // do nothing
  }
  const info = await FileSystem.getInfoAsync(path)
  const { exists } = info
  return { exists, path, tmpPath }
}

class CacheEntry {
  uri: string
  cachedPath: Nullable<string>

  constructor(uri: string) {
    this.uri = uri
    this.cachedPath = null
  }

  async getPath(): Promise<Nullable<string>> {
    const { uri } = this
    const { path, exists, tmpPath } = await getCacheEntry(uri)
    if (!exists) {
      const result = await FileSystem.createDownloadResumable(uri, tmpPath).downloadAsync()
      if (result && result.status !== 200) return null
      await FileSystem.moveAsync({ from: tmpPath, to: path })
    }
    this.cachedPath = path
    return path
  }

  getCachedPath(): Nullable<string> {
    return this.cachedPath
  }
}

export class CacheManager {
  static entries: { [uri: string]: CacheEntry } = {}

  static get(uri: string): CacheEntry {
    if (!CacheManager.entries[uri]) CacheManager.entries[uri] = new CacheEntry(uri)
    return CacheManager.entries[uri]
  }

  static async clearCache(): Promise<void> {
    await FileSystem.deleteAsync(BASE_DIR, { idempotent: true })
    await FileSystem.makeDirectoryAsync(BASE_DIR)
  }

  static async getCacheSize(): Promise<number> {
    const result = await FileSystem.getInfoAsync(BASE_DIR)
    if (!result.exists) throw new Error(`${BASE_DIR} not found`)
    return result.size
  }
}
