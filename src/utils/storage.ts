import AsyncStorage from '@react-native-async-storage/async-storage'

export async function load(key: string): Promise<any> {
  try {
    const unparsedValue = await AsyncStorage.getItem(key)
    try {
      return unparsedValue ? JSON.parse(unparsedValue) : null
    } catch {
      return unparsedValue
    }
  } catch {
    return null
  }
}

export async function save(key: string, value: any): Promise<boolean> {
  try {
    const valueToSave = typeof value === 'string' ? value : JSON.stringify(value)
    await AsyncStorage.setItem(key, valueToSave)
    return true
  } catch {
    return false
  }
}

export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch {}
}
