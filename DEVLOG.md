# DEVLOG — AlhaurinPC

> Read this to recover context after a session break.

## Project Summary

**AlhaurinPC** — Static landing page for local PC repair services.
- Domain: alhaurinpc.es (pending)
- Stack: Hugo (static site generator) → HTML/CSS → Caddy on OCI
- Languages: ES (primary), EN (expats)
- Target: 3-4 repairs/month from organic search + Google Business Profile

Located at: `F:\src\ErebosForge\alhaurinpc`

## Current State

### Done
- ✅ Market research & competitor analysis
- ✅ Domain selection (alhaurinpc.es)
- ✅ Project scaffolded (README, DEVLOG, docs, Hugo structure)

### Backlog
- [ ] Register domain (alhaurinpc.es, DonDominio)
- [ ] Hugo site: config (hugo.toml) with i18n ES/EN
- [ ] Content: Spanish text (services, prices, zones, contact)
- [ ] Content: English text
- [ ] Layout: single-page responsive template (mobile-first)
- [ ] CSS: clean, professional, lightweight
- [ ] SEO: meta tags, Open Graph, sitemap, robots.txt
- [ ] Schema.org LocalBusiness JSON-LD
- [ ] Deploy: Cloudflare Tunnel config on OCI server
- [ ] Google Business Profile setup
- [ ] Bing Webmaster Tools submission
- [ ] First 3-5 Google reviews

## Key Decisions
- **Hugo over WordPress**: Zero runtime, zero maintenance, zero attack surface
- **Single-page**: All content on one page per language. No navigation complexity.
- **Content in front matter YAML**: Edit one .md file per language to change all text
- **No Docker in prod**: Static files served directly by Caddy. Hugo only runs at build time (CI or local).
