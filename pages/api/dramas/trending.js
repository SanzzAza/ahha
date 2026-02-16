import { scrapeHomepage } from '../../../lib/scraper';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { lang = 'id' } = req.query;

  try {
    const result = await scrapeHomepage(lang);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
