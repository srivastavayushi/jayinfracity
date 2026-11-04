/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jayinfracity',
  assetPrefix: '/jayinfracity/',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
