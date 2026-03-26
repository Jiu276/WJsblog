import type { Post, PostCategory } from './types'

function byDateDesc(a: Post, b: Post) {
  return b.dateISO.localeCompare(a.dateISO)
}

export const categories: PostCategory[] = [
  'Product Reviews',
  'Platform Picks',
  'Workflows',
  'AI Tools',
  'How-To',
]

const rawPosts = [
  {
    id: 'p-2026-03-22-home-office-essentials',
    slug: 'home-office-essentials-i-actually-use-2026',
    title: 'Home Office Essentials I Actually Use (2026): Small Upgrades, Big Relief',
    excerpt:
      'A recent, honest list of desk essentials that stayed on my desk after the “testing week” ended—plus why each one earned its spot.',
    dateISO: '2026-03-22',
    category: 'Product Reviews',
    tags: ['desk-setup', 'hardware', 'productivity'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
      alt: 'A clean desk setup with monitor and laptop',
    },
    readingTimeMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'I have a rule now: if an “upgrade” doesn’t make my day feel easier within a week, it goes back in the box (or it gets donated).',
      },
      {
        type: 'p',
        text: 'This list is what survived that rule. No dramatic “life-changing” claims—just small tools that remove tiny frictions you normally tolerate.',
      },
      {
        type: 'p',
        text: 'The uncomfortable truth is that most “desk upgrades” fail because of one boring thing: reliability. I tried a cheap hub years ago—everything looked fine until a call started. HDMI would stutter, audio would drop, and my “quick test” turned into a 30-minute reset.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
        alt: 'A tidy workspace with a laptop',
        caption:
          'A clean desk isn’t a vibe. It’s a system that reduces micro-decisions.',
      },
      { type: 'h2', text: '1) One-cable docking (reliability over port count)' },
      {
        type: 'p',
        text: 'If you connect a monitor and charge your laptop daily, a stable hub is more useful than a dozen ports you never touch. Look for explicit 4K60 support and sane Power Delivery headroom—and don’t pretend “it works sometimes” counts.',
      },
      {
        type: 'ul',
        items: [
          'Keyword: [USB Power Delivery](https://www.usb.org/usb-charger-pd)',
          'Shopping tip: start with [Amazon search for "USB‑C hub 4K60 PD"](https://www.amazon.com/s?k=usb-c+hub+4k60+pd), then filter by reviews that mention “stable” and “doesn’t drop”.',
          'Avoid: super tiny “8‑in‑1” bricks that run hot.',
          'Red flag: HDMI “works”, but mouse/keyboard lag shows up 20 minutes into a call.',
        ],
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: my boring, reliable hub pick',
        text: 'If you want a safe default, I keep one hub pick on the Products page—chosen for stability and heat behavior (the two things I notice during real work, not during unboxing videos).',
        href: '/products/reliable-usb-c-hub',
        hrefLabel: 'Open the hub pick',
      },
      { type: 'h2', text: '2) A monitor light bar (less glare, calmer nights)' },
      {
        type: 'p',
        text: 'If you work at night, softer desk lighting helps more than you expect. It reduces glare on your screen, makes reading easier, and it quietly improves mood. I noticed the difference the second week—my eyes felt less “tired at 10pm” and more “ready to close the laptop”.',
      },
      {
        type: 'ul',
        items: [
          'What to look for: dimming (you want to go below “office brightness”).',
          'Color temperature: warm-ish light around 3000–3500K feels friendly for long sessions.',
          'Practical test: if you see hotspots on the desk or reflections on the screen, reposition or lower brightness.',
        ],
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1600&q=80',
        alt: 'Warm light over a desk setup',
        caption:
          'The goal is “soft and wide”, not “bright and narrow”.',
      },
      { type: 'h2', text: '3) Better audio for calls (because repetition is tiring)' },
      {
        type: 'p',
        text: 'If you do calls daily, clear audio reduces the “can you repeat that?” tax. People notice your audio quality faster than your camera—especially when your voice is already a little quiet or you’re in an echo-y room.',
      },
      {
        type: 'ul',
        items: [
          'Keyword: [Noise-canceling headphones](https://www.rtings.com/headphones/reviews/best/noise-cancelling)',
          'Keyword: [USB microphone](https://www.shure.com/en-US/performance-production/louder/usb-mics-101)',
          'If you shop on Amazon: start with [USB desk microphone](https://www.amazon.com/s?k=usb+desk+microphone) and compare “pickup distance” in reviews.',
        ],
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: the quick audio upgrade',
        text: 'If you want a simple audio improvement without a full “studio” setup, a USB desk mic is a good start. It’s the upgrade that feels instantly useful, not the one you brag about once in a photo.',
        href: '/products/usb-desk-microphone',
        hrefLabel: 'See the USB mic pick',
      },
    ],
  },
  {
    id: 'p-2026-03-15-beginner-keyboard-buying',
    slug: 'how-to-buy-a-quiet-keyboard-without-the-hobby',
    title: 'How to Buy a Quiet Keyboard Without Turning It Into a Hobby',
    excerpt:
      'A recent buyer’s guide for normal people: what to prioritize, what to ignore, and how to avoid the “spec sheet trap”.',
    dateISO: '2026-03-15',
    category: 'How-To',
    tags: ['keyboard', 'buying', 'office'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?auto=format&fit=crop&w=1600&q=80',
      alt: 'A mechanical keyboard on a desk',
    },
    readingTimeMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'I love enthusiastic communities—but keyboards have a special talent for making you feel like you need to learn 200 terms before you’re allowed to buy one.',
      },
      {
        type: 'p',
        text: 'You don’t. If your goal is “quiet and pleasant” for work, you can decide in one sitting.',
      },
      {
        type: 'p',
        text: 'My first “quiet” purchase failed in a very human way: it sounded fine on my desk, but the spacebar rattle showed up the moment I started typing fast during a meeting. That’s when I learned that quiet isn’t one feature—it’s a chain of small choices.',
      },
      { type: 'h2', text: 'Start with sound: dull beats sharp' },
      {
        type: 'p',
        text: 'In a shared room, the problem is usually sharp, high-frequency clicks. A slightly “thocky” sound is often less distracting—even at similar volume.',
      },
      {
        type: 'ul',
        items: [
          'What you want: a softer “impact” instead of a crisp “tick”.',
          'What you don’t: top-out clacks and spacebar rattles.',
          'What surprises people: keycaps matter more than they expect once stabilizers are tuned.',
        ],
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80',
        alt: 'Keyboard and laptop on a clean desk',
        caption:
          'If it sounds good in a quiet room, it usually sounds fine on calls.',
      },
      { type: 'h2', text: 'The 3 questions that matter' },
      {
        type: 'ul',
        items: [
          'Do I need a numpad, or do I just think I do?',
          'Will I type mostly for writing, or for coding (hotkeys, arrows, nav keys)?',
          'Do I care more about quietness or feel?',
          'Can I live with the spacebar sound (rattle test)?',
        ],
      },
      {
        type: 'p',
        text: 'If you’re unsure, do a tiny “record test”. Tap a few keys and record 10 seconds on your phone. Listen back once through your laptop speakers, once through headphones. You’ll quickly hear the difference between “not that loud” and “actually annoying”.',
      },
      { type: 'h2', text: 'Avoid the spec sheet trap' },
      {
        type: 'p',
        text: 'If you’re reading a list of 30 switch names and your eyes glaze over, stop. Pick one known category (quiet tactile, quiet linear) and buy from a brand with real support. Marketing loves the word “silent”, but your real checklist is: switches, case dampening, and stabilizers.',
      },
      {
        type: 'p',
        text: 'If you want a quick baseline, [Keyboard University](https://www.keyboard.university/) is a good resource that doesn’t feel like gatekeeping.',
      },
      {
        type: 'p',
        text: 'When I shop, I start with [Amazon search for "quiet mechanical keyboard"](https://www.amazon.com/s?k=quiet+mechanical+keyboard) and filter based on comments that mention “stabilizers” or “doesn’t rattle”.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
        alt: 'Notes and desk items',
        caption:
          'A calm desk makes “quiet keyboard” feel like a real quality-of-life upgrade.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: a compact keyboard pick',
        text: 'If you want a starter recommendation, I keep one compact keyboard pick on the Products page.',
        href: '/products/compact-mechanical-keyboard',
        hrefLabel: 'See the keyboard pick',
      },
    ],
  },
  {
    id: 'p-2026-03-05-creator-ops-checklist',
    slug: 'creator-ops-checklist-before-you-sell-anything',
    title: 'A Creator Ops Checklist Before You Sell Anything (So You Don’t Panic Later)',
    excerpt:
      'A recent, practical checklist for selling digital products: customer ownership, refunds, exports, and the boring parts that protect your future self.',
    dateISO: '2026-03-05',
    category: 'Workflows',
    tags: ['creator', 'operations', 'commerce'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      alt: 'Analytics dashboard on a laptop screen',
    },
    readingTimeMinutes: 11,
    blocks: [
      {
        type: 'p',
        text: 'The first time you sell something online is exciting. The second time—after the first refund request, failed download, or payment dispute—teaches you what “operations” really means.',
      },
      {
        type: 'p',
        text: 'This is the checklist I keep so I don’t have to learn the same lesson twice.',
      },
      {
        type: 'p',
        text: 'I used to think “good marketing” was the whole job. Then I noticed something: when you’re small, customer trust is built (or broken) by boring details—refunds that are clear, downloads that actually work, and response times that don’t feel robotic.',
      },
      { type: 'h2', text: 'Own the relationship' },
      {
        type: 'ul',
        items: [
          'Collect email (with permission) and keep exports monthly.',
          'Document how to contact you (email + phone) clearly.',
          'Write a simple refund policy and make it visible.',
          'Keep a change log: when you update the product, customers should know what improved.',
        ],
      },
      {
        type: 'h2',
        text: 'Prepare for the “boring” failure modes',
      },
      {
        type: 'ul',
        items: [
          'Downloads fail: have a backup delivery link or resend process.',
          'Disputes happen: understand how [chargebacks](https://stripe.com/docs/disputes) work.',
          'Files update: version your downloads so customers don’t get lost.',
          'Email deliverability: if your signup emails land in spam, you’ll think “marketing doesn’t work”.',
        ],
      },
      {
        type: 'p',
        text: 'One mistake I made early: I updated a file, but the download link stayed the same and the old customers got a different version without any context. Since then, I always label releases and keep the previous version accessible for a while.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
        alt: 'People collaborating around a laptop',
        caption:
          'A little ops up front prevents a lot of late-night support later.',
      },
      { type: 'h2', text: 'Keep your docs portable' },
      {
        type: 'p',
        text: 'Most “platform lock-in” pain starts with your docs and FAQs. Pick a system you can export cleanly. If you need ideas, start with [Note Apps for Builders](/blog/note-apps-for-builders-2025).',
      },
      {
        type: 'p',
        text: 'A practical trick: write your docs like you’re going to move them next month. Use plain headings, keep formatting simple, and avoid “mystery” embeds you can’t export later.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: platform comparison',
        text: 'If you’re still choosing where to sell, I wrote a comparison that focuses on trade-offs and exit plans.',
        href: '/blog/platforms-for-selling-digital-products',
        hrefLabel: 'Read platform comparison',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
        alt: 'Small business payment scenario',
        caption:
          'Selling is a product. Support and refunds are part of the product too.',
      },
    ],
  },
  {
    id: 'p-2026-02-12-quiet-keyboards',
    slug: 'quiet-keyboards-for-office-2026',
    title: 'Quiet Keyboards That Feel Premium (2026 Office Shortlist)',
    excerpt:
      'A medium-length, practical guide to quieter typing: what actually changes the sound, what’s placebo, and a shortlist you can buy without overthinking.',
    dateISO: '2026-02-12',
    category: 'Product Reviews',
    tags: ['keyboard', 'office', 'productivity'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80',
      alt: 'A keyboard on a desk next to a laptop',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'I used to think “quiet keyboards” were a niche obsession. Then I started sharing a room for calls and deep work—and suddenly every sharp click felt like an apology I had to keep making.',
      },
      {
        type: 'p',
        text: 'Here’s the good news: you don’t need to become a keyboard hobbyist. You just need to understand which changes actually reduce sound (and which ones only look cool on camera).',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
        alt: 'A calm desk with notes and workspace items',
        caption:
          'A calmer setup makes quiet typing feel like a feature, not a gimmick.',
      },
      { type: 'h2', text: 'What actually makes a keyboard quiet' },
      {
        type: 'ul',
        items: [
          'Switch choice: tactile without a sharp click is the sweet spot. “Clicky” is fun—until it isn’t.',
          'Case dampening: a little foam goes further than most people expect.',
          'Stabilizers: a tuned spacebar is the difference between “fine” and “premium”.',
          'Keycaps: thick caps soften the top-out sound and make typing feel less harsh.',
        ],
      },
      {
        type: 'p',
        text: 'If you want one rabbit hole that’s worth it, learn the basics of switch types and what “tactile vs. linear” means. A clean overview is on [Mechanical keyboard switches](https://www.keyboard.university/100-courses/switches-101).',
      },
      { type: 'h2', text: 'The “office” test (before you buy anything)' },
      {
        type: 'p',
        text: 'If you’re buying for shared space, test for “annoyance”, not volume. Sharp, high-frequency clicks carry further than you expect. A keyboard can measure “not that loud” and still feel distracting.',
      },
      {
        type: 'ul',
        items: [
          'Record a 10-second typing clip on your phone from 1 meter away.',
          'Listen back on headphones: is the sound sharp or dull?',
          'Tap the case corners: do you hear “ping”? That’s what foam fixes.',
        ],
      },
      { type: 'h2', text: 'My shortlist (why these made it)' },
      {
        type: 'p',
        text: 'My rule is boring: pick a board that doesn’t fight muscle memory, feels stable under fast typing, and doesn’t sound like a bag of coins.',
      },
      {
        type: 'ul',
        items: [
          'A compact layout (no wasted reach) with standard key sizes.',
          'A case that doesn’t ping when you tap the corners.',
          'Stabilizers that don’t rattle on the first day.',
        ],
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?auto=format&fit=crop&w=1600&q=80',
        alt: 'A mechanical keyboard on a desk',
        caption:
          'When the stabilizers are good, you stop noticing the keyboard—and that’s the goal.',
      },
      {
        type: 'quote',
        text: 'The best quiet keyboard is the one you can type on without thinking about it.',
      },
      { type: 'h2', text: 'My “quiet upgrade” order' },
      {
        type: 'ul',
        items: [
          'First: choose a non-clicky switch profile you enjoy.',
          'Second: stabilize the spacebar (rattle is the #1 giveaway).',
          'Third: add light dampening if the case pings.',
          'Last: keycaps and aesthetics—fun, but not the main lever.',
        ],
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: pair it with one cable solution',
        text: 'A quiet keyboard is great, but the biggest “calm desk” upgrade for me was reducing cable clutter. If you’re docking a laptop daily, consider a reliable hub that runs cooler and stays stable.',
        href: '/products/reliable-usb-c-hub',
        hrefLabel: 'See the USB‑C hub pick',
      },
    ],
  },
  {
    id: 'p-2026-01-18-platform-digital-products',
    slug: 'platforms-for-selling-digital-products',
    title: 'Platforms to Sell Digital Products: A No-Nonsense Comparison',
    excerpt:
      'A practical comparison of digital-product platforms: storefront vs marketplace, fees, ownership, and the small operational details people only notice after launch.',
    dateISO: '2026-01-18',
    category: 'Platform Picks',
    tags: ['platforms', 'creator', 'commerce'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
      alt: 'A person working on a laptop with charts and notes',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'Selling digital products is easy—until you need taxes, refunds, email deliverability, and customer support. The platform you pick is basically you choosing which problems you want to deal with.',
      },
      {
        type: 'p',
        text: 'This isn’t a “best platform” post. It’s a trade-off map—so you can choose quickly, launch, and still have an exit plan.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
        alt: 'Hands using a card reader and laptop in a small business setting',
        caption:
          'When you sell, you’re also running operations—payments are just the beginning.',
      },
      { type: 'h2', text: 'Storefront vs. marketplace' },
      {
        type: 'ul',
        items: [
          'Marketplaces bring traffic but control the relationship (and often your pricing).',
          'Storefronts give you brand + email capture, but you bring the traffic.',
          'Hybrids exist: read the fine print on fees and payout timing.',
        ],
      },
      {
        type: 'p',
        text: 'If you care about ownership, start by understanding the basics of [payment processing](https://stripe.com/docs/payments) and how refunds/disputes work. It’s not glamorous, but it saves you pain later.',
      },
      { type: 'h2', text: 'How to decide in 30 minutes' },
      {
        type: 'p',
        text: 'If your product is evergreen and you can create content consistently, pick a storefront. If you’re validating demand, start with a marketplace and migrate later. Either way, keep your email list portable from day one.',
      },
      {
        type: 'p',
        text: 'If I could go back, I’d make one decision earlier: where my customers “live”. If the platform blocks direct access to customers (email, purchase history, segmentation), you’re renting the relationship.',
      },
      { type: 'h2', text: 'The checklist I wish I had earlier' },
      {
        type: 'ul',
        items: [
          'Can I export customers, email list, and purchase history easily?',
          'How fast are payouts, and what happens during a dispute?',
          'Does the platform handle VAT/sales tax, or is that on me?',
          'Can I update files without breaking old download links?',
        ],
      },
      {
        type: 'p',
        text: 'The “best” platform depends on your tolerance for operations. If you hate admin, choose a tool that bundles taxes + delivery even if it costs more. You’re buying back time.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
        alt: 'Analytics dashboard on a laptop screen',
        caption:
          'Don’t optimize dashboards before you can export customers and deliver files reliably.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: your “portable” stack matters',
        text: 'If you’re building a library of notes, FAQs, and product docs while you sell, pick a note tool you can export cleanly. I compared a few in [Note Apps for Builders](/blog/note-apps-for-builders-2025).',
      },
    ],
  },
  {
    id: 'p-2025-12-07-workflow-weekly-review',
    slug: 'a-30-minute-weekly-review-that-sticks',
    title: 'A 30-Minute Weekly Review That Actually Sticks',
    excerpt:
      'A medium-length weekly review you’ll actually keep: capture, clear, choose, schedule—without turning Sunday into an admin marathon.',
    dateISO: '2025-12-07',
    category: 'Workflows',
    tags: ['habits', 'planning', 'focus'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80',
      alt: 'Notebook and pen on a desk with coffee',
    },
    readingTimeMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'A weekly review isn’t a ritual—it’s maintenance. If it takes longer than 30 minutes, it’s not a review, it’s a rebuild.',
      },
      {
        type: 'p',
        text: 'Mine only started working when I stopped trying to be “perfect” and started optimizing for one feeling: Monday morning should feel clear, not chaotic.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80',
        alt: 'Notes and planning materials on a desk',
        caption:
          'The review is maintenance: clear, decide, and make next week lighter.',
      },
      { type: 'h2', text: 'The 4-step loop' },
      {
        type: 'ul',
        items: [
          'Capture: sweep notes, screenshots, and tabs into one inbox.',
          'Clear: delete, delegate, or file—no “maybe” piles.',
          'Choose: pick 1–3 outcomes for the week.',
          'Schedule: block two deep-work sessions before anything else.',
        ],
      },
      { type: 'h2', text: 'A small but important detail: close loops' },
      {
        type: 'p',
        text: 'If something has been on your list for 3+ weeks, it needs a decision. Keep it, delete it, or turn it into a real next action. “Someday” is fine—just don’t pretend it’s “next”.',
      },
      { type: 'h2', text: 'My 30-minute timer template' },
      {
        type: 'ul',
        items: [
          '5 min: inbox sweep (notes, screenshots, open tabs)',
          '10 min: clear + file + delete',
          '10 min: pick outcomes + define next actions',
          '5 min: schedule two deep-work blocks',
        ],
      },
      {
        type: 'p',
        text: 'One honest trick: write the “first task” for Monday. Not a goal—one concrete next action you can do in 10 minutes. It kills the Monday fog.',
      },
      {
        type: 'p',
        text: 'If you want a simple structure, the original [Getting Things Done](https://gettingthingsdone.com/) model is still the cleanest mental model. You don’t have to adopt it fully—just borrow the parts that reduce friction.',
      },
      {
        type: 'quote',
        text: 'Your calendar should reflect your priorities, not your anxiety.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80',
        alt: 'A notebook and coffee on a desk',
        caption:
          'If the review feels heavy, make it smaller—not more complicated.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: make the review physically pleasant',
        text: 'This sounds silly, but it helped me: do the review with a comfortable setup—good lighting and fewer cables. Start with the basics in [Desk Setup Basics](/blog/desk-setup-basics-for-comfort-and-flow).',
      },
    ],
  },
  {
    id: 'p-2025-11-20-ai-summarizers',
    slug: 'ai-summarizers-for-research-not-hype',
    title: 'AI Summarizers for Research (Not Hype): What They’re Good At',
    excerpt:
      'AI summaries can save hours—if you use them as navigation, not as truth. Here’s what they’re good at, plus the mistakes that quietly ruin your understanding.',
    dateISO: '2025-11-20',
    category: 'AI Tools',
    tags: ['ai', 'research', 'reading'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
      alt: 'Code and data on multiple monitors',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'The best summary preserves decision-relevant details. The worst summary is confident, short, and wrong—and you only notice after you’ve made the decision.',
      },
      {
        type: 'p',
        text: 'I still use summarizers weekly, but I treat them like a map: they show me where to look. They do not replace reading.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
        alt: 'A person working at a desk with a laptop',
        caption:
          'Summaries are navigation. Decisions still deserve source reading.',
      },
      { type: 'h2', text: 'Use cases that consistently work' },
      {
        type: 'ul',
        items: [
          'Turning long docs into a structured outline.',
          'Extracting definitions, assumptions, and constraints.',
          'Generating questions to validate your understanding.',
        ],
      },
      { type: 'h2', text: 'A workflow that keeps you honest' },
      {
        type: 'ul',
        items: [
          'Step 1: ask for an outline, not a conclusion.',
          'Step 2: ask for “key claims + evidence needed”.',
          'Step 3: open the source and verify 2–3 paragraphs that matter.',
          'Step 4: write your own decision note in 5 sentences.',
        ],
      },
      {
        type: 'p',
        text: 'A technique that helps: ask for a summary plus “what would change the conclusion?”. It forces the tool to surface assumptions. For background on hallucinations and why they happen, skim [OpenAI’s model behavior notes](https://platform.openai.com/docs/guides/safety).',
      },
      {
        type: 'p',
        text: 'My personal rule: if the summary changes my mind, I have to read the original. Otherwise I’m letting a tool choose my beliefs.',
      },
      { type: 'h2', text: 'The trap: summary as replacement for reading' },
      {
        type: 'p',
        text: 'Use summaries to navigate, not to decide. If you’re making a decision, read the source paragraphs that support the key claims. Your future self will thank you.',
      },
      {
        type: 'p',
        text: 'If you want a solid baseline for evaluating sources, the [SIFT method](https://hapgood.us/2019/06/19/sift-the-four-moves/) is a quick, practical framework.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80',
        alt: 'A close-up of text and reading materials',
        caption:
          'The fastest way to trust a summary is to verify the source paragraph it came from.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: a better reading setup',
        text: 'If you do a lot of reading at night, a softer desk light helps more than you think. I’m a fan of a simple monitor light bar for glare-free lighting.',
        href: '/products/monitor-light-bar',
        hrefLabel: 'See the light bar pick',
      },
    ],
  },
  {
    id: 'p-2025-10-09-howto-email-newsletter',
    slug: 'how-to-start-a-simple-newsletter-stack',
    title: 'How to Start a Newsletter Stack That Won’t Break Later',
    excerpt:
      'A medium-length, future-proof newsletter setup: start small, keep ownership, and choose tools that won’t trap you later.',
    dateISO: '2025-10-09',
    category: 'How-To',
    tags: ['email', 'marketing', 'platforms'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      alt: 'People collaborating around a laptop',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'The first newsletter tool you pick is rarely your last. So the goal isn’t “pick the perfect tool”. The goal is: ship fast, keep your list portable, and avoid breaking things later.',
      },
      {
        type: 'p',
        text: 'If you’re serious about deliverability, read the basics on [SPF/DKIM/DMARC](https://dmarc.org/overview/). You don’t need to become an email admin—just understand what “good sender” means.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1600&q=80',
        alt: 'A person writing at a desk with a laptop',
        caption:
          'Most newsletter stacks fail because the tool becomes the hobby instead of the writing.',
      },
      { type: 'h2', text: 'The minimal stack' },
      {
        type: 'ul',
        items: [
          'Own a domain (even if you use a hosted platform).',
          'Use double opt-in if you care about long-term deliverability.',
          'Keep a monthly export habit: subscribers + tags + segments.',
        ],
      },
      { type: 'h2', text: 'A sane launch plan (first 2 weeks)' },
      {
        type: 'ul',
        items: [
          'Week 1: one welcome email + one real issue (keep it short).',
          'Week 2: same day/time schedule; add a simple signup page.',
          'Only after that: templates, automations, “growth hacks”.',
        ],
      },
      {
        type: 'p',
        text: 'Don’t over-design early. The first win is consistency. Tools should support writing—not become a second job.',
      },
      { type: 'h2', text: 'A simple format that feels human' },
      {
        type: 'ul',
        items: [
          'One story (what you noticed this week).',
          'One useful link (with 2 sentences of why it matters).',
          'One recommendation (a tool, a habit, or a decision).',
        ],
      },
      {
        type: 'p',
        text: 'If you can’t write the issue in 45 minutes, the format is too complex. Make it smaller. The goal is shipping.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
        alt: 'People collaborating around a laptop',
        caption:
          'Newsletter growth is mostly trust + consistency, not fancy automations.',
      },
      {
        type: 'p',
        text: 'My personal rule: if a platform makes exporting hard, it’s not “simple”—it’s sticky.',
      },
      {
        type: 'quote',
        text: 'Portability isn’t paranoia—it’s just good operations.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: better audio > better video',
        text: 'If newsletters are part of your brand, you’ll eventually do calls, webinars, or short recordings. A simple USB mic makes you sound instantly more professional.',
        href: '/products/usb-desk-microphone',
        hrefLabel: 'See the USB mic pick',
      },
    ],
  },
  {
    id: 'p-2025-09-14-platform-note-apps',
    slug: 'note-apps-for-builders-2025',
    title: 'Note Apps for Builders (2025): What to Pick and Why',
    excerpt:
      'Notion, Obsidian, and lighter tools—choose based on retrieval, not features. A practical framework you can finish in one afternoon.',
    dateISO: '2025-09-14',
    category: 'Platform Picks',
    tags: ['notes', 'knowledge', 'workflow'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
      alt: 'Sticky notes and notebook on a desk',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'A note system is a retrieval system. If you can’t find what you wrote, the app is irrelevant—no matter how beautiful the editor is.',
      },
      {
        type: 'p',
        text: 'I’ve bounced between tools more times than I’d like to admit. The pattern was always the same: I chose by features, then got annoyed by friction.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80',
        alt: 'Notes and planning materials on a desk',
        caption:
          'A good note app feels invisible when you’re thinking—and helpful when you’re searching.',
      },
      { type: 'h2', text: 'Pick based on your primary retrieval pattern' },
      {
        type: 'ul',
        items: [
          'Search-first: fast full-text + good backlinks. Look at [Obsidian](https://obsidian.md/).',
          'Project-first: databases and structured views. Look at [Notion](https://www.notion.so/).',
          'Offline-first: sync and export are non-negotiable. Consider plain Markdown workflows.',
        ],
      },
      { type: 'h2', text: 'The “export test” (do this before committing)' },
      {
        type: 'p',
        text: 'Before you fall in love with a tool, try exporting 20 notes and re-importing them elsewhere. If the export is messy, you’re signing up for future pain.',
      },
      {
        type: 'p',
        text: 'A surprisingly good default is plain Markdown + a fast search tool. It’s not flashy, but it lasts.',
      },
      { type: 'h2', text: 'The note types that usually break systems' },
      {
        type: 'ul',
        items: [
          'Reference notes (links, snippets, “save for later”).',
          'Project notes (checklists, decisions, status).',
          'Living docs (your own FAQ, templates, how-tos).',
        ],
      },
      {
        type: 'p',
        text: 'If a tool makes one of these painful, you’ll feel it within a month. That’s usually when people churn and blame themselves.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
        alt: 'People collaborating with notes and laptop',
        caption:
          'Shared notes are a different product than personal notes—pick tools accordingly.',
      },
      { type: 'h2', text: 'A quick decision test' },
      {
        type: 'p',
        text: 'Import 20 notes, tag them, then try to answer a real question using only search and links. If that feels good, you’re done. If not, don’t force it—switch early before your archive gets big.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: if you type a lot, your keyboard matters',
        text: 'If your note habit is heavy typing, a calmer keyboard reduces fatigue (and keeps calls less noisy).',
        href: '/products/compact-mechanical-keyboard',
        hrefLabel: 'See the keyboard pick',
      },
    ],
  },
  {
    id: 'p-2025-08-03-product-usb-c-hubs',
    slug: 'usb-c-hubs-that-dont-ruin-your-day',
    title: 'USB‑C Hubs That Don’t Ruin Your Day',
    excerpt:
      'Ports, heat, Power Delivery, and why “8‑in‑1” is usually a red flag. A medium-length buyer’s guide for daily work.',
    dateISO: '2025-08-03',
    category: 'Product Reviews',
    tags: ['hardware', 'laptop', 'desk-setup'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1600&q=80',
      alt: 'A laptop connected to a USB-C hub on a desk',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'A hub is a reliability purchase. When it fails, you lose time in the worst possible way: tiny interruptions that add up. A flaky hub can turn a calm morning into a troubleshooting session.',
      },
      {
        type: 'p',
        text: 'Before you buy, check what you actually need: one external monitor? two? wired ethernet? SD cards? Most people buy “more ports” instead of “the right video support”.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1600&q=80',
        alt: 'A laptop connected to a USB-C hub on a desk',
        caption:
          'Daily-dock reliability matters more than having “every port”.',
      },
      { type: 'h2', text: 'Non-negotiables' },
      {
        type: 'ul',
        items: [
          'Power Delivery that matches your charger (don’t underspec). Read [USB Power Delivery](https://www.usb.org/usb-charger-pd).',
          'HDMI that supports your resolution + refresh rate (4K60 is common, but not universal).',
          'A cable long enough to reduce strain and heat buildup near the laptop.',
        ],
      },
      { type: 'h2', text: 'What I avoid' },
      {
        type: 'p',
        text: 'Ultra-compact hubs with many ports run hotter and throttle. For daily work, a slightly larger model is usually more stable. Heat isn’t just comfort—heat is reliability.',
      },
      { type: 'h2', text: 'A quick spec sanity-check' },
      {
        type: 'ul',
        items: [
          'If you run a 4K monitor, look for explicit 4K60 support (not just “4K”).',
          'If you charge through the hub, aim for PD headroom (e.g. 100W input, 85W output).',
          'If you use ethernet, pick a hub with a stable chipset and avoid no-name clones.',
        ],
      },
      { type: 'h2', text: 'The real-world test I run on day one' },
      {
        type: 'ul',
        items: [
          'Plug/unplug 10 times: any flicker or device “reconnect” drama?',
          'Leave it running for 30 minutes: does it get uncomfortably hot?',
          'Move the laptop slightly: does the connector feel fragile or loose?',
        ],
      },
      {
        type: 'p',
        text: 'It’s not scientific, but it catches the common failures early. If a hub is flaky, it usually tells on itself fast.',
      },
      {
        type: 'p',
        text: 'This sounds overkill until the day your display flickers during a presentation. Reliability is the whole product.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
        alt: 'A desk setup with a laptop',
        caption:
          'If your setup is a daily workstation, buy for stability, not for “spec sheet flex”.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: my recommended hub (tested for boring stability)',
        text: 'If you want a safe default, I keep a “boring but reliable” pick on the Products page—stable video, sane heat, and ports you actually use.',
        href: '/products/reliable-usb-c-hub',
        hrefLabel: 'Open the hub pick',
      },
    ],
  },
  {
    id: 'p-2025-06-22-ai-writing-systems',
    slug: 'ai-writing-workflow-structure-first',
    title: 'An AI Writing Workflow: Structure First, Words Second',
    excerpt:
      'Use AI to improve thinking—not to spray text. A human-first workflow for outlines, constraints, and editing passes that keeps your voice intact.',
    dateISO: '2025-06-22',
    category: 'AI Tools',
    tags: ['writing', 'ai', 'editing'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
      alt: 'A person typing on a laptop with a notebook nearby',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'The fastest way to publish low-quality content is to generate words before you decide the structure. I learned that the hard way—more than once.',
      },
      {
        type: 'p',
        text: 'When I’m tired, AI will happily produce “a post-shaped thing.” It reads fine, but it doesn’t feel like anyone lived it. The fix is to start with structure and real constraints.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1600&q=80',
        alt: 'A person writing at a desk with a laptop and notebook',
        caption:
          'If the piece doesn’t have lived details, it reads like “content” instead of writing.',
      },
      { type: 'h2', text: 'A repeatable loop' },
      {
        type: 'ul',
        items: [
          'Draft an outline that matches the reader’s decision.',
          'Ask AI for missing objections and edge cases (the “what am I ignoring?” prompt).',
          'Write the first pass yourself, then use AI for editing passes (clarity, cuts, titles).',
        ],
      },
      { type: 'h2', text: 'A “human” checklist before publishing' },
      {
        type: 'ul',
        items: [
          'What did I personally try, and what changed because of it?',
          'What would I tell a friend to avoid?',
          'Which sentence feels like a lie-by-omission?',
        ],
      },
      {
        type: 'p',
        text: 'If you can’t answer those, the post usually reads generic—no matter how polished the language is.',
      },
      { type: 'h2', text: 'Where AI helps (and where it hurts)' },
      {
        type: 'ul',
        items: [
          'Helps: restructuring, trimming, rewriting for clarity, finding counterarguments.',
          'Hurts: inventing examples, faking confidence, smoothing over uncertainty.',
        ],
      },
      {
        type: 'p',
        text: 'If you want to learn prompt patterns without vibes, skim [OpenAI prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering). Keep it simple: context, constraints, examples, then ask for critiques.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
        alt: 'A computer screen with code-like text',
        caption:
          'Use AI for critique and structure—not for inventing a voice you don’t have.',
      },
      {
        type: 'quote',
        text: 'Use AI like a sharp editor, not like a ghostwriter.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: a calmer writing environment',
        text: 'If you write for long stretches, comfort beats motivation. I like a quieter keyboard and decent headphones—small upgrades that reduce friction.',
        href: '/products/commuter-noise-canceling-headphones',
        hrefLabel: 'See the headphones pick',
      },
    ],
  },
  {
    id: 'p-2025-04-11-workflow-browser-hygiene',
    slug: 'browser-hygiene-for-deep-work',
    title: 'Browser Hygiene for Deep Work: Tabs, Bookmarks, and Focus',
    excerpt:
      'A medium-length system to stop tab creep: session tabs, a parking lot, and two bookmark rules that keep your browser fast and your brain calmer.',
    dateISO: '2025-04-11',
    category: 'Workflows',
    tags: ['focus', 'browser', 'productivity'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
      alt: 'A laptop showing code on a desk',
    },
    readingTimeMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'Tabs are not memory—they’re anxiety storage. If your browser is always full, your attention is always split.',
      },
      {
        type: 'p',
        text: 'I noticed a pattern: when I’m avoiding a hard task, my tab count quietly climbs. The fix isn’t willpower. It’s giving yourself a “safe place” to park things.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
        alt: 'A desk with a laptop and workspace items',
        caption:
          'If your environment is noisy, your browser becomes your “escape hatch”.',
      },
      { type: 'h2', text: 'Two rules that help immediately' },
      {
        type: 'ul',
        items: [
          'If a tab is not needed in the next 15 minutes, park it.',
          'If you can’t explain why a bookmark exists, delete it.',
        ],
      },
      { type: 'h2', text: 'My “parking lot” setup' },
      {
        type: 'ul',
        items: [
          'One folder called “Session” for today’s work.',
          'One folder called “Read later (weekly)” that I clear during my weekly review.',
          'Pin only the tabs that represent ongoing projects (not random curiosity).',
        ],
      },
      {
        type: 'p',
        text: 'The point is psychological: you don’t lose the tab, but it stops demanding attention right now.',
      },
      { type: 'h2', text: 'A tiny habit: close the loop in 60 seconds' },
      {
        type: 'p',
        text: 'If you open something “to remember later”, add one action: bookmark it, add it to your notes, or put it on a task list—then close the tab. Otherwise you’re outsourcing memory to a rectangle.',
      },
      { type: 'h2', text: 'One more rule that saved me: name your bookmarks' },
      {
        type: 'p',
        text: 'If a bookmark is just a title, it becomes a pile. Add 3–6 words to explain why you saved it. Example: “Webhooks — retry strategy” beats “Webhooks”.',
      },
      {
        type: 'ul',
        items: [
          'If you can’t name it, you don’t need it.',
          'If you can’t find it by search, it’s not organized.',
        ],
      },
      {
        type: 'p',
        text: 'Make your browser a workspace, not a warehouse. If you want a deeper framework for focus, [Cal Newport](https://www.calnewport.com/) has solid writing on deep work habits.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
        alt: 'A clean desk setup with a monitor and laptop',
        caption:
          'The easiest tab-reduction strategy is fewer “escape routes” on your desk and screen.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: better calls, fewer distractions',
        text: 'If your day is heavy on video calls, getting clearer audio reduces repetition and cognitive load. A simple USB mic is a quiet productivity boost.',
        href: '/products/usb-desk-microphone',
        hrefLabel: 'See the USB mic pick',
      },
    ],
  },
  {
    id: 'p-2025-02-19-howto-desk-setup',
    slug: 'desk-setup-basics-for-comfort-and-flow',
    title: 'Desk Setup Basics: Comfort, Flow, and Fewer Tiny Frictions',
    excerpt:
      'A medium-length desk setup guide that feels human: comfort first, fewer tiny frictions, and a couple of upgrades that pay off daily.',
    dateISO: '2025-02-19',
    category: 'How-To',
    tags: ['desk-setup', 'ergonomics', 'hardware'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
      alt: 'A clean desk setup with a monitor and laptop',
    },
    readingTimeMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'A clean setup isn’t about aesthetics. It’s about reducing micro-friction so you can start work faster and end the day less tired.',
      },
      {
        type: 'p',
        text: 'When my desk is messy, I feel it in my work: more fidgeting, more procrastination, more “I’ll start after I fix this”. So I built a setup that stays clean by default, not by discipline.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
        alt: 'A tidy desk with laptop and accessories',
        caption:
          '“Clean enough” beats “perfect” because you can maintain it on bad days.',
      },
      { type: 'h2', text: 'Start with posture and light' },
      {
        type: 'ul',
        items: [
          'Raise your screen: eye level beats neck pain.',
          'Add a soft key light: the room feels better instantly.',
          'One cable solution: a hub or dock keeps the desk calmer.',
        ],
      },
      { type: 'h2', text: 'Three tiny frictions to remove' },
      {
        type: 'ul',
        items: [
          'Charging: give every device a default charging spot.',
          'Audio: don’t hunt for earbuds—choose one reliable pair or a headset.',
          'Clutter: one tray for “loose things” beats five random piles.',
        ],
      },
      { type: 'h2', text: 'A maintenance habit that keeps it clean' },
      {
        type: 'p',
        text: 'A clean desk is mostly a routine, not a redesign. My “maintenance” is 90 seconds at the end of the day: clear cups, reset cables, stack paper, put loose items in the tray.',
      },
      {
        type: 'ul',
        items: [
          'If it takes longer than 2 minutes, your system is too complicated.',
          'If it requires motivation, it won’t last.',
        ],
      },
      {
        type: 'p',
        text: 'If you want the most evidence-based place to start, ergonomics basics from [NIOSH](https://www.cdc.gov/niosh/) are worth a skim—especially monitor height and chair posture.',
      },
      {
        type: 'p',
        text: 'A personal tip: decide what “clean enough” means for you. My desk rule is simple—if I can clear it in 2 minutes, it’s maintainable. If it needs 20 minutes, it’s not a system, it’s a mood.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&q=80',
        alt: 'A desk with warm lighting and a laptop',
        caption: 'Warm light makes long sessions feel lighter.',
      },
      {
        type: 'callout',
        tone: 'promo',
        title: 'Soft plug: two upgrades that feel “immediately better”',
        text: 'If you only change two things: add a monitor light bar for softer lighting, and use a reliable USB‑C hub to reduce cable mess.',
        href: '/products/monitor-light-bar',
        hrefLabel: 'See the monitor light bar',
      },
    ],
  },
 ] satisfies Post[]

export const posts: Post[] = [...rawPosts].sort(byDateDesc)

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null
}

