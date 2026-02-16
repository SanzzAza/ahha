import { scrapeDramaDetail } from '../../../lib/scraper';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ success: false, error: 'Slug is required' });
  }

  try {
    const result = await scrapeDramaDetail(slug);
    
    if (!result.success || !result.data) {
      return res.status(404).json({ success: false, error: 'Drama not found' });
    }

    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
