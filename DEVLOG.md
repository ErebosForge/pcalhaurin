# DEVLOG — PCAlhaurín

> Read this to recover context after a session break.

## Project Summary

**PCAlhaurín** — Static landing page for local PC repair services.
- Domain: pcalhaurin.es (registered, Cloudflare DNS active)
- Stack: Hugo → Docker (Caddy Alpine) → OCI server → Cloudflare Tunnel
- Languages: ES (primary), EN (expats)
- Target: 3-4 repairs/month from organic search + Google Business Profile
- Contact: WhatsApp (+34 614 47 99 22) as primary CTA, phone secondary

Located at: `F:\src\ErebosForge\alhaurinpc`
GitHub: `github.com/ErebosForge/pcalhaurin`

## Current State (2026-08-26)

### Done
- ✅ Market research & competitor analysis (TorrePhone, ZonaTech, Mr Micro, Cronoshare)
- ✅ Domain selected: pcalhaurin.es (SEO-optimized for local search)
- ✅ Domain registered at DonDominio, NS pointing to Cloudflare
- ✅ Cloudflare zone created (pcalhaurin.es), DNS setup via API workflow
- ✅ Hugo site: config (hugo.toml) with i18n ES/EN
- ✅ Content: Spanish text (services, prices, zones, contact, about, legal)
- ✅ Content: English text (full translation)
- ✅ Layout: single-page responsive template (mobile-first, 3 breakpoints)
- ✅ CSS: design tokens, copper/warm palette adapted from ErebosForge brand
- ✅ Typography: Inter (Google Fonts, 400/600/700)
- ✅ Visual effects: shimmer on H1, card hover lift, fade-in on scroll, WA pulse
- ✅ Gallery: 6 real photos in CSS-only horizontal scroll carousel
- ✅ SEO: title, meta description, canonical, hreflang, Open Graph, Twitter Card, geo metas
- ✅ GEO: Schema.org LocalBusiness JSON-LD with services, zones, hours, geo coords
- ✅ Accessibility: skip-link, landmarks, aria-labels, reduced-motion, alt texts
- ✅ Legal page: aviso legal + RGPD privacy policy (ES/EN)
- ✅ WhatsApp integration: wa.me click-to-chat with pre-filled message
- ✅ Sticky footer: WhatsApp + phone + legal link + dynamic copyright year
- ✅ Docker: multi-stage build (Hugo 0.165.0 + Caddy Alpine)
- ✅ Caddyfile: gzip, caching headers, security headers, www redirect
- ✅ CI/CD: GitHub Actions (clone on server → docker compose up --build)
- ✅ Setup-domains workflow: Cloudflare API for DNS CNAMEs + HTTPS + SSL + Brotli
- ✅ Tunnel config: pcalhaurin.es + www routed via Cloudflare Tunnel on OCI
- ✅ Traefik migration completed (all services behind reverse proxy on :80)

### Backlog
- [ ] First successful deploy (container running, site accessible)
- [ ] Google Business Profile setup
- [ ] Bing Webmaster Tools submission
- [ ] First 3-5 Google reviews
- [ ] Consider adding testimonials section (placeholder ready)

## Architecture

```
GitHub push to main
  → GitHub Actions: clone on OCI server
    → Docker multi-stage build:
      Stage 1: hugomods/hugo:0.165.0 → hugo --minify → public/
      Stage 2: caddy:2-alpine ← COPY public/ → serves on :80
    → Container on port 8080
      → Traefik reverse proxy on :80
        → Cloudflare Tunnel
          → https://pcalhaurin.es
```

## Key Decisions
- **Hugo over WordPress**: Zero runtime, zero maintenance, zero attack surface
- **Docker for prod**: Hugo version pinned in Dockerfile, not dependent on server install
- **Single-page**: All content on one page per language. No navigation complexity.
- **Content in front matter YAML**: Edit one .md file per language to change all text
- **WhatsApp as primary CTA**: Async, no calls at odd hours, pre-filled message
- **No email contact**: Owner doesn't read email regularly
- **pcalhaurin.es over alternatives**: Maximum SEO for "pc" + "alhaurín" local searches
- **Copper/warm palette**: Adapted from ErebosForge brand, lightened for local service audience
- **Prices as ranges**: Not "desde X" but "35-45€", more transparent and AI-citable
- **No Mac service**: Explicitly stated to filter unserviceable requests

## Services & Pricing
| Service | Price |
|---------|-------|
| Formateo y reinstalación | 35-45€ |
| Eliminación de virus | 25-35€ |
| Ampliación RAM/SSD (mano de obra) | 20-30€ |
| No arranca / pantalla azul | 25-40€ |
| WiFi y red | 20-30€ |
| Puesta a punto | 25-35€ |
| Desplazamiento a domicilio | +20€ |

## Zones Covered
Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana, Pizarra

## Key Files
| File | Purpose |
|------|---------|
| `site/content/_index.es.md` | All Spanish text (edit here) |
| `site/content/_index.en.md` | All English text (edit here) |
| `site/layouts/index.html` | Main page template |
| `site/static/css/style.css` | All styles (design tokens at top) |
| `Dockerfile` | Multi-stage Hugo + Caddy build |
| `docker-compose.yml` | Container config (port 8080) |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `.github/workflows/setup-domains.yml` | DNS + Cloudflare settings |
| `docs/deploy.md` | Deployment guide with secrets |
| `docs/spec.md` | Site specification |

## Port Allocation
| Port | Service |
|------|---------|
| 80 | Traefik (reverse proxy, all traffic) |
| 5000 | AcaMaster Web |
| 5001 | AcaMaster Saas |
| 7000 | AcaMaster API |
| 8080 | PCAlhaurín (this project) |
