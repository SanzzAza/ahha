import { scrapeDramas } from '../../../lib/scraper';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { genre = 'lakon', page = 1, sort = 'Popular' } = req.query;

  try {
    const result = await scrapeDramas(genre, parseInt(page), sort);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
