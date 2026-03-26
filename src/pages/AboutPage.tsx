import { Link } from 'react-router-dom'
import { SocialWidget } from '../components/widgets/SocialWidget'

export function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
      <section className="card p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
          About
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          ChronoBlog: clean writing for better choices
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          ChronoBlog is an English blog focused on practical picks: products that
          hold up in daily work, platforms that reduce long-term regret, and
          workflows you can maintain when life gets busy.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'No fluff',
              text: 'Reviews highlight trade-offs and real constraints.',
            },
            { title: 'Clean design', text: 'Simple layout, fast reading.' },
            {
              title: 'Portable thinking',
              text: 'Choose tools you can export and migrate.',
            },
            { title: 'Small systems', text: 'Workflow beats motivation.' },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <p className="text-sm font-semibold text-slate-900">{x.title}</p>
              <p className="mt-1 text-sm text-slate-600">{x.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            Want to collaborate?
          </p>
          <p className="mt-1 text-sm text-slate-700">
            Sponsorships and product reviews are considered if the fit is real.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Contact ChronoBlog
          </Link>
        </div>
      </section>

      <div className="lg:sticky lg:top-[92px]">
        <SocialWidget />
      </div>
    </div>
  )
}

