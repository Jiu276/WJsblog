import {
  Github,
  Linkedin,
  Rss,
  Twitter,
  Youtube,
  Mail,
} from 'lucide-react'

type SocialItem = {
  href: string
  label: string
  Icon: typeof Github
  internal?: boolean
}

const items: SocialItem[] = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://x.com/', label: 'X', Icon: Twitter },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.youtube.com/', label: 'YouTube', Icon: Youtube },
  { href: 'mailto:hello@wjsblog.example', label: 'Email', Icon: Mail },
  { href: '/blog', label: 'RSS (coming soon)', Icon: Rss, internal: true },
]

export function SocialWidget() {
  return (
    <div className="card p-5">
      <p className="text-sm font-semibold text-slate-900">Follow</p>
      <p className="mt-1 text-sm text-slate-600">
        Social links that actually work.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {items.map(({ href, label, Icon, internal }) => (
          <a
            key={label}
            href={href}
            target={internal ? undefined : '_blank'}
            rel={internal ? undefined : 'noreferrer'}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span className="truncate">{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

