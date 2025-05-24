# 高效能運算協會網站規格書 v1.0  
Taiwan High Performance Computing Education Association Website Specification v1.0  
_發行日 / Issued: 2025-05-21_

---

## 1. 網站定位與技術架構  
### 1.1 目標
- 提供協會形象、專案成果、招募會員、未來捐款管道與資訊發佈。
- 支援中英文雙語。
- RWD 響應式設計（電腦/平板/手機），手機版有收合選單。
- 架設於 GitHub Pages，純靜態網頁，直接 HTML/CSS/JS（建議可用 Tailwind CSS、Vanilla JS 或簡易 Bootstrap）。

### 1.2 目標用戶
- 學界、產業界、對 HPC/IC 教育有興趣的師生、專業人士、潛在贊助單位。

### 1.3 維護方式
- 內容直接於 HTML 或 Markdown 編輯，無 CMS 後台，設計結構單純。
- 目錄建議（可依開發流程調整）：
    ```
    /index.html
    /en/index.html
    /about/
    /about/mission.html
    /about/board.html
    /about/history.html
    /about/annual-report.html
    /about/partners.html
    /projects/
    /projects/blackbear.html
    /projects/acalsim.html
    /education/
    /education/features.html
    /education/acalsim-course.html
    /news/
    /join-us.html
    /donate.html
    /assets/（圖片、Logo、Icon等）
    /css/
    /js/
    ```

---

## 2. 網站色彩規劃（含色盲友善）
### 2.1 主色建議（參考提供配色）
- **橘色 #CD5C08**（強調色，用於 CTA）
- **米白 #FFF5E4**（背景或區塊分隔）
- **淺綠 #C1D8C3**（標題/區塊/卡片背景）
- **灰綠 #6A9C89**（按鈕、Footer、資訊區）
- 補充色建議：**深藍 #29434e**、**深灰 #3a3a3a**（文字、細節）

### 2.2 CTA 按鈕色建議
- 「Join Us」使用 #CD5C08（橘）
- 其它（如 Donate）可用 #6A9C89（灰綠）或白底配橘邊
- 色盲友善：上色採高對比設計（橘與灰綠不容易混淆，並避免綠紅色系直接相鄰），文字/底色對比度大於4.5:1，通過 WCAG 2.1 AA 標準。

---

## 3. 導覽列（Navbar）與下拉選單  
**以下為全站皆有之全域導覽列，支援中英文切換，手機版為 Hamburger Menu 可展開：**

| 中文           | 英文           | 下拉選單內容              |
|----------------|----------------|--------------------------|
| 首頁           | Home           | 加入會員（Join Us）<br>贊助我們（Donate） |
| 關於我們       | About Us       | 使命（Mission）<br>理監事成員（Board）<br>歷史（History）<br>年度報告（Annual Report）<br>合作夥伴（Partners） |
| 專案與研究     | Projects & Research | BlackBear 開源計畫（BlackBear Project）<br>ACALSim 模擬平台（ACALSim Platform） |
| 教育培訓       | Education & Training | 課程特色（Course Features）<br>ACALSim 課程（ACALSim Courses） |
| 最新消息       | News           | 無下拉                    |
| Join Us（CTA 按鈕，右側，連至加入會員頁） | Join Us (CTA button) | 無下拉 |

- **Logo** 永遠置左，點擊回首頁。
- 語言切換（中文/英文）於 Navbar 右上角，用旗標或簡碼顯示。
- CTA「Join Us」右側顯著設計，連到 /join-us.html。
- 首頁的下拉選單僅有「加入會員」「贊助我們」兩項，皆為獨立頁面。

---

## 4. 首頁（Home）內容區塊建議

1. **Hero Banner**  
　- 主視覺（背景圖/協會標誌/標語/一段簡介）
2. **協會簡介（One-liner）**  
　- TWHPCEdu 致力於培育具備理論與實務能力的 HPC 與 IC 設計人才，連結學界與產業需求。
3. **開放研究 / 重點專案 Highlight**  
　- 各專案卡片（如 BlackBear、ACALSim）
4. **最新消息 / 活動**  
　- 列舉幾則近期動態，可連到 News 頁
5. **合作夥伴 Logo 牆（Sponsors/Partners）**  
　- Logo Grid，初期可用 placeholder 圖，未來動態增補
6. **FAQ（常見問答）**  
　- 協會服務對象、如何加入、聯絡方式等
7. **強調卡片區**  
　- 高亮重要頁面/活動，採卡片式設計，利於視覺區隔
8. **Footer**  
　- 詳見下一節

---

## 5. Footer 設計

1. **協會簡介 One-liner**  
　TWHPCEdu 致力於培育具備理論與實務能力的 HPC 與 IC 設計人才，連結學界與產業需求。  
2. **聯絡方式**  
　Email: contact@twhpc.org  
3. **快速連結**  
　首頁、關於我們、最新消息  
4. **社群媒體連結**  
　Facebook、LinkedIn、GitHub（icon）
5. **隱私權政策/使用者條款**  
　依台灣個資法/歐盟 GDPR 預設簡易頁（靜態內容）
6. **捐款/會員連結 CTA**  
7. **版權聲明**  
　© 2025 Taiwan High Performance Computing Education Association
8. **配色**  
　建議以 #6A9C89、#C1D8C3 做底色，內容高對比

---

## 6. 其它技術與設計規範

- 響應式設計（支援電腦/平板/手機，Menu 行為如上）
- SEO 基礎標籤、Open Graph/社群 metadata
- Google Analytics 嵌入（如提供追蹤碼）
- 支援圖片延遲載入
- 導航結構建議用原生 <nav> 元素實作
- 英文/中文內容獨立檔案，預留 i18n 結構

---

## 7. Sitemap v1.0（中英）

```
/
├── 首頁 (Home)
│   ├── Join Us（加入會員）/join-us.html
│   ├── Donate（贊助我們）/donate.html
│   ├── Hero Banner
│   ├── 協會簡介
│   ├── 開放研究/重點專案
│   ├── 最新消息
│   ├── 合作夥伴 logo
│   ├── FAQ
│   └── 強調卡片
├── 關於我們 (About Us)
│   ├── 使命（Mission）/about/mission.html
│   ├── 理監事成員（Board）/about/board.html
│   ├── 歷史（History）/about/history.html
│   ├── 年度報告（Annual Report）/about/annual-report.html
│   └── 合作夥伴（Partners）/about/partners.html
├── 專案與研究 (Projects & Research)
│   ├── BlackBear 開源計畫 /projects/blackbear.html
│   └── ACALSim 模擬平台 /projects/acalsim.html
├── 教育培訓 (Education & Training)
│   ├── 課程特色 /education/features.html
│   └── ACALSim 課程 /education/acalsim-course.html
├── 最新消息 (News) /news/index.html
├── Join Us（加入會員）/join-us.html（右側 CTA 按鈕）
└── Footer
```

---

## 8. 補充與後續

- 本 v1.0 依據 2025-05-21 會議確認需求整理，若有重大變動請以修訂版號（v1.1, v2.0...）追蹤。
- 可依實際內容與版型微調頁面順序、細節。
- 若後續有 Logo/品牌字體/圖片素材、GA 追蹤碼、英文正式名稱等補充，請隨時提供。
