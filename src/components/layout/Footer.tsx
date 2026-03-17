import { SocialWidget } from '../widgets/SocialWidget'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-wj grid gap-6 py-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold text-slate-900">WJsblog</p>
          <p className="mt-2 max-w-prose text-sm text-slate-600">
            A clean, practical blog about products, platforms, and workflows —
            written in plain English.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} WJsblog. All rights reserved.
          </p>
        </div>
        <div className="md:justify-self-end">
          <SocialWidget />
        </div>
      </div>
    </footer>
  )
}

