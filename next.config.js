/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.amazon.com' },
      { protocol: 'https', hostname: '**.flipkart.com' },
      { protocol: 'https', hostname: '**.meesho.com' },
      { protocol: 'https', hostname: '**.myntra.com' },
      { protocol: 'https', hostname: '**.ajio.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
module.exports = nextConfig;
