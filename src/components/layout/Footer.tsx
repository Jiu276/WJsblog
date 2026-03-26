import { SocialWidget } from '../widgets/SocialWidget'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-wj grid gap-6 py-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold text-slate-900">ChronoBlog</p>
          <p className="mt-2 max-w-prose text-sm text-slate-600">
            A clean, practical blog about products, platforms, and workflows —
            written in plain English.
          </p>
          <p className="mt-3 text-xs text-slate-600">
            Phone:{' '}
            <a
              href="tel:13958990266"
              className="font-semibold text-slate-800 hover:text-orange-700"
            >
              13958990266
            </a>
          </p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} ChronoBlog. All rights reserved.
          </p>
        </div>
        <div className="md:justify-self-end">
          <SocialWidget />
        </div>
      </div>
    </footer>
  )
}

