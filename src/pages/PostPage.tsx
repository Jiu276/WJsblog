import { Link, useParams } from 'react-router-dom'
import { getPostBySlug, posts } from '../content/posts'
import { formatDate } from '../lib/format'
import { ContentRenderer } from '../components/content/ContentRenderer'
import { ArrowLeft, Calendar, Folder } from 'lucide-react'
import { PostCard } from '../components/blog/PostCard'

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function PostPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : null

  if (!post) {
    return (
      <div className="card p-8">
        <p className="text-sm font-semibold text-slate-900">Post not found</p>
        <p className="mt-2 text-sm text-slate-600">
          The link may be wrong, or the post was moved.
        </p>
        <Link
          to="/blog"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    )
  }

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const toc = post.blocks
    .filter((b) => b.type === 'h2' || b.type === 'h3')
    .map((b) => ({
      level: b.type,
      text: b.text,
      id: slugify(b.text),
    }))

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <article className="card overflow-hidden">
        <div className="relative aspect-[21/9] bg-slate-100">
          <img
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur transition hover:bg-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                {formatDate(post.dateISO)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Folder className="h-4 w-4 text-slate-400" />
                {post.category}
              </span>
              <span className="ml-auto text-xs font-semibold text-slate-500">
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <ContentRenderer blocks={post.blocks} />
        </div>
      </article>

        <aside className="space-y-5 lg:sticky lg:top-[92px]">
          <div className="card p-5">
            <p className="text-sm font-semibold text-slate-900">On this page</p>
            <p className="mt-1 text-sm text-slate-600">
              Jump to the sections by title.
            </p>
            <div className="mt-4 space-y-2">
              {toc.length ? (
                toc.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={[
                      'block rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50',
                      h.level === 'h3' ? 'ml-4' : '',
                    ].join(' ')}
                  >
                    {h.text}
                  </a>
                ))
              ) : (
                <p className="text-sm text-slate-600">No headings yet.</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {related.length ? (
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Related in {post.category}
            </h2>
            <Link
              to={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-sm font-semibold text-orange-700 hover:text-orange-800"
            >
              More
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

