/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // WARNING! This is dangerous!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
