# 台灣高效能運算教育協會網站 (TWHPC Website)

這是台灣高效能運算教育協會的官方網站專案，使用 Next.js、TypeScript 和 Tailwind CSS 構建。網站支援中英文雙語，並採用響應式設計，適配桌面、平板和手機。

## 技術架構

- **前端框架**: [Next.js](https://nextjs.org/) 13.4.x
- **程式語言**: [TypeScript](https://www.typescriptlang.org/)
- **樣式解決方案**: [Tailwind CSS](https://tailwindcss.com/)
- **多語言支援**: [next-i18next](https://github.com/i18next/next-i18next)
- **動畫效果**: [Framer Motion](https://www.framer.com/motion/) 和 [AOS](https://michalsnik.github.io/aos/)
- **部署平台**: [GitHub Pages](https://pages.github.com/)

## 開發環境設置

### 安裝依賴

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 啟動開發伺服器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

開發伺服器將在 [http://localhost:3000](http://localhost:3000) 啟動。

### 建置生產版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

### 匯出靜態網站 (用於 GitHub Pages)

```bash
# 使用 npm
npm run export

# 或使用 yarn
yarn export

# 或使用 pnpm
pnpm export
```

## 專案結構

```
twhpcorg-site/
├── public/               # 靜態資源
│   ├── assets/           # 圖片、圖標等
│   │   ├── images/       # 圖片資源
│   │   └── icons/        # 圖標資源
│   ├── locales/          # 多語言翻譯文件
│   │   ├── zh/           # 中文翻譯
│   │   └── en/           # 英文翻譯
│   └── favicon.ico       # 網站圖標
├── src/
│   ├── components/       # 共用組件
│   │   ├── layout/       # 佈局組件
│   │   │   ├── Layout.tsx    # 主要佈局
│   │   │   ├── Navbar.tsx    # 導航欄
│   │   │   └── Footer.tsx    # 頁腳
│   │   └── ui/           # UI 組件
│   ├── pages/            # 頁面組件
│   │   ├── _app.tsx      # 應用入口
│   │   ├── index.tsx     # 首頁
│   │   ├── about/        # 關於我們
│   │   ├── projects/     # 專案與研究
│   │   ├── education/    # 教育培訓
│   │   ├── news/         # 最新消息
│   │   ├── join-us.tsx   # 加入會員
│   │   └── donate.tsx    # 贊助我們
│   ├── styles/           # 全局樣式
│   │   └── globals.css   # 全局 CSS
│   └── types/            # TypeScript 類型定義
├── next.config.js        # Next.js 配置
├── next-i18next.config.js # 多語言配置
├── tailwind.config.js    # Tailwind CSS 配置
├── postcss.config.js     # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
├── package.json          # 專案依賴和腳本
├── DEVELOPMENT_LOG.md    # 開發日誌
└── TWHPC_Website_Spec_v1.0.md # 網站規格書
```

## 多語言支援

本網站支援中文和英文兩種語言。翻譯文件位於 `public/locales` 目錄下。

### 翻譯文件結構

```
public/locales/
├── zh/
│   └── common.json       # 中文翻譯
└── en/
    └── common.json       # 英文翻譯
```

### 如何添加新的翻譯

1. 在相應的語言文件中添加新的翻譯鍵值對
2. 在組件中使用 `useTranslation` hook 獲取翻譯

```tsx
import { useTranslation } from 'next-i18next';

const Component = () => {
  const { t } = useTranslation('common');
  
  return <div>{t('key')}</div>;
};
```

## 色彩方案

網站使用規格書中指定的色彩方案，已在 `tailwind.config.js` 中配置：

- **橘色 `#CD5C08`** (primary) - 強調色，用於 CTA
- **米白 `#FFF5E4`** (background) - 背景或區塊分隔
- **淺綠 `#C1D8C3`** (secondary) - 標題/區塊/卡片背景
- **灰綠 `#6A9C89`** (tertiary) - 按鈕、Footer、資訊區
- **深藍 `#29434e`** (dark-blue) - 文字、細節
- **深灰 `#3a3a3a`** (dark-gray) - 文字、細節

## 開源授權聲明

- **Lucide Icons**: [ISC License](https://github.com/lucide-icons/lucide/blob/main/LICENSE) - [lucide.dev](https://lucide.dev/)

## 開發規範

- 使用 TypeScript 進行類型檢查
- 使用 Tailwind CSS 進行樣式設計
- 遵循 Next.js 最佳實踐
- 確保所有頁面都支援響應式設計
- 確保所有頁面都支援多語言
- 遵循 WCAG 2.1 AA 標準，確保色盲友善和無障礙訪問

## 部署指南

### 使用 GitHub Pages 部署

1. 建置並匯出靜態網站：`npm run export`
2. 將 `out` 目錄中的內容推送到 GitHub Pages 分支

### 使用 GitHub Actions 自動部署

在 `.github/workflows` 目錄下創建 `deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm ci

      - name: Build and Export
        run: npm run export

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: out
```

## 待完成功能

- [ ] 完成其他頁面（關於我們、專案與研究、教育培訓、最新消息、加入會員、贊助我們）
- [ ] 添加多語言翻譯文件
- [ ] 添加真實圖片和內容
- [ ] 設置 Google Analytics
- [ ] 實現表單提交功能

## 聯絡方式

如有任何問題或建議，請聯絡：contact@twhpc.org
