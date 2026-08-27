# DEVLOG — PCAlhaurín

> Read this to recover context after a session break.

## Project Summary

**PCAlhaurín** — Static landing page for local PC repair services.
- Domain: pcalhaurin.es (registered, Cloudflare DNS active)
- Stack: Hugo → Docker (Caddy Alpine) → OCI server → Cloudflare Tunnel
- Languages: ES (primary), EN (expats)
- Target: 3-4 repairs/month from organic search + Google Business Profile
- Contact: WhatsApp (+34 614 47 99 22) as primary CTA, phone secondary

Located at: `F:\src\ErebosForge\pcalhaurin`
GitHub: `github.com/ErebosForge/pcalhaurin`

## Current State (2026-08-27)

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
- ✅ First deploy successful — site live at https://pcalhaurin.es/
- ✅ SEO audit & improvements (2026-08-27):
  - robots.txt estático con directiva Sitemap (Cloudflare Managed lo sobreescribe si está activo)
  - Custom sitemap template: excluye /tags/ y /categories/ vacías, priority 1.0 para home
  - FAQ section: 6 preguntas SEO-targeted (cuánto cuesta, domicilio, tiempo, lento, Mac, cita)
  - Schema FAQPage JSON-LD completo
  - CTA mejorado: "Pide presupuesto gratis" (palabra "gratis" mejora CTR)
  - Hugo config: languageCode/languageName migrados a locale/label (arregla deprecations v0.158+)
- ✅ Accesibilidad & navegación agéntica (2026-08-27, fixes de Google Search Console):
  - Fix ARIA: quitado role="listitem" de article.service-card (inválido)
  - Fix ARIA: span.lang-switch → nav.lang-switch (span no admite aria-label)
  - Fix links: texto visible en enlace de idioma (antes podía quedar vacío)
  - Fix contraste: primary #B85C1A → #A65316 (ratio ~5.3:1 sobre blanco)
  - llms.txt creado: formato Markdown con H1, descripción, servicios y enlaces (spec llmstxt.org v2)
  - <link rel="describedby" href="/llms.txt"> en baseof.html
  - CSS FAQ: details/summary con +/− toggle
- ✅ CI/CD robustecido (2026-08-27):
  - Health check real: curl pcalhaurin.es, verifica HTTP 200 con retry (5 intentos)
  - Cross-check: verifica que acamaster.es sigue respondiendo después del deploy
  - Workflow falla ruidosamente (exit 1) si health check no pasa
  - Build antes de down (minimiza downtime)
  - Docker image tag corregido: base-0.165.0 (exts-0.165.0 no existía)
- ✅ PageSpeed Insights audit & fixes (2026-08-27, puntuaciones pre-fix: Perf 92/99, A11y 96/89, BP 100, SEO 92):
  - Fix contraste: primary #A65316 → #8E4713 (ratio 5.7:1, pasa WCAG AA normal text)
  - Fix contraste: text-muted #444444 → #3D3D3D (ratio 10.4:1 sobre bg)
  - Fix contraste: CTA #C05F15 → #A65316 (4.8:1, pasa AA large text para botones)
  - Fix ARIA: gallery role="group" → role="region" con aria-label (aria-roledescription válido en region)
  - Fix link-name: eliminado aria-label redundante de nav WhatsApp link (el texto visible basta)
  - Fix link-name: eliminado aria-label="WhatsApp" de footer link (visible text "💬 WhatsApp" suficiente)
  - Fix legal page: span.lang-switch → nav.lang-switch (span no soporta aria-label)
  - Font loading optimizado: preload + media="print" trick (Google Fonts no bloquea render)
  - Shimmer gradient adaptado a nueva paleta de color (#D4844A)

### Backlog
- [ ] Desactivar Cloudflare Managed robots.txt (Security → Bots → Content Signals) — PageSpeed lo reporta como fallo
- [ ] Google Search Console: enviar sitemap y solicitar indexación de URL principal
- [ ] Google Business Profile setup
- [ ] Bing Webmaster Tools submission
- [ ] First 3-5 Google reviews
- [ ] Consider adding testimonials section (placeholder ready)
- [ ] Renombrar carpeta local alhaurinpc → pcalhaurin (solo cosmético, no afecta prod)
- [ ] Considerar self-hosting de Inter font (elimina dependencia de Google Fonts, mejora FCP móvil)
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
