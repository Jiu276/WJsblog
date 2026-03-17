export type PostCategory =
  | 'Product Reviews'
  | 'Platform Picks'
  | 'Workflows'
  | 'AI Tools'
  | 'How-To'

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'img'; src: string; alt: string; caption?: string }
  | {
      type: 'callout'
      tone?: 'neutral' | 'promo'
      title: string
      text: string
      href?: string
      hrefLabel?: string
    }

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  dateISO: string // YYYY-MM-DD
  category: PostCategory
  tags: string[]
  coverImage: { src: string; alt: string }
  readingTimeMinutes: number
  blocks: ContentBlock[]
}

export type Product = {
  id: string
  slug: string
  name: string
  tagline: string
  priceHint: string
  rating: number // 1..5
  image: { src: string; alt: string }
  highlights: string[]
  bestFor: string[]
  notGreatFor: string[]
  details: ContentBlock[]
}

