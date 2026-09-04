# Deployment Guide

## Architecture

```text
GitHub push to main
  → GitHub Actions in this repository
    → build and deploy the PCAlhaurín container to OCI
      → container joins the external Podman network "proxy"
        → shared Traefik from ErebosForge/common-infrastructure
          → Cloudflare Tunnel from ErebosForge/common-infrastructure
            → https://pcalhaurin.es
```

The application repository owns the Astro/Caddy image and its Traefik labels. It does not install Traefik, configure `cloudflared`, create the shared `proxy` network, or manage Cloudflare DNS.

## Common infrastructure prerequisite

Deploy the `common-infrastructure` repository first. Its Traefik component must be listening on ports 80 and 443 and its Cloudflare Tunnel component must point to the local Traefik HTTPS origin.

The application pipeline only verifies that the external network exists. If it is missing, the deployment stops instead of creating shared infrastructure implicitly.

## SSL and ports

Traefik terminates TLS and obtains Let's Encrypt certificates. The PCAlhaurín container listens on its internal port 80 and does not publish a host port. Cloudflare may use the Tunnel or DNS Only mode; both paths terminate at the shared Traefik instance.

## Application deployment

Push to `main` to run `.github/workflows/deploy.yml`. The pipeline:

1. Builds the container before stopping the previous release.
2. Stops the previous PCAlhaurín release.
3. Removes stale PCAlhaurín containers from older Compose release projects.
4. Starts the new container on the external `proxy` network
   (`COMPOSE_PROJECT_NAME=prod-pcalhaurin`).
5. Installs a rootless systemd `--user` unit (`prod-pcalhaurin.service`, from
   `deploy/`) and ensures `linger`, so the container survives an OCI reboot.
   `restart: unless-stopped` alone is not enough for rootless Podman.
6. Checks `https://pcalhaurin.es/` through local Traefik using `--resolve`.
7. Keeps the last three application releases.

## Traefik labels

This app owns its Traefik router/service labels (see `docker-compose.yml`),
including a `www.pcalhaurin.es` → apex redirect that uses the shared generic
middleware `www-to-apex@file` provided by `common-infrastructure`. Service and
container naming follow the `<env>-<app>` convention documented in
common-infrastructure `docs/container-persistence.md`.

## DNS and Tunnel setup

DNS and Tunnel configuration are maintained in:

```text
git@github.com:ErebosForge/common-infrastructure.git
```

The old application-owned `setup-domains.yml` and `infra/setup-server.sh` have intentionally been removed to avoid two repositories managing the same server infrastructure.

## Local testing

For local development use the Astro dev server (`cd site-astro && npm run dev`) or a local compose setup. Production routing and certificates are provided by the shared OCI infrastructure, not by the application compose file.
