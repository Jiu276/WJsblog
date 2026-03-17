export function getSearchParam(
  search: string,
  key: string,
  fallback: string = '',
) {
  const sp = new URLSearchParams(search)
  return sp.get(key) ?? fallback
}

export function setSearchParams(
  search: string,
  patch: Record<string, string | null | undefined>,
) {
  const sp = new URLSearchParams(search)
  for (const [k, v] of Object.entries(patch)) {
    if (v == null || v === '') sp.delete(k)
    else sp.set(k, v)
  }
  const s = sp.toString()
  return s ? `?${s}` : ''
}

