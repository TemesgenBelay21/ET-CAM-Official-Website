import { translations } from '../i18n/translations.js'

export const BASE_URL = 'https://et-cam-official-website.vercel.app'
export const LANGS = ['en', 'am']

function jsonLdFor(lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    url: `${BASE_URL}${lang === 'am' ? '/am/' : '/'}`,
    name: 'ET-CAM (Ethiopian Creative Advertisement Media)',
    description:
      'Full-service digital marketing agency in Addis Ababa providing social media, content production, web development, branding, advertising, SEO, and marketing automation.',
    image: `${BASE_URL}/hero%20image/hero_image.jpg`,
    telephone: '+251-936113051',
    email: 'etcamagency@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Nifas Silk-Lafto',
      addressCountry: 'ET',
    },
    areaServed: 'Ethiopia',
    knowsLanguage: ['en', 'am'],
  }
}

export function headForLang(lang) {
  const isAm = lang === 'am'
  const path = isAm ? '/am/' : '/'
  const meta = isAm ? translations.am.meta : translations.en.meta
  return {
    lang: isAm ? 'am' : 'en',
    path,
    title: meta.title,
    description: meta.description,
    ogDescription: isAm
      ? meta.description
      : 'A full-service digital marketing agency in Addis Ababa helping hospitality, lifestyle, retail, and service brands grow.',
    twitterDescription: isAm
      ? meta.description
      : 'Strategy, content, websites, branding, advertising, and automation from one in-house team.',
    ogLocale: isAm ? 'am_ET' : 'en_US',
    canonical: `${BASE_URL}${path}`,
    image: `${BASE_URL}/hero%20image/hero_image.jpg`,
    alternates: [
      { hreflang: 'en', href: `${BASE_URL}/` },
      { hreflang: 'am', href: `${BASE_URL}/am/` },
      { hreflang: 'x-default', href: `${BASE_URL}/` },
    ],
    jsonLd: jsonLdFor(lang),
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function headHtml(lang, linePrefix) {
  const seo = headForLang(lang)
  const prefix = linePrefix ?? ''
  const leader = `${prefix}    `
  return `${leader}<title>${escapeHtml(seo.title)}</title>
${leader}<meta name="description" content="${escapeHtml(seo.description)}" />
${leader}<meta property="og:type" content="website" />
${leader}<meta property="og:site_name" content="ET-CAM" />
${leader}<meta property="og:locale" content="${escapeHtml(seo.ogLocale)}" />
${leader}<meta property="og:url" content="${escapeHtml(seo.canonical)}" />
${leader}<meta property="og:title" content="${escapeHtml(seo.title)}" />
${leader}<meta property="og:description" content="${escapeHtml(seo.ogDescription)}" />
${leader}<meta property="og:image" content="${escapeHtml(seo.image)}" />
${leader}<meta property="og:image:alt" content="ET-CAM Ethiopian Creative Advertisement Media" />
${leader}<meta name="twitter:card" content="summary_large_image" />
${leader}<meta name="twitter:title" content="${escapeHtml(seo.title)}" />
${leader}<meta name="twitter:description" content="${escapeHtml(seo.twitterDescription)}" />
${leader}<meta name="twitter:image" content="${escapeHtml(seo.image)}" />
${leader}<link rel="canonical" data-seo-canonical href="${escapeHtml(seo.canonical)}" />
${seo.alternates
  .map(
    (alt) =>
      `${leader}<link rel="alternate" data-seo-hreflang hreflang="${alt.hreflang}" href="${escapeHtml(alt.href)}" />`,
  )
  .join('\n')}
${leader}<script type="application/ld+json" data-seo-jsonld>${JSON.stringify(seo.jsonLd)}</script>`
}

export function applyHead(lang) {
  const seo = headForLang(lang)
  const setMeta = (attrs) => {
    const selector = attrs.name ? `meta[name="${attrs.name}"]` : `meta[property="${attrs.property}"]`
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
      document.head.appendChild(el)
    } else {
      for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
    }
  }

  setMeta({ name: 'description', content: seo.description })
  setMeta({ property: 'og:locale', content: seo.ogLocale })
  setMeta({ property: 'og:url', content: seo.canonical })
  setMeta({ property: 'og:title', content: seo.title })
  setMeta({ property: 'og:description', content: seo.ogDescription })
  setMeta({ property: 'og:image', content: seo.image })
  setMeta({ name: 'twitter:title', content: seo.title })
  setMeta({ name: 'twitter:description', content: seo.twitterDescription })
  setMeta({ name: 'twitter:image', content: seo.image })

  let canonical = document.querySelector('link[data-seo-canonical]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('data-seo-canonical', '')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', seo.canonical)

  document.querySelectorAll('link[data-seo-hreflang]').forEach((el) => el.remove())
  for (const alt of seo.alternates) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', alt.hreflang)
    link.setAttribute('href', alt.href)
    link.setAttribute('data-seo-hreflang', '')
    document.head.appendChild(link)
  }

  let jsonLd = document.querySelector('script[data-seo-jsonld]')
  if (!jsonLd) {
    jsonLd = document.createElement('script')
    jsonLd.type = 'application/ld+json'
    jsonLd.setAttribute('data-seo-jsonld', '')
    document.head.appendChild(jsonLd)
  }
  jsonLd.textContent = JSON.stringify(seo.jsonLd)
}