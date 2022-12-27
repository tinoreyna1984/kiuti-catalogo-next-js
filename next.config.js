/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    //largePageDataBytes: 128 * 1000, // 128KB by default
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig
