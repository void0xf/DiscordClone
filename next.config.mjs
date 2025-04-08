/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    webpackBuildWorker: true,
    turbo: {},
  },
};

export default nextConfig;
