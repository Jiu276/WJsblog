import { useState } from 'react'
import { SocialWidget } from '../components/widgets/SocialWidget'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
      <section className="card p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
          Contact
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Let’s talk
        </h1>
        <p className="mt-3 max-w-prose text-sm text-slate-600">
          Use the form below for collaborations, feedback, or questions. (This
          is a demo form UI; submissions are not sent to a server.)
        </p>

        {sent ? (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">
              Message queued (demo)
            </p>
            <p className="mt-1 text-sm text-emerald-800">
              Thanks! In a real deployment, this would send an email or create a
              ticket.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  Name
                </span>
                <input
                  required
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-900">
                Subject
              </span>
              <input
                required
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                placeholder="What’s this about?"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-900">
                Message
              </span>
              <textarea
                required
                rows={6}
                className="resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                placeholder="Write your message…"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Send message
              </button>
              <p className="text-xs text-slate-500">
                Or email: <span className="font-semibold">hello@chronoblog.example</span>
              </p>
            </div>
          </form>
        )}
      </section>

      <div className="lg:sticky lg:top-[92px]">
        <SocialWidget />
      </div>
    </div>
  )
}

