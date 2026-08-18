# 個人網站 | Personal Portfolio

這是一個具備現代感設計的靜態個人網站（Portfolio），適合用來展示您的個人簡介、專案作品與聯絡方式。本專案包含了一個完整的主頁設計，以及針對常見 HTTP 狀態碼（如 404、500 等）所客製化的錯誤頁面。

## ✨ 特色功能 (Features)

- **現代化 UI 設計**：採用深色模式（Dark Mode）、鮮豔的漸層色彩以及毛玻璃（Glassmorphism）效果。
- **流暢的微動畫**：頁面滾動與元素互動時皆有平滑的過渡與動畫效果。
- **響應式網頁設計 (RWD)**：支援不同螢幕尺寸的裝置，提供良好的行動端體驗。
- **自訂狀態碼頁面**：內建齊全的 HTTP 狀態碼頁面（200, 201, 204, 301, 304, 400, 401, 403, 404, 500），確保訪客在遇到錯誤時仍能保持一致的使用者體驗並引導回首頁。

## 🛠️ 使用技術 (Technologies)

本專案為純靜態網頁，不依賴任何外部框架或函式庫：
- **HTML5**
- **CSS3** (純 CSS 撰寫的版面與動畫，不使用 Tailwind 或 Bootstrap)
- **Vanilla JavaScript** (處理平滑滾動等基本互動)

## 📂 檔案結構 (File Structure)

```text
/
├── index.html       # 網站主頁（首頁）
├── style.css        # 全域樣式表
├── 404.html         # 404 Not Found 錯誤頁面
├── 500.html         # 500 Internal Server Error 錯誤頁面
└── ...              # 其他狀態碼對應的頁面 (200.html, 403.html 等)
```

## 🚀 如何使用 (How to Use)

由於此網站是純靜態的，您可以透過以下兩種方式來預覽與部署：

### 1. 本地預覽
直接將程式碼下載至您的電腦，並使用瀏覽器（如 Chrome、Edge、Firefox）開啟 `index.html`，即可看到完整的網站畫面。建議您也可以使用 VS Code 的 **Live Server** 擴充功能來獲得更好的開發與即時預覽體驗。

### 2. 部署到 GitHub Pages (推薦)
若您想將此網站公開上線：
1. 將此專案推上您的 GitHub 儲存庫（Repository），並將儲存庫命名為 `<您的帳號>.github.io`。
2. 前往儲存庫的 **Settings** > **Pages**。
3. 將來源（Source）設定為 `main` 分支並儲存。
4. 幾分鐘後，您的網站就能透過 `https://<您的帳號>.github.io` 進行訪問。

## 📝 自訂內容 (Customization)

您可以隨意修改以下內容來符合您自己的需求：
- **個人資料**：請至 `index.html` 中修改 `<header>` 與 `<section id="about">` 中的文字。
- **作品集**：請至 `index.html` 中的 `<section id="projects">` 替換專案名稱、描述與技能標籤。
- **聯絡信箱**：請至 `index.html` 底部 `<section id="contact">` 更改 `mailto:` 內的 Email 地址。
- **樣式調整**：若需更換主色調或字體大小，可以修改 `style.css` 頂部的 CSS 變數（如 `--primary` 和 `--secondary`）。

## 📄 授權 (License)

此專案為開放原始碼，可自由使用與修改。
