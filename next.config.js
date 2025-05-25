/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // 開發環境使用 i18n，生產環境不使用內建 i18n (因為與 static export 不兼容)
  ...(process.env.NODE_ENV !== 'production' ? { i18n } : {}),
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // 啟用靜態輸出
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
