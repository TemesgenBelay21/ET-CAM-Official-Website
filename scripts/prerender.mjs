import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'
import { headHtml, LANGS } from '../src/lib/head.js'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const indexFile = path.join(distDir, 'index.html')
const SEO_HEAD_START = '<!-- SEO_HEAD_START -->'
const SEO_HEAD_END = '<!-- SEO_HEAD_END -->'

async function prerender() {
  if (!fs.existsSync(indexFile)) {
    throw new Error('dist/index.html not found. Run "vite build" before prerendering.')
  }

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
    clearScreen: false,
  })

  try {
    const template = fs.readFileSync(indexFile, 'utf-8')
    const { render } = await vite.ssrLoadModule('/src/prerenderEntry.jsx')

    for (const lang of LANGS) {
      const body = await render(lang)
      let html = template.replace(
        /<!-- SEO_HEAD_START -->\s*[\s\S]*?<!-- SEO_HEAD_END -->/,
        () => `${SEO_HEAD_START}\n${headHtml(lang, '      ')}\n      ${SEO_HEAD_END}`,
      )
      html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
      if (lang === 'am') html = html.replace('<html lang="en">', '<html lang="am">')

      const outDir = lang === 'am' ? path.join(distDir, 'am') : distDir
      fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(path.join(outDir, 'index.html'), html)
      console.log(`[prerender] wrote ${lang === 'am' ? 'dist/am/index.html' : 'dist/index.html'}`)
    }
  } finally {
    await vite.close()
  }
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})