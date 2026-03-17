import { Link, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '../content/products'
import { ContentRenderer } from '../components/content/ContentRenderer'
import { ArrowLeft, Star } from 'lucide-react'

export function ProductPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : null

  if (!product) {
    return (
      <div className="card p-8">
        <p className="text-sm font-semibold text-slate-900">Product not found</p>
        <p className="mt-2 text-sm text-slate-600">
          The link may be wrong, or the product was moved.
        </p>
        <Link
          to="/products"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </div>
    )
  }

  const more = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="space-y-8">
      <article className="card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative aspect-[16/12] bg-slate-100 lg:aspect-auto">
            <img
              src={product.image.src}
              alt={product.image.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Products
            </Link>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{product.tagline}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                {product.priceHint}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-800">
                <Star className="h-4 w-4 text-orange-600" aria-hidden="true" />
                {product.rating.toFixed(1)} / 5
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Highlights</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {product.highlights.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Best for
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {product.bestFor.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Not great for
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {product.notGreatFor.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-6 sm:p-10">
          <ContentRenderer blocks={product.details} />
        </div>
      </article>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-900">More picks</h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {more.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.slug}`}
              className="card overflow-hidden transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

