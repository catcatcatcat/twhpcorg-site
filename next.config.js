/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
  // 只在生產環境啟用靜態輸出，開發環境使用正常的開發伺服器
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
  } : {}),
}

module.exports = nextConfig
