import { THEME_TAGS, CHARACTER_TAGS, PLOT_TAGS, ADDITIONAL_TAGS, BASE_URL } from '../../lib/constants';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { type = 'all' } = req.query;

  res.setHeader('Cache-Control', 's-maxage=86400');

  const makeTag = (name) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    url: `${BASE_URL}/tag/${name.toLowerCase().replace(/\s+/g, '-')}-lakon-video`,
  });

  let data = {};

  if (type === 'all' || type === 'theme') {
    data.themes = THEME_TAGS.map(makeTag);
  }
  if (type === 'all' || type === 'character') {
    data.characters = CHARACTER_TAGS.map(makeTag);
  }
  if (type === 'all' || type === 'plot') {
    data.plots = PLOT_TAGS.map(makeTag);
  }
  if (type === 'all' || type === 'additional') {
    data.additional = ADDITIONAL_TAGS.map(makeTag);
  }

  return res.status(200).json({
    success: true,
    data,
    total: {
      themes: THEME_TAGS.length,
      characters: CHARACTER_TAGS.length,
      plots: PLOT_TAGS.length,
      additional: ADDITIONAL_TAGS.length,
      all: THEME_TAGS.length + CHARACTER_TAGS.length + PLOT_TAGS.length + ADDITIONAL_TAGS.length,
    },
  });
}
