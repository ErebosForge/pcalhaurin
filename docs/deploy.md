# Deployment Guide

## Architecture

```
GitHub (push to main)
  → GitHub Actions
    → hugo build (in runner)
    → rsync full project to server
    → docker compose up -d --build
      → Container: Caddy Alpine serves static files on :8080
        → Cloudflare Tunnel routes pcalhaurin.es → localhost:8080
          → Cloudflare handles SSL + CDN
```

## SSL

Cloudflare handles all SSL termination. The container only serves HTTP on port 80 (mapped to host :8080). No certificates needed on the server.

## GitHub Secrets Required

Add in: GitHub repo → Settings → Secrets and variables → Actions

| Secret | Value |
|--------|-------|
| `SSH_PRIVATE_KEY` | OCI SSH private key (same as AcaMaster) |
| `SERVER_HOST` | OCI instance IP |
| `SERVER_USER` | `ubuntu` |

## First-time Setup

### 1. Register domain
- Buy `pcalhaurin.es` at DonDominio
- Change nameservers to Cloudflare's

### 2. Cloudflare DNS
- Add zone `pcalhaurin.es` (free plan)
- Add CNAME records:
  ```
  CNAME  @    → <tunnel-id>.cfargotunnel.com  (Proxied)
  CNAME  www  → <tunnel-id>.cfargotunnel.com  (Proxied)
  ```

### 3. Cloudflare Tunnel
Edit `/etc/cloudflared/config.yml` on server, add before catch-all:
```yaml
- hostname: pcalhaurin.es
  service: http://localhost:8080
- hostname: www.pcalhaurin.es
  service: http://localhost:8080
```

Restart: `sudo systemctl restart cloudflared`

### 4. Server directory
```bash
sudo mkdir -p /opt/pcalhaurin
sudo chown ubuntu:ubuntu /opt/pcalhaurin
```

### 5. Push code
- Create repo, add secrets, push to main
- GitHub Actions builds, rsyncs, and starts the container

## Port allocation

| Service | Port |
|---------|------|
| AcaMaster Web | 5000 |
| AcaMaster Saas | 5001 |
| AcaMaster API | 7000 |
| **PCAlhaurín** | **8080** |

## Subsequent deploys

Push to `main`. Pipeline:
1. Hugo builds static files
2. Rsyncs entire project (Dockerfile + Caddyfile + public/) to server
3. Runs `docker compose up -d --build --force-recreate`
4. Health check verifies :8080 responds

## Rollback

```bash
# On server
cd /opt/pcalhaurin
git log --oneline  # (not a git repo on server, but you can re-deploy)
# Just re-push previous commit on GitHub and pipeline redeploys
```

## Local testing with Docker

```bash
cd F:\src\ErebosForge\alhaurinpc
cd site && hugo --minify && cd ..
docker compose up -d --build
# → http://127.0.0.1:8080
```
