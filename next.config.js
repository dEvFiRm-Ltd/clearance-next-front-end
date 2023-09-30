/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sstorage.clearance.ae',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.stylewe.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.clearance.ae',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'backend-live.clearance.ae',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;

