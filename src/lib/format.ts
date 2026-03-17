export function formatDate(dateISO: string) {
  const d = new Date(dateISO + 'T00:00:00')
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

