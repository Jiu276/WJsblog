import type { Product } from './types'

export const products: Product[] = [
  {
    id: 'prd-keyboard-01',
    slug: 'compact-mechanical-keyboard',
    name: 'Compact Mechanical Keyboard',
    tagline: 'A quiet, satisfying daily driver for shared spaces.',
    priceHint: '$89–$139',
    rating: 4.6,
    image: {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      alt: 'Mechanical keyboard on a desk',
    },
    highlights: [
      'Dampened case to reduce ping',
      'Comfortable tactile switch feel',
      'Great stabilizers out of the box',
    ],
    bestFor: ['Office setups', 'Long typing sessions', 'Minimal desks'],
    notGreatFor: ['RGB lovers', 'Ultra-compact travel kits'],
    details: [
      {
        type: 'p',
        text: 'This is the kind of keyboard you stop thinking about after day two—in the best way. It feels solid, sounds mellow, and stays consistent across keys.',
      },
      { type: 'h2', text: 'What I liked' },
      {
        type: 'ul',
        items: [
          'Low, warm sound signature (no sharp clacks).',
          'Stabilizers feel tuned enough for daily work.',
          'Layout is compact without being cramped.',
        ],
      },
      { type: 'h2', text: 'What to watch for' },
      {
        type: 'p',
        text: 'If you need a numpad, this size is a compromise. Pair it with a standalone numpad or choose a larger layout.',
      },
    ],
  },
  {
    id: 'prd-hub-01',
    slug: 'reliable-usb-c-hub',
    name: 'Reliable USB‑C Hub',
    tagline: 'Ports you actually use—without heat drama.',
    priceHint: '$49–$79',
    rating: 4.4,
    image: {
      src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1600&q=80',
      alt: 'USB-C hub connected to a laptop',
    },
    highlights: ['Stable HDMI', 'Solid Power Delivery', 'Longer cable = cooler desk'],
    bestFor: ['Home office', 'Dual-screen setups', 'Laptop-first workflows'],
    notGreatFor: ['Ultra-light travel', 'Maxed-out gaming displays'],
    details: [
      {
        type: 'p',
        text: 'A hub should be boring. This one is: it just works, stays cooler than tiny “all-in-one” bricks, and keeps your desk tidy.',
      },
      { type: 'h2', text: 'Recommendation' },
      {
        type: 'p',
        text: 'Choose the version that matches your monitor needs. Most people over-buy ports and under-buy display support.',
      },
    ],
  },
  {
    id: 'prd-headphones-01',
    slug: 'commuter-noise-canceling-headphones',
    name: 'Noise‑Canceling Headphones',
    tagline: 'For focus and travel—balanced sound, great comfort.',
    priceHint: '$199–$349',
    rating: 4.7,
    image: {
      src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80',
      alt: 'Over-ear headphones on a table',
    },
    highlights: ['Comfort-first fit', 'Strong ANC', 'Clear calls'],
    bestFor: ['Commuting', 'Open offices', 'Video calls'],
    notGreatFor: ['Audiophile tuning perfection', 'Ultra-compact pockets'],
    details: [
      {
        type: 'p',
        text: 'These are built for real life: noisy rooms, long sessions, and calls that need to sound professional. The comfort is the standout.',
      },
      { type: 'h2', text: 'How to use them' },
      {
        type: 'ul',
        items: [
          'Use transparency mode outdoors.',
          'Turn off aggressive ANC when you want the most natural sound.',
        ],
      },
    ],
  },
  {
    id: 'prd-monitorlight-01',
    slug: 'monitor-light-bar',
    name: 'Monitor Light Bar',
    tagline: 'Soft, glare-free lighting that upgrades any desk.',
    priceHint: '$39–$99',
    rating: 4.3,
    image: {
      src: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&q=80',
      alt: 'Warm light over a desk with a laptop',
    },
    highlights: ['Less eye fatigue', 'Clean desk footprint', 'Quick brightness control'],
    bestFor: ['Night work', 'Small desks', 'Video calls'],
    notGreatFor: ['Bright sunlit studios', 'Tiny laptop-only setups'],
    details: [
      {
        type: 'p',
        text: 'A small change with a big payoff. Good desk lighting makes writing, reading, and calls feel calmer—especially at night.',
      },
      { type: 'h2', text: 'Tip' },
      {
        type: 'p',
        text: 'Aim for “soft and wide”, not “bright and narrow”. If you see glare, lower the angle or reduce brightness.',
      },
    ],
  },
  {
    id: 'prd-mic-01',
    slug: 'usb-desk-microphone',
    name: 'USB Desk Microphone',
    tagline: 'Cleaner audio for meetings and quick recordings.',
    priceHint: '$59–$129',
    rating: 4.5,
    image: {
      src: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=1600&q=80',
      alt: 'A microphone on a desk',
    },
    highlights: ['Plug-and-play', 'Crisp voice capture', 'Compact footprint'],
    bestFor: ['Remote work', 'Podcasts (starter)', 'Online teaching'],
    notGreatFor: ['Untreated echo-y rooms', 'On-the-go travel'],
    details: [
      {
        type: 'p',
        text: 'If your job involves calls, this is one of the fastest quality upgrades. People notice good audio more than good video.',
      },
      { type: 'h2', text: 'Setup checklist' },
      {
        type: 'ul',
        items: [
          'Keep it 15–25 cm from your mouth.',
          'Point the mic away from your keyboard.',
          'Use a simple noise gate in your meeting app if available.',
        ],
      },
    ],
  },
  {
    id: 'prd-backpack-01',
    slug: 'daily-laptop-backpack',
    name: 'Daily Laptop Backpack',
    tagline: 'Comfortable carry with sane pockets and padding.',
    priceHint: '$59–$179',
    rating: 4.2,
    image: {
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      alt: 'A backpack on a wooden chair',
    },
    highlights: ['Comfort straps', 'Dedicated laptop sleeve', 'Clean look'],
    bestFor: ['Commuting', 'Minimal carry', 'Weekend trips'],
    notGreatFor: ['Camera gear', 'Overpacking'],
    details: [
      {
        type: 'p',
        text: 'A good backpack disappears on your back. This one has enough organization without turning into a drawer system.',
      },
      { type: 'h2', text: 'What to look for' },
      {
        type: 'ul',
        items: [
          'A suspended laptop sleeve (not just padding).',
          'A top pocket for keys + earbuds.',
          'A back panel that breathes.',
        ],
      },
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null
}

