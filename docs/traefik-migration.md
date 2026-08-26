# Infrastructure Migration: Traefik Reverse Proxy

> Feed this file to a new Kiro CLI session to continue the work.
> Start with: kiro-cli chat --trust-all-tools
> Then: paste or reference this file for full context.

## Objective

Migrate the ErebosForge OCI server from "one port per container" to a centralized Traefik reverse proxy. All containers communicate over an internal Docker network. Only Traefik exposes port 80 to the host. Cloudflare Tunnel points all hostnames to localhost:80.

## Current State

Server: Oracle Cloud Infrastructure, ARM (2 OCPU / 12GB RAM), Ubuntu 24.04
Access: SSH key at `F:/.secrets/ssh/oracleCloud ssh-key-2026-07-08.key`, user `ubuntu`
Tunnel config: `/etc/cloudflared/config.yml`

### Running services

| Service | Container port → Host port | Domain |
|---------|---------------------------|--------|
| AcaMaster Web | :80 → :5000 | acamaster.es |
| AcaMaster Saas | :80 → :5001 | app.acamaster.es |
| AcaMaster API | :80 → :7000 | api.acamaster.es |
| AcaMaster DB | :5432 (internal only) | — |
| AcaMaster Dev Web | :80 → :6000 | dev.acamaster.es |
| AcaMaster Dev Saas | :80 → :6001 | app.dev.acamaster.es |
| AcaMaster Dev API | :80 → :8000 | api.dev.acamaster.es |
| PCAlhaurín | :80 → :8080 | pcalhaurin.es |

### Current tunnel config (`/etc/cloudflared/config.yml`)

```yaml
ingress:
  # PROD acamaster.es
  - hostname: acamaster.es
    service: http://localhost:5000
  - hostname: app.acamaster.es
    service: http://localhost:5001
  - hostname: api.acamaster.es
    service: http://localhost:7000
  # DEV acamaster.es
  - hostname: dev.acamaster.es
    service: http://localhost:6000
  - hostname: app.dev.acamaster.es
    service: http://localhost:6001
  - hostname: api.dev.acamaster.es
    service: http://localhost:8000
  # PROD PCAlhaurin.es
  - hostname: pcalhaurin.es
    service: http://localhost:8080
  - hostname: www.pcalhaurin.es
    service: http://localhost:8080
  # Catch-all
  - service: http_status:404
```

## Target State

```
Cloudflare Tunnel → localhost:80 → Traefik container
  ├─ pcalhaurin.es      → pcalhaurin-web (internal network)
  ├─ www.pcalhaurin.es  → pcalhaurin-web (internal network)
  ├─ acamaster.es       → acamaster-web (internal network)
  ├─ app.acamaster.es   → acamaster-saas (internal network)
  ├─ api.acamaster.es   → acamaster-api (internal network)
  ├─ dev.acamaster.es   → acamaster-dev-web (internal network)
  ├─ app.dev...         → acamaster-dev-saas (internal network)
  └─ api.dev...         → acamaster-dev-api (internal network)
```

### Target tunnel config (all hostnames → :80)

```yaml
ingress:
  - hostname: acamaster.es
    service: http://localhost:80
  - hostname: app.acamaster.es
    service: http://localhost:80
  - hostname: api.acamaster.es
    service: http://localhost:80
  - hostname: dev.acamaster.es
    service: http://localhost:80
  - hostname: app.dev.acamaster.es
    service: http://localhost:80
  - hostname: api.dev.acamaster.es
    service: http://localhost:80
  - hostname: pcalhaurin.es
    service: http://localhost:80
  - hostname: www.pcalhaurin.es
    service: http://localhost:80
  - service: http_status:404
```

## Internal Port Convention (inside containers)

These are ports INSIDE the container, not exposed to host. No conflicts possible.

| Port | Purpose |
|------|---------|
| 80 | Primary web (public-facing site) |
| 8080 | Secondary web (SaaS dashboard, admin panel) |
| 8081 | Tertiary web (if needed) |
| 7000 | Primary API |
| 7070 | Secondary/auxiliary API |
| 3000 | PostgreSQL (remapped from 5432 for consistency, or keep 5432) |
| 3001 | Redis / other DB |
| 9000 | Tooling / debugging / metrics |
| 9090 | Monitoring dashboards |

Note: These only matter for the `loadbalancer.server.port` Traefik label. Containers can use whatever port internally.

## Migration Steps

### 1. Create shared infrastructure (Traefik)

Location on server: `/data/infra/traefik/`

```yaml
# /data/infra/traefik/docker-compose.yml
services:
  traefik:
    image: traefik:v3
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --providers.docker.network=proxy
      - --entrypoints.web.address=:80
      - --log.level=WARN
    networks:
      - proxy

networks:
  proxy:
    name: proxy
```

```bash
# Create network + start Traefik
docker network create proxy
cd /data/infra/traefik
docker compose up -d
```

### 2. Migrate PCAlhaurín (simplest, do first)

In `pcalhaurin/docker-compose.yml`:
```yaml
services:
  web:
    build: .
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.pcalhaurin.rule=Host(`pcalhaurin.es`) || Host(`www.pcalhaurin.es`)"
      - "traefik.http.services.pcalhaurin.loadbalancer.server.port=80"
    networks:
      - proxy
    # NO ports: mapping

networks:
  proxy:
    external: true
```

### 3. Migrate AcaMaster

In `acamaster/docker-compose.yml` — add labels to each service, remove `ports:`, add `networks: [proxy]`.

The DB container does NOT join the proxy network (not web-accessible). It stays on an internal project network only.

### 4. Update tunnel config

Replace all the per-port rules with everything pointing to :80.

### 5. Restart tunnel

```bash
sudo systemctl restart cloudflared
```

### 6. Verify

```bash
curl -sf -H "Host: pcalhaurin.es" http://localhost:80
curl -sf -H "Host: acamaster.es" http://localhost:80
curl -sf -H "Host: app.acamaster.es" http://localhost:80
```

## Rollback Plan

If something breaks:
1. Stop Traefik: `cd /data/infra/traefik && docker compose down`
2. Re-add `ports:` to each project's compose
3. Restart containers: `docker compose up -d`
4. Revert tunnel config to per-port rules
5. Restart cloudflared

Total rollback time: ~2 minutes.

## Repo Locations

| Project | Local path | GitHub |
|---------|-----------|--------|
| AcaMaster | F:\src\ErebosForge\acamaster | github.com/ErebosForge/acamaster |
| PCAlhaurín | F:\src\ErebosForge\alhaurinpc | github.com/ErebosForge/pcalhaurin |
| Infra (new) | F:\src\ErebosForge\infra (or docs in each repo) | TBD |

## Important Context Files

- `F:\tools\kiro\context\network.md` — service ports, networking quirks
- `F:\tools\kiro\context\environment.md` — machine specs, tools installed
- `F:\src\ErebosForge\acamaster\.github\workflows\ci-cd.yml` — AcaMaster deploy pipeline
- `F:\src\ErebosForge\alhaurinpc\.github\workflows\deploy.yml` — PCAlhaurín deploy pipeline

## Constraints

- Budget: €0 (no paid tools)
- Server: ARM64 (aarch64) — all images must support ARM
- Docker, not Podman (AcaMaster devlog mentions podman-compose but verify current state)
- No downtime tolerance is low (no real users yet), but do it cleanly anyway
- Use 127.0.0.1 not localhost for HTTP calls (IPv6 timeout issue on this setup)
