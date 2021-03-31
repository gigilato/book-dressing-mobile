import { LoggerType } from './logger.types'

export class Logger {
  static log = (message: any, type: LoggerType = 'debug') => {
    if (__DEV__)
      console.log(
        `[${type}] ${typeof message === 'object' ? JSON.stringify(message, null, 2) : message}`
      )
  }
}
