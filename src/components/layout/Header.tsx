import { NavLink, useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Logo } from '../Logo'
import { useMemo, useState } from 'react'

const linkBase =
  'rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50'

export function Header() {
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const links = useMemo(
    () => [
      { to: '/blog', label: 'Blog' },
      { to: '/products', label: 'Products' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-wj flex items-center justify-between gap-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  linkBase,
                  isActive
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-slate-700',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <form
          className="flex w-full max-w-sm items-center gap-2 md:w-auto"
          onSubmit={(e) => {
            e.preventDefault()
            navigate(`/blog?q=${encodeURIComponent(q.trim())}`)
          }}
        >
          <div className="relative w-full">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts…"
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
              aria-label="Search blog posts"
            />
          </div>
          <button
            type="submit"
            className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex"
          >
            Go
          </button>
        </form>
      </div>

      <div className="container-wj pb-3 md:hidden">
        <nav className="flex flex-wrap gap-2" aria-label="Primary mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'chip',
                  isActive ? 'border-orange-200 bg-orange-50 text-orange-700' : '',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

