import axios from 'axios';
import * as cheerio from 'cheerio';
import { BASE_URL } from './constants';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'id-ID,id;q=0.9,en;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  },
});

// Extract drama ID from URL
function extractDramaId(href) {
  const match = href?.match(/(\d{10,})$/);
  return match ? match[1] : null;
}

// Extract slug from URL
function extractSlug(href) {
  const match = href?.match(/\/drama\/(.+)$/);
  return match ? match[1] : null;
}

// Create tag slug
function createTagSlug(tagName) {
  return tagName.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Scrape dramas list
 */
export async function scrapeDramas(genreSlug = 'lakon', page = 1, sort = 'Popular') {
  try {
    const url = page > 1 ? `/dramas/${genreSlug}?page=${page}` : `/dramas/${genreSlug}`;
    const { data: html } = await client.get(url);
    const $ = cheerio.load(html);

    const dramas = [];
    const seen = new Set();

    // Find all drama links
    $('a[href^="/drama/"]').each((_, el) => {
      const $el = $(el);
      const href = $el.attr('href');
      const id = extractDramaId(href);
      
      if (!id || seen.has(id)) return;
      seen.add(id);

      // Get title from h2, h3, or link text
      let title = $el.find('h2, h3').first().text().trim();
      if (!title) title = $el.text().trim();
      if (!title || title.length < 3) return;

      // Get tags
      const tags = [];
      $el.parent().find('a[href^="/tag/"]').each((_, tagEl) => {
        const tagText = $(tagEl).text().trim();
        if (tagText && !tags.includes(tagText)) {
          tags.push(tagText);
        }
      });

      // Get thumbnail
      const img = $el.find('img').attr('src') || $el.find('img').attr('data-src');

      dramas.push({
        id,
        slug: extractSlug(href),
        title,
        thumbnail: img || null,
        tags: tags.slice(0, 5),
        url: `${BASE_URL}${href}`,
      });
    });

    return {
      success: true,
      data: dramas,
      pagination: {
        page: parseInt(page),
        per_page: dramas.length,
        has_more: dramas.length >= 12,
      },
      meta: {
        genre: genreSlug,
        sort,
        scraped_at: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error('Scrape error:', error.message);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
}

/**
 * Scrape single drama detail
 */
export async function scrapeDramaDetail(slug) {
  try {
    const url = `/drama/${slug}`;
    const { data: html } = await client.get(url);
    const $ = cheerio.load(html);

    const title = $('h1, h2, h3').first().text().trim() || 'Unknown';
    const description = $('meta[name="description"]').attr('content') || 
                       $('meta[property="og:description"]').attr('content') || '';
    const thumbnail = $('meta[property="og:image"]').attr('content') || null;
    const keywords = $('meta[name="keywords"]').attr('content') || '';

    // Extract tags
    const tags = [];
    $('a[href^="/tag/"]').each((_, el) => {
      const tag = $(el).text().trim();
      if (tag && !tags.includes(tag)) tags.push(tag);
    });

    // Extract related dramas
    const relatedDramas = [];
    const seenRelated = new Set();
    $('a[href^="/drama/"]').each((_, el) => {
      const href = $(el).attr('href');
      const id = extractDramaId(href);
      const name = $(el).find('h2, h3').text().trim() || $(el).text().trim();
      
      if (id && !seenRelated.has(id) && id !== extractDramaId(`/drama/${slug}`)) {
        seenRelated.add(id);
        if (name && name.length > 3) {
          relatedDramas.push({
            id,
            slug: extractSlug(href),
            title: name,
          });
        }
      }
    });

    return {
      success: true,
      data: {
        id: extractDramaId(`/drama/${slug}`) || slug.split('-').pop(),
        slug,
        title,
        description,
        thumbnail,
        tags: tags.slice(0, 10),
        keywords: keywords ? keywords.split(',').map(k => k.trim()).filter(Boolean) : [],
        related_dramas: relatedDramas.slice(0, 10),
        url: `${BASE_URL}/drama/${slug}`,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }
}

/**
 * Scrape homepage (trending)
 */
export async function scrapeHomepage(lang = 'id') {
  try {
    const url = lang === 'en' ? '/' : `/${lang}`;
    const { data: html } = await client.get(url);
    const $ = cheerio.load(html);

    // Extract sections
    const sections = [];
    $('h2').each((_, el) => {
      const name = $(el).text().trim();
      if (name && !sections.includes(name)) sections.push(name);
    });

    // Extract dramas
    const dramas = [];
    const seen = new Set();
    $('a[href^="/drama/"]').each((_, el) => {
      const href = $(el).attr('href');
      const id = extractDramaId(href);
      if (!id || seen.has(id)) return;
      seen.add(id);

      const title = $(el).find('h3').text().trim() || $(el).text().trim();
      if (!title || title.length < 3) return;

      dramas.push({
        id,
        slug: extractSlug(href),
        title,
        url: `${BASE_URL}${href}`,
      });
    });

    return {
      success: true,
      data: {
        sections,
        dramas,
        total: dramas.length,
      },
      meta: {
        language: lang,
        scraped_at: new Date().toISOString(),
      },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Scrape channel
 */
export async function scrapeChannel(channelName) {
  try {
    const url = `/channel/${channelName}-channel`;
    const { data: html } = await client.get(url);
    const $ = cheerio.load(html);

    const dramas = [];
    const seen = new Set();
    $('a[href^="/drama/"]').each((_, el) => {
      const href = $(el).attr('href');
      const id = extractDramaId(href);
      if (!id || seen.has(id)) return;
      seen.add(id);

      const title = $(el).find('h2, h3').text().trim() || $(el).text().trim();
      if (!title || title.length < 3) return;

      dramas.push({
        id,
        slug: extractSlug(href),
        title,
        url: `${BASE_URL}${href}`,
      });
    });

    return {
      success: true,
      data: {
        channel: channelName,
        dramas,
        total: dramas.length,
      },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Search dramas (basic - searches from all dramas page)
 */
export async function searchDramas(query, limit = 20) {
  try {
    const { data: html } = await client.get('/dramas/lakon');
    const $ = cheerio.load(html);

    const results = [];
    const seen = new Set();
    const q = query.toLowerCase();

    $('a[href^="/drama/"]').each((_, el) => {
      const href = $(el).attr('href');
      const id = extractDramaId(href);
      if (!id || seen.has(id)) return;
      
      const title = $(el).find('h2, h3').text().trim() || $(el).text().trim();
      if (!title) return;

      // Match query against title or slug
      if (title.toLowerCase().includes(q) || href.toLowerCase().includes(q.replace(/\s+/g, '-'))) {
        seen.add(id);
        results.push({
          id,
          slug: extractSlug(href),
          title,
          url: `${BASE_URL}${href}`,
        });
      }
    });

    return {
      success: true,
      data: results.slice(0, parseInt(limit)),
      query,
      total: results.length,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
