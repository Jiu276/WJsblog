import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { posts } from '../content/posts'
import type { PostCategory } from '../content/types'
import { Sidebar } from '../components/blog/Sidebar'
import { PostCard } from '../components/blog/PostCard'
import { Pagination } from '../components/blog/Pagination'
import { clamp } from '../lib/format'
import { getSearchParam, setSearchParams } from '../lib/query'
import { Search } from 'lucide-react'

const PAGE_SIZE = 6

function normalizeCategory(x: string): PostCategory | 'All' {
  const decoded = x
  const all = new Set<PostCategory>([
    'Product Reviews',
    'Platform Picks',
    'Workflows',
    'AI Tools',
    'How-To',
  ])
  return all.has(decoded as PostCategory) ? (decoded as PostCategory) : 'All'
}

export function BlogPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const q = getSearchParam(location.search, 'q', '').trim()
  const category = normalizeCategory(
    getSearchParam(location.search, 'category', 'All'),
  )
  const pageRaw = Number(getSearchParam(location.search, 'page', '1'))
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? Math.floor(pageRaw) : 1

  const filtered = useMemo(() => {
    const qlc = q.toLowerCase()
    return posts.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!qlc) return true
      return (
        p.title.toLowerCase().includes(qlc) ||
        p.excerpt.toLowerCase().includes(qlc) ||
        p.tags.some((t) => t.toLowerCase().includes(qlc))
      )
    })
  }, [q, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = clamp(page, 1, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const pageItems = filtered.slice(start, start + PAGE_SIZE)

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
      <div className="lg:sticky lg:top-[92px]">
        <Sidebar
          activeCategory={category}
          recentPosts={posts}
          onCategoryChange={(c) => {
            navigate(
              '/blog' +
                setSearchParams(location.search, {
                  category: c === 'All' ? null : c,
                  page: '1',
                }),
            )
          }}
        />
      </div>

      <section className="space-y-5">
        <div className="card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">
            Blog
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Articles on products, platforms, and workflows
          </h1>
          <p className="mt-3 max-w-prose text-sm text-slate-600">
            Filter by category, search by keywords, and browse newest to oldest.
          </p>

          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={q}
                placeholder="Search title, tags, excerpt…"
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                onChange={(e) => {
                  navigate(
                    '/blog' +
                      setSearchParams(location.search, {
                        q: e.target.value || null,
                        page: '1',
                      }),
                  )
                }}
              />
            </div>
            <div className="text-sm text-slate-600 sm:self-center">
              {filtered.length} post{filtered.length === 1 ? '' : 's'}
            </div>
          </form>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pageItems.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>

        {pageItems.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-sm font-semibold text-slate-900">
              No posts found.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Try clearing the search or switching categories.
            </p>
          </div>
        ) : null}

        <Pagination
          page={safePage}
          totalPages={totalPages}
          onPageChange={(next) => {
            navigate(
              '/blog' + setSearchParams(location.search, { page: String(next) }),
            )
          }}
        />
      </section>
    </div>
  )
}

