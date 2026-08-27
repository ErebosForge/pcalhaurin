# PCAlhaurín

Static multilingual website (ES/EN) for local PC repair services in Alhaurín de la Torre and surrounding areas. Built with Hugo, containerized with Docker (Caddy Alpine), deployed via GitHub Actions to OCI, served via Cloudflare Tunnel.

- **Domain**: pcalhaurin.es
- **Brand**: PCAlhaurín
- **Repo**: github.com/ErebosForge/pcalhaurin

## Prerequisites

```bash
# Windows
winget install Hugo.Hugo.Extended

# Ubuntu/Debian
sudo apt install hugo

# Arch
sudo pacman -S hugo

# Or download from https://github.com/gohugoio/hugo/releases (extended version)
# Note: Hugo is only needed for local preview. Production builds run inside Docker.
```

Docker is required for production builds and local container testing.

## Quick Start

```bash
# Local preview with hot reload (requires Hugo installed)
cd site
hugo server
# → http://localhost:1313

# Local preview with Docker (no Hugo needed)
cd site && hugo --minify && cd ..
docker compose up -d --build
# → http://127.0.0.1:8080
```

## Development

```bash
# Edit content (one file per language):
#   site/content/_index.es.md  — All Spanish text
#   site/content/_index.en.md  — All English text

# Edit layout/design:
#   site/layouts/index.html    — Main page template
#   site/layouts/_default/baseof.html — HTML shell
#   site/layouts/_default/legal.html  — Legal page template

# Edit styles:
#   site/static/css/style.css

# Preview:
cd site && hugo server
```

## Deploy

Push to `main` triggers GitHub Actions:
1. Clones repo on OCI server
2. Docker multi-stage build: Hugo 0.165.0 builds site → Caddy serves result
3. Container serves internally on port 80 behind the shared Traefik → Cloudflare Tunnel

See `docs/deploy.md` for full setup instructions and secrets.

## Project Structure

```
pcalhaurin/
├── README.md                  ← This file (not public)
├── DEVLOG.md                  ← Development log (not public)
├── Dockerfile                 ← Multi-stage: Hugo build + Caddy serve
├── Caddyfile                  ← Caching, gzip, security headers
├── docker-compose.yml         ← Container on internal port 80
├── docs/
│   ├── spec.md                ← Site specification
│   └── deploy.md              ← Application deployment guide
├── .github/workflows/
│   └── deploy.yml             ← Application CI/CD only
├── site/                      ← Hugo project root
│   ├── hugo.toml              ← Config (languages, metadata, URLs)
│   ├── content/               ← ES/EN content and legal pages
│   ├── layouts/               ← Templates
│   └── static/                ← CSS and images
└── .gitignore
```