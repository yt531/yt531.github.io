# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `bundle install` - Install Ruby dependencies
- `bundle exec jekyll serve` or `npm start` - Start local development server at localhost:4000
- `npm run dev` - Start development with live reloading (combines Grunt watch and Jekyll serve)

### Build & Asset Management
- `grunt` or `grunt default` - Build all assets (uglify JS, compile LESS to CSS, add banners)
- `grunt watch` - Watch for changes and auto-rebuild assets
- `grunt uglify` - Minify JavaScript files
- `grunt less` - Compile LESS files to CSS

### Content Creation
- `rake post title="Post Title" subtitle="Post Subtitle"` - Create new blog post with proper front matter

## Architecture

This is a Jekyll static site generator blog forked from Hux Blog with the following key features:

### Blog Structure
- **Posts**: Located in `_posts/` directory as Markdown files with YAML front matter
- **Layouts**: HTML templates in `_layouts/` (default.html, post.html, page.html, keynote.html)
- **Includes**: Reusable components in `_includes/` (navigation, sidebar, footer, etc.)
- **Assets**: CSS in `css/`, JavaScript in `js/`, images in `img/`

### Front Matter Configuration
Posts support these key front matter options:
- `layout: post` - Standard blog post layout
- `layout: keynote` - Special layout for HTML presentations with `iframe` parameter
- `header-img` - Header background image path
- `mathjax: true` - Enable LaTeX math rendering
- `mermaid: true` - Enable Mermaid 10.9.0 diagram support with automatic dark theme adaptation
- `catalog: true` - Enable table of contents
- `update` - Article last update timestamp
- `tags` - Post categorization

### Asset Pipeline
- **LESS**: Source files in `less/` compiled to `css/` via Grunt
- **JavaScript**: Source files minified and banners added via Grunt
- **Main files**: `less/hux-blog.less` → `css/hux-blog.css`, `js/hux-blog.js` → `js/hux-blog.min.js`

### Site Configuration
Key `_config.yml` settings:
- **Multilingual**: Supports English/Chinese content
- **Social**: GitHub, LinkedIn integration
- **Analytics**: Google Analytics and Disqus comments
- **PWA**: Service worker enabled for Progressive Web App features
- **Jekyll**: Uses kramdown markdown processor with syntax highlighting
- **Mermaid**: Version 10.9.0 with configurable version (`mermaid_version`) and automatic dark theme support
- **Theme**: `default_theme: "dark"` controls both site theme and mermaid diagram themes
- **RSS**: `RSS: true` enables RSS feed at `/feed.xml`
- **Sitemap**: `sitemap: true` enables XML sitemap at `/sitemap.xml`

### Special Features
- **Keynote Support**: Embed HTML presentations using iframe layout
- **Featured Tags**: Automatic tag cloud generation
- **Sidebar**: Dynamic sidebar with author info and social links
- **Search**: JSON-based search functionality
- **PWA**: Progressive Web App with service worker and manifest
- **Mermaid Diagrams**: Unified handling through `_includes/mermaid.html` with automatic theme switching and dynamic re-rendering support
- **RSS Feed**: Automatic RSS 2.0 feed generation for content syndication
- **XML Sitemap**: SEO-optimized sitemap generation for search engine indexing

### Mermaid Configuration
The blog uses a centralized mermaid configuration system:
- **Include File**: `_includes/mermaid.html` handles all mermaid initialization
- **Version Control**: Set version in `_config.yml` with `mermaid_version: "10.9.0"`
- **Theme Adaptation**: Automatically switches between `dark` and `default` themes based on site configuration
- **Dynamic Updates**: Global `updateMermaidTheme(isDark)` function for runtime theme switching
- **Supported Charts**: flowcharts, sequence diagrams, gantt charts, class diagrams, mindmaps, timelines, and more

### RSS & Sitemap Configuration
The blog includes automatic RSS and sitemap generation:

#### RSS Feed (`feed.xml`)
- **Location**: Available at `/feed.xml`
- **Format**: RSS 2.0 standard with full content
- **Content**: Latest 10 posts with titles, descriptions, publication dates
- **Features**: Includes post tags, categories, and permalinks
- **Control**: Enable/disable with `RSS: true/false` in `_config.yml`

#### XML Sitemap (`sitemap.xml`)
- **Location**: Available at `/sitemap.xml`
- **Format**: XML Sitemap 0.9 standard for search engines
- **Content**: All pages including homepage, static pages, and posts
- **Priority Scheme**:
  - Homepage: 1.0 (weekly updates)
  - About page: 0.9 (monthly updates)
  - Archive page: 0.8 (weekly updates)
  - Other static pages: 0.7 (monthly updates)
  - Blog posts: 0.6 (yearly updates)
- **Exclusions**: 404.html and offline.html pages are excluded
- **Control**: Enable/disable with `sitemap: true/false` in `_config.yml`
- **Implementation**: Plugin-free custom Jekyll template similar to RSS logic

Both systems use conditional rendering and will only generate content when their respective configuration flags are enabled.

When modifying posts, ensure proper YAML front matter format and follow existing conventions for tags, images, and metadata.