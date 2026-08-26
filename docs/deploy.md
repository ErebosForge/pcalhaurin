# Deployment Guide

## Architecture

```
GitHub (push to main)
  → GitHub Actions (hugo build + rsync)
    → OCI Server (static files in /var/www/pcalhaurin)
      → Caddy (serves files, caching headers, gzip)
        → Cloudflare Tunnel (ingress, SSL, CDN)
          → pcalhaurin.es (public)
```

## GitHub Secrets Required

Add these in: GitHub repo → Settings → Secrets and variables → Actions

| Secret | Value |
|--------|-------|
| `SSH_PRIVATE_KEY` | Contents of the OCI SSH private key (same one used for AcaMaster) |
| `SERVER_HOST` | OCI instance public IP or Cloudflare Tunnel address |
| `SERVER_USER` | SSH username on OCI (e.g. `ubuntu`) |

## First-time Setup

### 1. Register domain
- Register `pcalhaurin.es` at DonDominio
- Point nameservers to Cloudflare

### 2. Cloudflare DNS
- Add zone `pcalhaurin.es`
- Add CNAME records pointing to the existing tunnel:
  - `pcalhaurin.es` → `<tunnel-id>.cfargotunnel.com` (proxied)
  - `www.pcalhaurin.es` → `<tunnel-id>.cfargotunnel.com` (proxied)

### 3. Server setup (run once)
```bash
ssh ubuntu@<server>
bash /tmp/setup-server.sh  # or copy infra/setup-server.sh and run it
```

This creates:
- `/var/www/pcalhaurin/` (web root)
- Caddy site config with caching headers
- Instructions for Cloudflare Tunnel ingress rule

### 4. Cloudflare Tunnel ingress
Edit `/etc/cloudflared/config.yml` on the server and add before the catch-all:
```yaml
- hostname: pcalhaurin.es
  service: http://localhost:80
- hostname: www.pcalhaurin.es
  service: http://localhost:80
```

Then: `sudo systemctl restart cloudflared`

### 5. GitHub repo
- Create repo at `github.com/Dezemerel/pcalhaurin` (or ErebosForge org)
- Add the 3 secrets above
- Push code
- GitHub Actions will build and deploy automatically

## Subsequent deploys

Just push to `main`. The pipeline handles everything:
1. Checks out code
2. Installs Hugo
3. Builds with `hugo --minify`
4. Rsyncs `site/public/` to server
5. Verifies files landed correctly

## Rollback

If something goes wrong:
```bash
# On the server, the previous version is gone (rsync --delete).
# Re-deploy any previous commit:
git revert HEAD
git push
# Or manually re-trigger the workflow on a previous commit
```

For a static site with no state, rollback = re-deploy old content. Takes <30 seconds.
