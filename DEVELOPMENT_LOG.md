# 台灣高效能運算教育協會網站開發日誌

本文檔記錄了台灣高效能運算教育協會網站的開發過程、重要決策和技術選擇，以便於未來開發者能夠理解專案的演進歷程。

## 2025-05-22: 專案初始化與基礎架構搭建

### 需求分析
- 根據 `TWHPC_Website_Spec_v1.0.md` 規格書進行需求分析
- 確定網站需要支援中英文雙語
- 確定網站需要響應式設計，適配桌面、平板和手機
- 確定網站需要部署在 GitHub Pages 上，使用靜態網頁

### 技術選擇
- 選擇 **Next.js** 作為前端框架，因為：
  - 支援靜態網站生成 (SSG)，適合部署到 GitHub Pages
  - 內建路由系統，便於管理多語言頁面
  - 優異的 SEO 支援
  - 支援 TypeScript

- 選擇 **Tailwind CSS** 作為樣式解決方案，因為：
  - 符合規格書中的建議
  - 便於實現響應式設計
  - 可輕鬆實現規格書中指定的色彩方案

- 選擇 **next-i18next** 作為多語言解決方案，因為：
  - 與 Next.js 完美整合
  - 支援靜態網站生成
  - 支援 URL 路徑區分語言

- 選擇 **Framer Motion** 和 **AOS** 作為動畫解決方案，因為：
  - Framer Motion 提供流暢的組件動畫
  - AOS 提供滾動顯示動畫
  - 兩者都有良好的性能和易用性

### 設計決策
- 採用規格書中指定的色彩方案：
  - 橘色 `#CD5C08` (primary) - 強調色，用於 CTA
  - 米白 `#FFF5E4` (background) - 背景或區塊分隔
  - 淺綠 `#C1D8C3` (secondary) - 標題/區塊/卡片背景
  - 灰綠 `#6A9C89` (tertiary) - 按鈕、Footer、資訊區
  - 深藍 `#29434e` (dark-blue) - 文字、細節
  - 深灰 `#3a3a3a` (dark-gray) - 文字、細節

- 選擇字體：
  - 標題: EB Garamond (serif)
  - 內文: Inter 和 Noto Sans TC (sans-serif)
  - 手寫風格: Caveat (cursive)

- 導航欄設計：
  - 桌面版：水平導航欄，帶下拉選單
  - 手機版：漢堡選單，可展開的側邊欄
  - 滾動時改變背景色和陰影

- 頁腳設計：
  - 使用灰綠色背景
  - 分為四個區塊：協會簡介、快速連結、聯絡方式、捐款/會員連結
  - 底部包含版權信息和隱私權政策/使用者條款連結

### 開發進度
1. **專案初始化**
   - 創建 Next.js 專案
   - 配置 TypeScript
   - 配置 Tailwind CSS
   - 配置多語言支援

2. **基礎組件開發**
   - 創建主要佈局組件 (Layout.tsx)
   - 創建導航欄組件 (Navbar.tsx)
   - 創建頁腳組件 (Footer.tsx)

3. **首頁開發**
   - 創建首頁組件 (index.tsx)
   - 實現 Hero Banner
   - 實現協會簡介區塊
   - 實現重點專案區塊
   - 實現最新消息區塊
   - 實現合作夥伴 Logo 牆
   - 實現 FAQ 區塊
   - 實現強調卡片區塊

### 使用的開源資源
- **Lucide Icons** (ISC License) - 用於社群媒體圖標和界面圖標
  - 網址: https://lucide.dev/

## 2025-05-22: 專案進度更新與問題排查

### 目前進度
1. **專案結構已建立**
   - 所有必要的檔案和目錄都已創建
   - 包括 src/components/layout/, src/pages/, src/styles/ 等

2. **配置檔案已設置**
   - package.json, tsconfig.json, tailwind.config.js 等都已正確設置
   - Next.js 版本為 15.3.2，但配置針對 13.x 版本，可能導致不兼容問題

3. **程式碼檔案已創建**
   - Layout.tsx, Navbar.tsx, Footer.tsx, _app.tsx, index.tsx 等都已存在
   - IDE 顯示一些錯誤，例如找不到 Navbar 和 Footer 模組
   - 全局樣式 (globals.css) 中的 Tailwind 指令被 IDE 標記為警告，但這不影響實際運行

