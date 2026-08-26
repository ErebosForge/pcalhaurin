# AlhaurinPC

Static multilingual website (ES/EN) advertising local PC repair services in Alhaurín de la Torre and surrounding areas. Built with Hugo, hosted on OCI alongside AcaMaster, served via Cloudflare Tunnel.

Domain: `alhaurinpc.es` (pending registration)

## Prerequisites

```bash
# Windows (winget)
winget install Hugo.Hugo.Extended

# Ubuntu/Debian
sudo apt install hugo

# Arch
sudo pacman -S hugo

# Or download binary directly from:
# https://github.com/gohugoio/hugo/releases (choose "extended" version)
```

Verify installation: `hugo version` (requires v0.158.0+ for current config)

## Quick Start

```bash
# Run local dev server with live reload
cd site
hugo server

# Open http://localhost:1313

# Build static site (output in site/public/)
hugo --minify
```

## Development

```bash
# Edit content (one file per language):
#   site/content/_index.es.md  — All Spanish text
#   site/content/_index.en.md  — All English text

# Edit layout/design:
#   site/layouts/index.html    — Single page template

# Edit styles:
#   site/static/css/style.css

# Preview:
cd site && hugo server
```

## Deploy

```bash
cd site && hugo --minify
rsync -avz public/ user@server:/var/www/alhaurinpc/
```

Production served by Caddy behind Cloudflare Tunnel on OCI instance.

## Project Structure

```
alhaurinpc/
├── README.md              ← This file (not public)
├── DEVLOG.md              ← Development log (not public)
├── docs/                  ← Specs, prompts, research (not public)
│   └── spec.md
├── site/                  ← Hugo project root
│   ├── hugo.toml          ← Config (languages, metadata, URLs)
│   ├── content/
│   │   ├── _index.es.md   ← All Spanish text (YAML front matter)
│   │   └── _index.en.md   ← All English text
│   ├── layouts/
│   │   ├── index.html     ← Main page template
│   │   └── _default/
│   │       └── baseof.html
│   ├── static/
│   │   ├── css/style.css
│   │   ├── img/
│   │   └── favicon.ico
│   └── public/            ← Build output (gitignored, this is what gets deployed)
└── .gitignore
```
