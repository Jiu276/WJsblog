import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="card p-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          to="/"
          className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          Go home
        </Link>
        <Link
          to="/blog"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Browse blog
        </Link>
      </div>
    </div>
  )
}

