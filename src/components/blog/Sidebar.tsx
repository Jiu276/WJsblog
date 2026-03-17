import { Link } from 'react-router-dom'
import type { PostCategory, Post } from '../../content/types'
import { categories } from '../../content/posts'
import { SocialWidget } from '../widgets/SocialWidget'

export function Sidebar({
  activeCategory,
  onCategoryChange,
  recentPosts,
}: {
  activeCategory: PostCategory | 'All'
  onCategoryChange: (c: PostCategory | 'All') => void
  recentPosts: Post[]
}) {
  return (
    <aside className="space-y-5">
      <div className="card p-5">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 shrink-0 rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-100 to-white" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Hi, I’m WJ.</p>
            <p className="mt-1 text-sm text-slate-600">
              I write practical notes on tools, platforms, and workflows. Clean
              reviews, clear decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900">Categories</p>
          <button
            type="button"
            className="text-xs font-semibold text-orange-700 hover:text-orange-800"
            onClick={() => onCategoryChange('All')}
          >
            Reset
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onCategoryChange('All')}
            className={[
              'chip',
              activeCategory === 'All'
                ? 'border-orange-200 bg-orange-50 text-orange-700'
                : '',
            ].join(' ')}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange(c)}
              className={[
                'chip',
                activeCategory === c
                  ? 'border-orange-200 bg-orange-50 text-orange-700'
                  : '',
              ].join(' ')}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-5">
        <p className="text-sm font-semibold text-slate-900">Recent posts</p>
        <div className="mt-3 space-y-3">
          {recentPosts.slice(0, 5).map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="group block rounded-xl border border-slate-200 bg-white p-3 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-700">
                {p.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{p.category}</p>
            </Link>
          ))}
        </div>
      </div>

      <SocialWidget />
    </aside>
  )
}

