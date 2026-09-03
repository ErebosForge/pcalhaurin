# PCAlhaurín

Static multilingual website (ES/EN) for local PC repair services in Alhaurín de la Torre and surrounding areas. Built with **Astro** (static output), containerized with Docker/Podman (Caddy Alpine), deployed via GitHub Actions to OCI, served via the shared Traefik → Cloudflare.

- **Domain**: pcalhaurin.es
- **Brand**: PCAlhaurín
- **Repo**: github.com/ErebosForge/pcalhaurin

## Prerequisites

- **Node.js 22+** and npm (for local development and preview).
- **Docker / Podman** for production builds and local container testing.

Node is only needed for local preview. Production builds run inside the image.

## Quick Start

```bash
# 1. Install dependencies
cd site-astro
npm install

# 2. Local dev server with hot reload (edit files, browser updates live)
npm run dev
# → http://localhost:4321

# 3. Production build (static HTML into site-astro/dist/)
npm run build

# 4. Preview the built output exactly as it will be served
npm run preview
```

Run a browser-accessible local preview using the same multi-stage image, without requiring the production Traefik network:

```bash
# From the repo root (not site-astro/)
docker compose -p pcalhaurin-local -f docker-compose.local.yml up --build -d
# → http://127.0.0.1:8080  (Caddy serves the built site on the loopback port)

docker compose -p pcalhaurin-local -f docker-compose.local.yml logs -f  # follow logs
docker compose -p pcalhaurin-local -f docker-compose.local.yml down     # stop and remove
```

The root `docker-compose.yml` remains the production-oriented configuration. It
expects the external `proxy` network and Traefik to provide ingress, so it is not
the normal local-browser command.

## Development

### Where the text lives (edit these to change copy)

All site copy is centralised in **two files**, one per language:

```
site-astro/src/data/es.ts    — All Spanish text (home, supporting pages, services, FAQ, zones, contact, UI strings)
site-astro/src/data/en.ts    — All English text (same shape)
site-astro/src/data/types.ts — The content schema. If you add/rename/remove a field,
                                TypeScript reports it at build time (validation Hugo lacked).
```

You do **not** need to touch templates to edit text — only `es.ts` / `en.ts`.

### Layout and design

```
site-astro/src/layouts/BaseLayout.astro     — HTML shell: <head>, SEO/OG/Twitter, hreflang,
                                               canonical, two-level nav, sticky footer,
                                               floating WhatsApp button
site-astro/src/components/Home.astro         — Home body (hero, services, gallery, FAQ, zones,
                                               about, contact) + LocalBusiness/FAQPage JSON-LD
site-astro/src/components/InfoPage.astro     — Reusable localized supporting-page body with
                                               service, zone, process, and contact sections
site-astro/src/components/WhatsAppIcon.astro — Reusable WhatsApp SVG
site-astro/src/pages/                        — Routes: home, services, home visits, process,
                                               contact, and legal pages in ES/EN
```

Styles and static assets (served as-is from `public/`):

```
site-astro/public/css/style.css              — Design tokens and styles
site-astro/public/{img,fonts}/               — Images and self-hosted Inter fonts
site-astro/public/{robots.txt,llms.txt,sitemap.xml,favicon.svg}
```

Routing mirrors the previous setup: **ES at the root and Spanish slugs; EN under `/en/`**.
The public route pairs are `/` ↔ `/en/`, `/servicios/` ↔ `/en/services/`,
`/a-domicilio/` ↔ `/en/home-visits/`, `/como-trabajamos/` ↔ `/en/how-we-work/`,
`/contacto/` ↔ `/en/contact/`, and `/legal/` ↔ `/en/legal/`.
All pages use directory-style URLs and reciprocal canonical/hreflang metadata.

### Common tasks

- **Change a price / description / FAQ answer:** edit the relevant entry in
  `src/data/es.ts` and `src/data/en.ts`.
- **Add a service:** append an object `{ title, desc, price }` to the `services`
  array in both `es.ts` and `en.ts`. It appears in the grid and in the
  `LocalBusiness` JSON-LD automatically.
- **Add an FAQ:** append `{ q, a }` to the `faq` array in both languages. It also
  feeds the `FAQPage` JSON-LD automatically.
- **Add a coverage zone:** append to the `zones` array in both languages.
- **Edit a supporting page:** update the matching `pages.services`,
  `pages.homeVisits`, `pages.howWeWork`, or `pages.contact` object in both locale
  files. The route wrappers and `InfoPage.astro` remain reusable.
- **Update the sitemap:** `public/sitemap.xml` is a static file containing 12
  public URLs. If you add a page, add its localized `<url>` entry and reciprocal
  `xhtml:link` alternates there too.

### Debugging

- `npm run dev` shows type/schema errors in the terminal and browser overlay.
- `npm run build` fails loudly on a missing/mistyped content field (thanks to
  `types.ts`) — run it before committing.
- To reproduce a production-only issue, build the container (`docker compose up
  --build`) rather than `npm run preview`, since the container is what ships.

## Deploy

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`):

1. Clones the repo on the OCI server at the exact commit.
2. Docker/Podman multi-stage build: **Node builds the Astro site → Caddy serves `dist/`**.
3. Container serves internally on port 80 behind the shared Traefik → Cloudflare.
4. Health-checks `https://pcalhaurin.es/` through local Traefik.

See `docs/deploy.md` for full setup instructions and secrets.

## Project Structure

```
pcalhaurin/
├── README.md                  ← This file (not public)
├── DEVLOG.md                  ← Development log (not public)
├── Dockerfile                 ← Multi-stage: Node (Astro build) + Caddy serve
├── Caddyfile                  ← Serves /srv, gzip, cache + security headers
├── docker-compose.yml         ← Container on internal port 80, Traefik labels
├── docs/
│   ├── spec.md                ← Site specification
│   └── deploy.md              ← Application deployment guide
├── .github/workflows/
│   └── deploy.yml             ← Application CI/CD only
├── site-astro/                ← Astro project root
│   ├── astro.config.mjs       ← Static output, site URL, directory URLs
│   ├── package.json
│   ├── src/
│   │   ├── data/              ← es.ts / en.ts (all copy) + types.ts (schema)
│   │   ├── layouts/           ← BaseLayout.astro
│   │   ├── components/        ← Home.astro, InfoPage.astro, WhatsAppIcon.astro
│   │   └── pages/             ← home, services, home visits, process, contact, legal (ES/EN)
│   └── public/                ← css, img, fonts, robots, llms, sitemap, favicon
└── .gitignore
```

> Migration note: the site was migrated from Hugo to Astro (2026-09). The former
> Hugo project (`site/`) has been removed; the Astro project under `site-astro/`
> is the single source. The production Docker build was verified locally (public
> pages 200; docs/source paths 404 — only the built site is served).
