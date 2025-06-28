# Nightfall Enhanced

[![Netlify Status](https://api.netlify.com/api/v1/badges/27bf2d3e-412b-442b-b234-60dbac60e714/deploy-status)](https://app.netlify.com/sites/hugo-theme-nightfall/deploys)

Nightfall Enhanced is a feature-rich dark theme for Hugo with custom enhancements including social media integration, Konami code easter eggs, and advanced styling options. [Demo](https://hugo-theme-nightfall.netlify.app)

## Enhanced Features

- **Dynamic Theme Colors**: Choose from preset colors or use custom hex values
- **Avatar Support**: Circular avatar image with configurable sizing
- **Social Media Integration**: Font Awesome icons with hover effects and custom styling
- **Comment System**: Cusdis integration with dark theme support
- **Konami Code Easter Egg**: Hidden retro terminal mode (↑↑↓↓←→←→BA)
- **Enhanced Navigation**: Current page highlighting and hover effects
- **List Display Options**: Choose between full excerpts or minimal title/date/tags
- **SEO Optimized**: Open Graph, Twitter Cards, JSON-LD structured data
- **Modern Web Standards**: Sitemap, robots.txt, humans.txt generation

![Hugo Theme Nightfall](https://raw.githubusercontent.com/LordMathis/hugo-theme-nightfall/main/images/screenshot.png)
![Hugo Theme Nightfall Posts](https://raw.githubusercontent.com/LordMathis/hugo-theme-nightfall/main/images/screenshot_2.png)
![Hugo Theme Nightfall Single](https://raw.githubusercontent.com/LordMathis/hugo-theme-nightfall/main/images/screenshot_3.png)

## Get the theme

Install [Hugo](https://gohugo.io/installation/) and **[dart-sass](https://gohugo.io/functions/resources/tocss/#dart-sass)**.

Import as [hugo module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) in `hugo.toml`:
```toml
[module]
[[module.imports]]
  path = 'github.com/LordMathis/hugo-theme-nightfall'
```

OR

Import manually:
1. `git clone https://github.com/LordMathis/hugo-theme-nightfall themes/nightfall`
2. Add `theme = "nightfall"` in your `hugo.toml`:

## Configuration

For a complete example, see `exampleSite/hugo.enhanced.toml`

### Migration Notice

The parameter structure has been refactored for clarity:

**Deprecated (still supported with fallbacks):**
- `sitedescription` → Use `description` (site-level)
- `author.description` → Use `author.bioHtml`
- `author.tagline` → Use `author.bio`

**New structure:**
- Site-level: `description` for meta tags, `site.tagline` for site catchphrase
- Author-level: `author.bio` (plain text), `author.bioHtml` (rich HTML)

### Basic Setup

```toml
baseURL = 'https://yoursite.com/'
languageCode = 'en-us'
title = "Your Site Title"

[params]
  user = "hello"                      # Terminal prompt user
  hostname = "yoursite.dev"           # Terminal prompt hostname
  description = "Your site meta description"  # Site description for meta tags
  readingTime = true                  # Show reading time on posts
  published = true                    # Show published date on posts
  listStyle = "default"               # "default" or "minimal" for post lists

  # Site information
  [params.site]
    tagline = "Your site tagline"     # Short site catchphrase

  # Author information
  [params.author]
    name = "Your Name"
    bio = "Your plain text bio"       # Plain text bio (primary)
    bioHtml = "Your <em>HTML</em> bio with markup"  # Rich HTML bio for web display
    email = "your@email.com"
    
  # Custom ASCII art for HTML comments (optional)
  # If not set, defaults to original px4n ASCII art
  customAsciiArt = """
  ╔══════════════════════════════════════╗
  ║                                      ║
  ║    Your Custom ASCII Art Here        ║
  ║                                      ║
  ╚══════════════════════════════════════╝"""
    avatar = "/img/avatar.png"        # Path to avatar image
    avatarSize = "size-xl"            # Avatar size: size-xs, size-sm, size-lg, size-xl, size-2xl
    avatarFirst = true                # Show avatar above name
    twitter = "yourusername"          # Twitter handle (without @)
    github = "yourusername"           # GitHub username
    linkedin = "yourusername"         # LinkedIn username
    sourceRepo = "https://github.com/yourusername/repo"  # Source code repo

  # Theme colors
  [params.styles]
    color = "blue"                    # blue, orange, green, red, or hex value

  # SEO configuration
  [params.seo]
    themeColor = "#80AADD"           # Browser theme color
```

### Social Media Links

Social links support Font Awesome icons with hover effects:

```toml
[[params.social]]
  key = 0
  name = "GitHub"
  url = "https://github.com/yourusername"
  target = "_blank"
  aria = "GitHub Profile"
  icon = "fa-brands fa-github fa-xl"
  style = "color: #24292e"

[[params.social]]
  key = 1
  name = "Twitter"
  url = "https://twitter.com/yourusername"
  target = "_blank"
  aria = "Twitter Profile"
  icon = "fa-brands fa-x-twitter fa-xl"
  style = "color: #1da1f2"

[[params.social]]
  key = 2
  name = "LinkedIn"
  url = "https://linkedin.com/in/yourusername"
  target = "_blank"
  aria = "LinkedIn Profile"
  icon = "fa-brands fa-linkedin fa-xl"
  style = "color: #0a66c2"

# Text-only links (no icon)
[[params.social]]
  key = 3
  name = "Portfolio"
  url = "https://yourportfolio.com"
  target = "_blank"
  aria = "Portfolio"
```

### Comment System (Cusdis)

```toml
[params.cusdis]
  enable = true
  app_id = "your-cusdis-app-id"      # Get from Cusdis dashboard
  host = "https://cusdis.com"
```

To disable comments on specific posts, add to front matter:
```yaml
disableComments: true
```

### Theme Colors

Choose from presets or use custom colors:

- **Presets**: `blue` (default), `orange`, `green`, `red`
- **Custom**: Any hex value like `#FF6B35`

```toml
[params.styles]
  color = "#FF6B35"  # Custom hex color
```

## Special Features

### Konami Code Easter Egg

Enter the famous Konami code (↑↑↓↓←→←→BA) to activate retro terminal mode! The entire site transforms into a green phosphor CRT terminal with scanline effects.

### List Display Modes

Choose how your blog/project lists appear:

```toml
[params]
  listStyle = "minimal"  # Shows only title, date, and tags
  # OR
  listStyle = "default"  # Shows full excerpts (original behavior)
```

### Avatar Display

Configure your profile avatar:

```toml
[params.author]
  avatar = "/img/avatar.png"
  avatarSize = "size-xl"           # size-xs, size-sm, size-lg, size-xl, size-2xl
  avatarFirst = true               # Show above name (false = show beside)
```

### Terminal-Style Header

The header includes a customizable terminal prompt:

```toml
[params]
  user = "hello"                   # Username in terminal prompt
  hostname = "yoursite.dev"        # Hostname in terminal prompt
```

Displays as: `hello@yoursite.dev ~ $`

### Enhanced Social Links

Social links feature advanced hover effects:
- **Icons**: Scale up, float, and glow on hover
- **Text**: Color change and glow effects
- **Brand Colors**: Automatic brand-specific glowing

### Post Features

Add these to your post front matter:

```yaml
---
title: "Your Post Title"
cover: "/img/post-cover.jpg"     # Cover image
lastmod: 2024-01-15              # Last modified date
disableComments: true            # Disable comments for this post
---
```

### Post metadata

Post metadata such as tags, published date and reading time are rendered on post pages. You can turn off showing published date and reading time globally in `[params]` section of your config

```toml
[params]
published = false
readingTime = false
```

You can also disable metadata on a specific page by adding `showMetadata = false` to front matter.

### Description

To add a site wide description, add `sitedescription` to `hugo.toml`. For example:
```toml
[params]
sitedescription = 'Your website description'
```

You can also add a description to individual posts in you website by adding `description` to the front matter. For example:
```
+++
title =  'This is the post title'
draft = false
date = 2024-01-23
description = 'This is the description'
+++
```
### Menu

To add a menu item add `[[menu.header]]` item to `hugo.toml`. For example:

```toml
[menu]
  [[menu.header]]
    name = "posts"
    weight = 0
    url = "/posts"
```

### Custom Head

To use custom icons, css, js or other resources create `layouts/partials/custom-head.html` and add your links there.

### Custom footer

You can customize the text displayed in footer with `footerHtml` in `[params]` section. The value will be rendered inside `<span>` tag. For example:

```toml
[params]
footerHtml = 'CC-0, Built with <a href="https://gohugo.io" class="footerLink">Hugo</a> and <a href="https://github.com/LordMathis/hugo-theme-nightfall" class="footerLink">Nightfall</a> theme'
```
