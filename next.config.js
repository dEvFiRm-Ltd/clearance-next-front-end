/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sstorage.clearance.ae",
        port: "",
      },
      {
        protocol: "https",
        hostname: "backend-live.clearance.ae",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
