import { Link } from 'react-router-dom'
import type { Post } from '../../content/types'
import { formatDate } from '../../lib/format'
import { Calendar, Tag } from 'lucide-react'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden transition hover:shadow-md">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
            {post.category}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`} className="group">
          <h3 className="text-lg font-semibold leading-snug text-slate-900 group-hover:text-orange-700">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(post.dateISO)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {post.tags.slice(0, 3).join(', ')}
          </span>
          <span className="ml-auto">{post.readingTimeMinutes} min read</span>
        </div>
      </div>
    </article>
  )
}

