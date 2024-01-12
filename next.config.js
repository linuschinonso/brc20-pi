/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
