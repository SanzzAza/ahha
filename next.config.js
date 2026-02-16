/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.goodshort.com', 'img.goodshort.com'],
  },
  async rewrites() {
    return [
      { source: '/openapi.json', destination: '/api/openapi.json' },
    ];
  },
};
