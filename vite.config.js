import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { headHtml } from './src/lib/head.js'

const SEO_HEAD_START = '<!-- SEO_HEAD_START -->'
const SEO_HEAD_END = '<!-- SEO_HEAD_END -->'

function injectSeoHead() {
  return {
    name: 'inject-seo-head',
    transformIndexHtml(html) {
      if (!html.includes(SEO_HEAD_START)) return html
      const marker = `${SEO_HEAD_START}${SEO_HEAD_END}`
      const injected = `${SEO_HEAD_START}\n${headHtml('en', '      ')}\n      ${SEO_HEAD_END}`
      return html.includes(marker) ? html.replace(marker, injected) : html
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectSeoHead()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-icons') || id === 'react-icons') {
            return 'react-icons'
          }
        },
      },
    },
  },
})