/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
  // 為了支援 GitHub Pages 的靜態輸出
  output: 'export',
  // 禁用 Next.js 的圖像優化功能，因為 GitHub Pages 不支援
  // 在生產環境中，我們將使用靜態圖像
  trailingSlash: true,
}

module.exports = nextConfig
