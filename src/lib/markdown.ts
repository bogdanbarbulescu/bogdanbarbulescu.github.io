import { marked } from 'marked'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'

function highlightCode(code: string, lang: string | undefined): string {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(code, { language: lang }).value
    } catch {
      // ignore
    }
  }
  return hljs.highlightAuto(code).value
}

marked.use({
  renderer: {
    code(code: string, infostring: string | undefined, _escaped: boolean) {
      const lang = (infostring ?? '').trim()
      const highlighted = highlightCode(code, lang || undefined)
      const langClass = lang ? ` class="language-${lang}"` : ''
      return `<pre class="hljs"><code${langClass}>${highlighted}</code></pre>`
    },
    table(header: string, body: string) {
      const tbody = body ? `<tbody>${body}</tbody>` : ''
      return `<div class="overflow-x-auto my-4"><table class="min-w-full border border-gray-300 dark:border-gray-600 divide-y divide-gray-300 dark:divide-gray-600">${header}${tbody}</table></div>`
    },
  },
})

export function parseMarkdown(md: string): string {
  const raw = marked.parse(md) as string
  return DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } })
}
