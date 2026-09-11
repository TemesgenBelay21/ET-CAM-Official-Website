import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { LANGS } from './lib/head.js'

const defaultLang = window.location.pathname.startsWith('/am') ? 'am' : 'en'

document.documentElement.classList.add('js')

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <LanguageProvider defaultLang={LANGS.includes(defaultLang) ? defaultLang : 'en'}>
      <App />
    </LanguageProvider>
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
