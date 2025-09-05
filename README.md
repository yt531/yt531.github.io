# [Allen's Blog](https://blog.allenspace.de/)

![Blog Desktop Screenshot](http://huangxuan.me/img/blog-desktop.jpg)

[User Manual 👉](_doc/Manual.md)

## 簡介

本項目是 Fork 自 [Hux Blog](https://huangxuan.me)，在原版的基礎上添加了 Mermaid 支援（已升級至 Mermaid 10.9.0 ~~並支援自動深色模式切換~~），修復了原版 blog 的 LaTeX 顯示問題，支援文章更新時間。參考自 [Elmagnifico's Blog](https://github.com/elmagnificogi/elmagnificogi.github.io)

本項目通過 Jekyll 在 GitHub Pages 上搭建 Blog 系統。Jekyll 是一個靜態網站生成器（Static Site Generator, SSG），它能將 Markdown、HTML、Liquid 模板等內容轉換成靜態網頁，Jekyll 會將你的文件內容加入你選擇主題的布局樣式中，最後產生屬於你的靜態部落格網站。

透過 Jekyll 建置的網站安全性高，因為沒有資料庫和伺服器端程式碼可被攻擊，透過 GitHub Pages 部署完全免費，且不用擔心 DDoS 攻擊。

## Planned Features

| **Feature**                      | 進度     |
| -------------------------------- | -------- |
| **~~添加深色模式~~**                 | Done   |


## 部署

登錄自己的 GitHub 帳號後 Fork 這個項目。

如何使用 GitHub Pages，如何快速配置請參考：https://youtu.be/YVj3JKMH9p8?si=DZ1mAXQKB6QApnef

更詳細的配置請參考： [https://github.com/qiubaiying/qiubaiying.github.io/wiki](https://github.com/qiubaiying/qiubaiying.github.io/wiki/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B)

### 要修改以下檔案的內容

- _config.yml 的 Google Analytics tracking ID 替換成你自己的
- head.html 中有一個

```html
<meta name="google-site-verification" content="xBT4GhYoi5qRD5tr338pgPM5OWHHIDR6mNg1a3euekI" />
```

替換這個 Google 網站管理員的識別標籤，會影響收錄

### Giscus 評論系統設定

本項目使用 [Giscus](https://giscus.app/) 作為評論系統，基於 GitHub Discussions 提供互動功能。要為你的項目配置 Giscus，需要修改以下兩個文件：

#### 1. 修改 `_config.yml` 檔案

找到 `giscus` 區塊（約第 66 行），更新為你的倉庫資訊：

```yml
giscus:
  repo: your-username/your-repo-name # 替換為你的 GitHub 用戶名和倉庫名
  repo_id: YOUR_REPO_ID # 從 giscus.app 取得的倉庫 ID
  category: Comments # Discussion 分類名稱（可自訂）
  category_id: YOUR_CATEGORY_ID # 從 giscus.app 取得的分類 ID
  mapping: pathname # 識別文章的方式，建議保持 pathname
  strict: 0 # 使用嚴格識別模式（0=關閉，1=開啟）
  reactions_enabled: 1 # 啟用 emoji 反應（0=關閉，1=開啟）
  input_position: bottom # 輸入框位置（bottom 或 top）
```

#### 2. 修改 `js/giscus-setup.js` 檔案

找到第 24-27 行的 `giscusAttributes` 配置，更新為你的設定：

```javascript
"data-repo": "your-username/your-repo-name", // 替換為你的倉庫
"data-repo-id": "YOUR_REPO_ID", // 替換為你的 repo_id
"data-category": "Comments", // 替換為你的分類名稱
"data-category-id": "YOUR_CATEGORY_ID", // 替換為你的 category_id
```

#### 3. 設定步驟

1. 前往 [giscus.app](https://giscus.app/) 
2. 輸入你的 GitHub 倉庫（格式：`username/repo`）
3. 選擇頁面 ↔️ discussions 映射關係（建議選擇「Discussion 的標題包含頁面的 `pathname`」）
4. 選擇 Discussion 分類（建議新建一個 "Comments" 分類）
5. 複製生成的設定到上述兩個文件中

#### 4. 倉庫要求

- 倉庫必須是**公開的**
- 必須安裝 [giscus app](https://github.com/apps/giscus)
- 必須開啟 Discussions 功能（在倉庫的 Settings → General → Features 中啟用）

設定完成後，評論系統會自動適配網站的深色/淺色主題，深色模式使用 `dark_dimmed` 主題。

### Posts

文章存放在 `_posts/` 目錄下的 Markdown 文件。
文章的元數據以 YAML 格式的*前置內容*列出。
例如，[Hello 2015](https://huangxuan.me/2015/01/29/hello-2015/) 的前置內容如下：

```yml
---
layout:     post
title:      "Hello 2015"
subtitle:   " \"Hello World, Hello Blog\""
date:       2015-01-29 12:00:00
author:     "Hux"
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - Life
    - Meta
---
```

> 注意：`tags` 部分也可以寫成 `tags: [Life, Meta]` 的形式。

在引入 [Rake](https://github.com/ruby/rake) 之後，我們可以使用下面的命令來簡化文章創建：

```
rake post title="Hello 2015" subtitle="Hello World, Hello Blog"
```

這個命令會自動在 `_posts/` 目錄下生成一個類似於上面的示例文章。

#### 進階配置：

1. 開啟 LaTeX 支援：

```yml
mathjax: true
```
詳細可以看這裡 
> http://github.elmagnifico.tech/2021/04/30/Typora-LaTex-Mathjax/

2. 開啟 Mermaid 10.9.0 圖表支援：

```yml
mermaid: true
```

啟用後，您就可以在文章中使用 Mermaid 語法來繪製流程圖、序列圖、甘特圖、心智圖、時間線等各種圖表。

**新版本特色：**
- 自動適配深色/淺色主題
- 支援新圖表類型（心智圖、時間線等）
- 更好的效能和安全性
- 可通過 `_config.yml` 中的 `mermaid_version` 設定版本號

3. 添加更新時間：

```yml
update: 2023-12-01 10:30:00
```

使用 `update` 欄位可以記錄文章的最後更新時間。

4. 使用 CSS 漸層背景：

```yml
header-bg-css: "linear-gradient(to right, #1e3a8a, #3b82f6);"
```

使用 `header-bg-css` 欄位可以為文章頁面設定自訂的 CSS 背景樣式，支援漸層、純色或其他 CSS 背景屬性。當設定了此欄位時，會覆蓋 `header-img` 的背景圖片設定，讓你能夠創建更豐富的視覺效果。

常見的 CSS 背景樣式範例：
- 線性漸層：`"linear-gradient(45deg, #ff6b6b, #4ecdc4);"`
- 徑向漸層：`"radial-gradient(circle, #667eea, #764ba2);"`
- 純色背景：`"#2c3e50;"`
- 多重漸層：`"linear-gradient(135deg, #667eea 0%, #764ba2 100%);"`


### 使用Keynote

![](http://huangxuan.me/img/blog-keynote.jpg)

使用方法，在markdown的**前置內容**中加入：

```yml
---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

`iframe` 元素會自動調整大小以適應不同的外觀尺寸和設備方向。

由於大多數Keynote框架會阻止瀏覽器的預設滾動行為，因此設定了底部內留白來支援滾動，並提示使用者下方還有更多內容。

## 鳴謝

本項目基於 Hux Pro 的項目修改，同時參考了 elmagnifico 的項目。

- https://github.com/huxpro/huxpro.github.io
- https://github.com/elmagnificogi/elmagnificogi.github.io

## License

Apache License 2.0.

Copyright (c) 2025-present allen5218

Allen's Blog is derived from [Hux Pro (Apache License 2.0)](https://github.com/huxpro/huxpro.github.io) Copyright (c) 2015-present Huxpro
