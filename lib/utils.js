// Slug helper
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();
}

// Format response
export function apiResponse(success, data, meta = {}) {
  return {
    success,
    ...(success ? { data } : { error: data }),
    ...meta,
  };
}

// Cache headers
export function setCacheHeaders(res, maxAge = 300) {
  res.setHeader('Cache-Control', `s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}`);
}
