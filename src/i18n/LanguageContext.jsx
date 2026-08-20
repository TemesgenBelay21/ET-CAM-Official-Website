import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)
const LANG_KEY = 'et-cam-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem(LANG_KEY)
    return stored === 'am' ? 'am' : 'en'
  })

  useEffect(() => {
    const currentTranslations = translations[lang] || translations.en
    document.documentElement.setAttribute('lang', lang)
    document.title = currentTranslations.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', currentTranslations.meta.description)
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'en' ? 'am' : 'en'))
  }, [])

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
