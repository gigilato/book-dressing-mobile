import { v4 as uuidv4 } from 'uuid'
import * as Random from 'expo-random'

export const generateUuid = () => {
  const randomBytes = Random.getRandomBytes(16)
  const uuid = uuidv4({ random: randomBytes })
  return uuid
}