4. **環境設置**
   - 已安裝 Node.js 和 npm
   - 已執行 npm install 安裝依賴

### 遇到的問題
1. **Next.js 版本問題**
   - 使用的是 Next.js 15.3.2 版本，但配置針對 13.x 版本
   - 可能導致不兼容問題

2. **多語言支援問題**
   - 缺少 public/locales 目錄和翻譯檔案
   - 需要創建基本的翻譯檔案

3. **開發伺服器連線問題**
   - 嘗試啟動開發伺服器時無法連線
   - 可能與版本不兼容或缺少必要檔案有關

### 待辦事項
1. **解決 Next.js 版本問題**
   - 降級 Next.js 版本至 13.4.19 以匹配配置
   ```bash
   npm uninstall next
   npm install next@13.4.19
   ```

2. **創建多語言翻譯檔案**
   - 創建 public/locales 目錄和基本翻譯檔案
   ```bash
   mkdir -p public/locales/zh
   mkdir -p public/locales/en
   echo '{"title": "台灣高效能運算教育協會"}' > public/locales/zh/common.json
   echo '{"title": "Taiwan High Performance Computing Education Association"}' > public/locales/en/common.json
   ```

3. **重新啟動開發伺服器**
   - 完成上述步驟後重新啟動開發伺服器
   ```bash
   npm run dev
   ```

4. **如果仍然有問題，嘗試完全重新安裝**
   - 刪除 node_modules 和 .next 目錄
   - 重新安裝依賴
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

### 後續計劃
- 解決初始化問題後，繼續完成其他頁面的開發
- 添加真實內容和圖片
- 優化響應式設計和動畫效果
- 測試多語言功能
- 準備部署到 GitHub Pages

## 2025-05-22: UI 改進與問題修復

### 今日完成的工作

1. **修復開發伺服器連線問題**
   - 解決了開發伺服器無法連線的問題
   - Commit: `3e48431 - fix: resolve development server connection issues`

2. **導航欄重構**
   - 重新組織導航欄佈局，採用左對齊的選單項目
   - 改善了導航欄在不同螢幕尺寸下的顯示效果
   - Commit: `49d8c80 - refactor(navbar): reorganize layout with left-aligned menu items`

3. **首頁設計增強**
   - 添加全屏 Hero 圖片，提升視覺衝擊力
   - 改善導航欄的可見度
   - 優化了首頁各區塊的排版和間距
   - Commit: `10be1d8 - Enhance homepage design: Add fullscreen hero image and improve navbar visibility`

4. **UI 細節優化**
   - 修復了滾動指示器文字（"向下滾動"/"Scroll Down"）沒有正確置中的問題
   - 採用更可靠的 Flexbox 方法替代 transform/translate 方式進行居中
   - Commit: `ccb6f00 - fix: Center the scroll indicator text`

### 遇到的問題與解決方案

1. **滾動指示器文字置中問題**
   - **問題**：使用 `left-1/2 transform -translate-x-1/2` 方法無法準確地將文字置中
   - **解決方案**：
     - 重構了滾動指示器的 HTML 結構
     - 使用 `left-0 right-0 w-full flex justify-center items-center` 實現更可靠的居中效果
     - 為內部容器添加 `text-center` 類確保文字居中

2. **開發伺服器端口佔用問題**
   - **問題**：多次啟動開發伺服器後，端口 3000 和 3001 被佔用，導致新的伺服器必須使用其他端口
   - **解決方案**：
     - 使用 `lsof -i :3000,3001 | grep LISTEN` 查找佔用端口的進程
     - 使用 `kill -9 <進程ID>` 終止這些進程
     - 建議在啟動新的開發伺服器前，先確認並終止舊的伺服器進程

### 下一步計劃

1. **完善多語言支援**
   - 添加更多翻譯內容
   - 測試語言切換功能

2. **優化響應式設計**
   - 確保網站在所有裝置上都有良好的顯示效果
   - 特別關注手機版的導航體驗

3. **添加更多頁面內容**
   - 開始開發「關於我們」、「專案與研究」等頁面
   - 豐富首頁的內容

4. **改進動畫效果**
   - 添加更多滾動動畫
   - 優化頁面轉場效果
