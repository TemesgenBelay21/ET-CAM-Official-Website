import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { LANGS } from './lib/head.js'

const defaultLang = window.location.pathname.startsWith('/am') ? 'am' : 'en'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider defaultLang={LANGS.includes(defaultLang) ? defaultLang : 'en'}>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
