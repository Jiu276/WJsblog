import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { posts } from '../content/posts'
import { products } from '../content/products'
import { PostCard } from '../components/blog/PostCard'

const heroBg = '/hero.png'

export function HomePage() {
  const latest = posts.slice(0, 3)
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="space-y-10">
      <section className="card overflow-hidden">
        <div className="relative">
          <div
            className="h-[320px] w-full bg-slate-100 sm:h-[380px]"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-orange-600" />
              English blog • Clean reviews • Practical picks
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              ChronoBlog
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              A modern, no-fluff blog about products, platforms, and workflows.
              Discover tools worth your time—then use them with less friction.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
              >
                Explore the blog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Product picks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            What you’ll find here
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Reviews that focus on trade-offs, platform picks you can trust, and
            workflows that reduce busywork.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: 'Product reviews',
                text: 'Hardware & everyday tools—tested for real work.',
              },
              {
                title: 'Platform picks',
                text: 'Choose the right platform with fewer regrets.',
              },
              {
                title: 'Workflows',
                text: 'Simple systems for focus and consistency.',
              },
              {
                title: 'AI tools',
                text: 'Use AI to think better, not to generate noise.',
              },
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
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Start here
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            New around here? These sections are designed to be skim-friendly.
          </p>
          <div className="mt-5 space-y-3">
            <Link
              to="/blog?category=Product%20Reviews"
              className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                Product Reviews
              </p>
              <p className="mt-1 text-sm text-slate-600">
                The best picks for desk setups and daily work.
              </p>
            </Link>
            <Link
              to="/blog?category=Platform%20Picks"
              className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                Platform Picks
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Choose platforms with clear comparisons.
              </p>
            </Link>
            <Link
              to="/products"
              className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                Product page
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Curated recommendations with details and photos.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Latest posts
          </h2>
          <Link
            to="/blog"
            className="text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Product recommendations
          </h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            Browse products
          </Link>
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {featuredProducts.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.slug}`}
              className="card overflow-hidden transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                <p className="mt-3 text-xs font-semibold text-slate-500">
                  {p.priceHint} • {p.rating.toFixed(1)} / 5
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

