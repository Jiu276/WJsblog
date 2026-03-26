import { Link } from 'react-router-dom'
import clsx from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={clsx(
        'group inline-flex items-center gap-2 rounded-xl px-2 py-1 transition-colors hover:bg-slate-50',
        className,
      )}
      aria-label="ChronoBlog — Home"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
        <span className="h-3 w-3 rounded-full bg-orange-600 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="text-base font-semibold tracking-tight">
        Chrono<span className="text-orange-600">Blog</span>
      </span>
    </Link>
  )
}

