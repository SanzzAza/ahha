import { GENRES, BASE_URL } from '../../lib/constants';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=172800');

  return res.status(200).json({
    success: true,
    data: GENRES.map(g => ({
      id: g.id,
      slug: g.slug,
      name: g.name,
      name_en: g.nameEn,
      total_pages: g.totalPages || null,
      url: `${BASE_URL}/dramas/${g.slug}`,
      api_url: `/api/dramas?genre=${g.slug}`,
    })),
    total: GENRES.length,
  });
}
