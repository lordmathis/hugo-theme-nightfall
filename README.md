# Nightfall

[![Netlify Status](https://api.netlify.com/api/v1/badges/27bf2d3e-412b-442b-b234-60dbac60e714/deploy-status)](https://app.netlify.com/sites/hugo-theme-nightfall/deploys)

Nightfall is a minimal dark theme for Hugo. [Demo](https://hugo-theme-nightfall.netlify.app)

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

For full example check `exampleSite/hugo.toml`

Add these params to your `hugo.toml`

```toml
[params]
user = "hello"
hostname = "gohugo.io"

  [params.author]
    name = "Mr Hugo"
    avatar = "/avatar.png"
    avatarSize = "size-m"
    email = "hugo@example.com"
    avatarFirst = false
```

### External Links

You can configure external links to open in new tabs by adding this parameter:

```toml
[params]
openLinksInNewTab = true
```

When enabled, all external links (links which using http(s) in the markdown-destination) will automatically open in a new tab. Internal links will continue to open in the same tab.


### Social links

You can also add social links. To use icons for social links, you also need to add the link to icon font to custom-head.html

```toml
[[params.social]]
key = 0
name = "github"
url = "https://github.com/gohugoio"
icon = "fa-brands fa-github"  # Add link to your icon font to `layouts/partials/custom-head.html`
target = "_blank" # Defines your target option in a-href. _blank for a new Tab for example.
aria = "GitHub Profile" # Define the aria label for accessibility like page reader - this is better for your SEO

[[params.social]]
key = 1
name = "twitter"
url = "https://www.example.com"

[[params.social]]
key = 2
name = "mastodon"
url = "https://www.example.com"
rel = "me"  # You can also add rel to social link

[[params.social]]
key = 3
name = "email"
url = "mailto:email@example.com"
```

### Color

You can customize post title and link color

```toml
[params.styles]
color = "orange"
```

Specify your own color with hex value or use one of the predefined colors (blue, orange, green or red). The default color is blue. Best contrast is provided by orange.

### Post metadata

Post metadata such as tags, published date, reading time, authors, and categories can be displayed on post pages. The theme provides flexible control over metadata display with both global and per-post settings.

#### Global Metadata Settings

Add these parameters to your `hugo.toml` to control metadata display site-wide:

```toml
[params]
# Global metadata display settings
showMetadata = true      # Master switch for all metadata display (default: true)
showPublishedDate = true # Show published date on post page (default: true)
showReadingTime = true   # Show reading time on post page (default: true)
showTags = true          # Show tags on post page (default: true)
showAuthors = true       # Show authors on post page (default: true)
showCategories = true    # Show categories on post page (default: true)

# Legacy settings (still supported for backward compatibility):
# published = true           # Use showPublishedDate instead (recommended)
# readingTime = true         # Use showReadingTime instead (recommended)
```

#### Per-Post Metadata Control

You can override any global setting for individual posts by adding the same parameters to the post's frontmatter:

```yaml
---
title: "My Post"
date: 2024-01-15
tags: ["hugo", "theme"]
categories: ["web development"]

# Override global settings for this post
showMetadata: true      # Master switch
showPublishedDate: true # Hide published date for this post
showReadingTime: true   # Hide reading time for this post
showTags: true          # Show tags
showAuthors: true       # Hide authors
showCategories: true    # Show categories
---
```

#### Setting Precedence

The metadata display follows a simple "false wins" approach:

1. Default behavior: All metadata is shown (true)
2. Any false setting hides the metadata
3. Master switch override: If showMetadata is false, no metadata is shown regardless of individual settings

#### Master Switch

The `showMetadata` setting acts as a master switch. If set to `false`, no metadata will be displayed regardless of other individual settings. This is useful for pages like "About" where you don't want any metadata shown.

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
