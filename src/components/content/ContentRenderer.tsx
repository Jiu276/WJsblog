import type { ContentBlock } from '../../content/types'

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function renderLinkedText(text: string) {
  // Supports simple markdown-style links: [label](https://example.com)
  const parts: Array<
    | { kind: 'text'; value: string }
    | { kind: 'link'; label: string; href: string }
  > = []

  const re = /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ kind: 'text', value: text.slice(last, m.index) })
    parts.push({ kind: 'link', label: m[1], href: m[2] })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push({ kind: 'text', value: text.slice(last) })

  if (parts.length === 0) return text

  return parts.map((p, i) => {
    if (p.kind === 'text') return <span key={i}>{p.value}</span>
    const external = /^https?:\/\//.test(p.href)
    return (
      <a
        key={i}
        href={p.href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {p.label}
      </a>
    )
  })
}

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose prose-slate max-w-none prose-h2:mt-10 prose-h2:text-slate-900 prose-h3:text-slate-900 prose-a:text-orange-700 prose-a:no-underline hover:prose-a:underline">
      {blocks.map((b, idx) => {
        if (b.type === 'p') return <p key={idx}>{renderLinkedText(b.text)}</p>
        if (b.type === 'h2')
          return (
            <h2 key={idx} id={slugify(b.text)}>
              {b.text}
            </h2>
          )
        if (b.type === 'h3')
          return (
            <h3 key={idx} id={slugify(b.text)}>
              {b.text}
            </h3>
          )
        if (b.type === 'quote')
          return (
            <blockquote key={idx} className="border-l-orange-300">
              {renderLinkedText(b.text)}
            </blockquote>
          )
        if (b.type === 'ul')
          return (
            <ul key={idx}>
              {b.items.map((it) => (
                <li key={it}>{renderLinkedText(it)}</li>
              ))}
            </ul>
          )
        if (b.type === 'img')
          return (
            <figure key={idx} className="my-6">
              <img
                src={b.src}
                alt={b.alt}
                className="w-full rounded-2xl border border-slate-200"
                loading="lazy"
              />
              {b.caption ? (
                <figcaption className="mt-2 text-sm text-slate-500">
                  {b.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        if (b.type === 'callout') {
          const tone = b.tone ?? 'neutral'
          const base =
            tone === 'promo'
              ? 'border-orange-200 bg-orange-50'
              : 'border-slate-200 bg-slate-50'
          return (
            <div
              key={idx}
              className={`not-prose my-6 rounded-2xl border p-5 ${base}`}
            >
              <p className="text-sm font-semibold text-slate-900">{b.title}</p>
              <p className="mt-1 text-sm text-slate-700">
                {renderLinkedText(b.text)}
              </p>
              {b.href ? (
                <a
                  className="mt-3 inline-flex text-sm font-semibold text-orange-700 hover:text-orange-800"
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {b.hrefLabel ?? 'Learn more'}
                </a>
              ) : null}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

