/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // For static HTML export image optimization must be disabled
    unoptimized: true // loader: 'akamai' + URL / or: unoptimized: true,
  },
  assetPrefix: '/ratepunk-landing-page-nextjs',
  basePath: '/ratepunk-landing-page-nextjs'
};

module.exports = nextConfig;
