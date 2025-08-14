# [Allen's Blog](https://blog.allenspace.dpdns.org/)

![Blog Desktop Screenshot](http://huangxuan.me/img/blog-desktop.jpg)

[User Manual 👉](_doc/Manual.md)

## 簡介

本項目是 Fork 自 [Hux Blog](https://huangxuan.me)，在原版的基礎上添加了 Mermaid 支援（Mermaid 8.0.0），修復了原版 blog 的 LaTeX 顯示問題，支援文章更新時間。參考自 [Elmagnifico's Blog](https://github.com/elmagnificogi/elmagnificogi.github.io)

本項目通過 Jekyll 在 GitHub Pages 上搭建 Blog 系統。Jekyll 是一個靜態網站生成器（Static Site Generator, SSG），它能將 Markdown、HTML、Liquid 模板等內容轉換成靜態網頁，Jekyll 會將你的文件內容加入你選擇主題的布局樣式中，最後產生屬於你的靜態部落格網站。

透過 Jekyll 建置的網站安全性高，因為沒有資料庫和伺服器端程式碼可被攻擊，透過 GitHub Pages 部署完全免費，且不用擔心 DDoS 攻擊。

## Planned Features

| **Feature**                      | 進度     |
| -------------------------------- | -------- |
| **添加深色模式**                 | 還沒做   |
| **添加返回頂部按鈕**             | 還沒做   |
| **更新 fontawesome-webfont 版本** | 還沒做   |

## 部署

登錄自己的 GitHub 帳號後 Fork 這個項目。

如何使用 GitHub Pages，如何快速配置請參考：https://youtu.be/YVj3JKMH9p8?si=DZ1mAXQKB6QApnef

更詳細的配置請參考：https://github.com/qiubaiying/qiubaiying.github.io

### 要修改以下檔案的內容

- ads.txt 的值替換成你自己的
- _config.yml 的 Google Analytics tracking ID 替換成你自己的
- head.html 中有一個

```html
<meta name="google-site-verification" content="xBT4GhYoi5qRD5tr338pgPM5OWHHIDR6mNg1a3euekI" />
```

替換這個 Google 網站管理員的識別標籤，會影響收錄

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

1. 使用*文字樣式*標題，如[這個範例](https://huangxuan.me/2019/09/08/spacemacs-workflow/)：

```yml
header-style: text 
```

2. 開啟 LaTeX 支援：

```yml
mathjax: true
```
詳細可以看這裡 
> http://github.elmagnifico.tech/2021/04/30/Typora-LaTex-Mathjax/

3. 開啟 Mermaid 8.0.0 圖表支援：

```yml
mermaid: true
```

啟用後，您就可以在文章中使用 Mermaid 語法來繪製流程圖、序列圖、甘特圖等各種圖表。

4. 添加更新時間：

```yml
update: 2023-12-01 10:30:00
```

使用 `update` 欄位可以記錄文章的最後更新時間。

## 鳴謝

本項目基於 Hux Pro 的項目修改，同時參考了 elmagnifico 的項目。

- https://github.com/huxpro/huxpro.github.io
- https://github.com/elmagnificogi/elmagnificogi.github.io

## License

Apache License 2.0.

Copyright (c) 2025-present Allen

Allen's Blog is derived from [Hux Pro (Apache License 2.0)](https://github.com/huxpro/huxpro.github.io) Copyright (c) 2015-present Huxpro
