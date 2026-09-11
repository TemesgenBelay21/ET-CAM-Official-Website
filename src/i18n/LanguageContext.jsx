import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'
import { applyHead } from '../lib/head.js'

const LanguageContext = createContext(null)
const LANG_KEY = 'et-cam-lang'

export function LanguageProvider({ defaultLang = 'en', children }) {
  const [lang, setLang] = useState(() => (defaultLang === 'am' ? 'am' : 'en'))

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY)
    if (stored === 'am' || stored === 'en') setLang(stored)
  }, [])

  useEffect(() => {
    const currentTranslations = translations[lang] || translations.en
    document.documentElement.setAttribute('lang', lang)
    document.title = currentTranslations.meta.title
    applyHead(lang)
    localStorage.setItem(LANG_KEY, lang)
    if (typeof window !== 'undefined') {
      const target = lang === 'am' ? '/am/' : '/'
      if (window.location.pathname !== target) {
        window.history.replaceState(null, '', target)
      }
    }
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
