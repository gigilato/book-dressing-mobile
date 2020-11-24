import _i18n, { TOptions, StringMap } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { fr } from './fr'

export class I18n {
  setup = async (): Promise<void> => {
    await _i18n.use(initReactI18next).init({
      resources: { en, fr },
      lng: 'fr',
      fallbackLng: 'en',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      defaultNS: 'common',
    })
  }

  changeLanguage = async (lng: string): Promise<void> => {
    await _i18n.changeLanguage(lng)
  }

  t = (key: string, options?: string | TOptions<StringMap>): string => _i18n.t(key, options)
}

export const i18n = new I18n()
