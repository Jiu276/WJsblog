import { Link } from 'react-router-dom'
import { products } from '../content/products'
import { Star } from 'lucide-react'

export function ProductsPage() {
  return (
    <div className="space-y-6">
      <section className="card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
          Products
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Recommendations with photos and details
        </h1>
        <p className="mt-3 max-w-prose text-sm text-slate-600">
          Curated picks for a cleaner desk, better calls, and calmer daily work.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
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
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold">{p.priceHint}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                  <Star className="h-3.5 w-3.5 text-orange-600" />
                  {p.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

