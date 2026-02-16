import { GENRES, CHANNELS, BASE_URL } from '../../lib/constants';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=86400');

  const spec = {
    openapi: '3.1.0',
    info: {
      title: 'GoodShort Unofficial API',
      description: 'Unofficial REST API wrapper for GoodShort (goodshort.com) — a short drama streaming platform by NewReading PTE.LTD',
      version: '1.0.0',
      contact: { email: 'contact@goodshort.com' },
    },
    servers: [
      { url: 'https://your-app.vercel.app/api', description: 'Production' },
      { url: 'http://localhost:3000/api', description: 'Development' },
    ],
    paths: {
      '/dramas': {
        get: {
          summary: 'List dramas',
          parameters: [
            { name: 'genre', in: 'query', schema: { type: 'string', default: 'lakon', enum: GENRES.map(g => g.slug) } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
            { name: 'sort', in: 'query', schema: { type: 'string', enum: ['Popular', 'Recommendation', 'Updated'] } },
          ],
          responses: { 200: { description: 'Drama list' } },
        },
      },
      '/dramas/{slug}': {
        get: {
          summary: 'Get drama detail',
          parameters: [{ name: 'slug', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Drama detail' }, 404: { description: 'Not found' } },
        },
      },
      '/dramas/trending': {
        get: {
          summary: 'Get trending dramas',
          parameters: [{ name: 'lang', in: 'query', schema: { type: 'string', default: 'id' } }],
          responses: { 200: { description: 'Trending dramas' } },
        },
      },
      '/categories': {
        get: { summary: 'List all categories', responses: { 200: { description: 'Categories' } } },
      },
      '/tags': {
        get: {
          summary: 'List all tags',
          parameters: [{ name: 'type', in: 'query', schema: { type: 'string', enum: ['all', 'theme', 'character', 'plot', 'additional'] } }],
          responses: { 200: { description: 'Tags' } },
        },
      },
      '/channels/{name}': {
        get: {
          summary: 'Get channel content',
          parameters: [{ name: 'name', in: 'path', required: true, schema: { type: 'string', enum: CHANNELS.map(c => c.slug) } }],
          responses: { 200: { description: 'Channel dramas' } },
        },
      },
      '/search': {
        get: {
          summary: 'Search dramas',
          parameters: [
            { name: 'q', in: 'query', required: true, schema: { type: 'string' } },
            { name: 'limit', in: 'query', schema: { type: 'integer', default: 20 } },
          ],
          responses: { 200: { description: 'Search results' } },
        },
      },
    },
  };

  return res.status(200).json(spec);
}
