import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'
import { applyHead } from '../lib/head.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ defaultLang = 'en', children }) {
  const [lang, setLang] = useState(() => (defaultLang === 'am' ? 'am' : 'en'))

  useEffect(() => {
    const currentTranslations = translations[lang] || translations.en
    document.documentElement.setAttribute('lang', lang)
    document.title = currentTranslations.meta.title
    applyHead(lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    window.location.href = lang === 'en' ? '/am/' : '/'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang] || translations.en,
      setLang,
      toggleLang,
    }),
    [lang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
