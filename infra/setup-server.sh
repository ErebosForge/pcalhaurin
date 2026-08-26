#!/bin/bash
# =============================================================================
# PCAlhaurín — Server Setup (run once on OCI instance)
# =============================================================================
# Prerequisites:
#   - Docker installed and running
#   - Cloudflare Tunnel (cloudflared) installed and running
#   - Domain pcalhaurin.es added to Cloudflare (DNS zone active)
#
# This script:
#   1. Creates the project directory
#   2. Adds the route to Cloudflare Tunnel config
#   3. Reminds you to add DNS records in Cloudflare
# =============================================================================

set -euo pipefail

DOMAIN="pcalhaurin.es"
PROJECT_DIR="/opt/pcalhaurin"
TUNNEL_CONFIG="/etc/cloudflared/config.yml"

echo "=== PCAlhaurín Server Setup ==="

# 1. Create project dir
echo "[1/3] Creating project directory..."
sudo mkdir -p "$PROJECT_DIR"
sudo chown "$USER:$USER" "$PROJECT_DIR"
echo "  → $PROJECT_DIR created"

# 2. Cloudflare Tunnel ingress
echo "[2/3] Cloudflare Tunnel config..."
echo ""
echo "  Add these rules to $TUNNEL_CONFIG (before the catch-all):"
echo ""
echo "  - hostname: $DOMAIN"
echo "    service: http://localhost:8080"
echo "  - hostname: www.$DOMAIN"
echo "    service: http://localhost:8080"
echo ""
echo "  Then restart: sudo systemctl restart cloudflared"
echo ""

# 3. DNS records reminder
echo "[3/3] Cloudflare DNS records..."
echo ""
echo "  Add in Cloudflare Dashboard → DNS:"
echo "    CNAME  @    → <tunnel-id>.cfargotunnel.com  (Proxied)"
echo "    CNAME  www  → <tunnel-id>.cfargotunnel.com  (Proxied)"
echo ""

echo "=== Done ==="
echo ""
echo "After CI deploys the code to $PROJECT_DIR, the container"
echo "will serve on :8080 and the tunnel routes traffic to it."
echo ""
echo "First manual deploy (after pushing code):"
echo "  cd $PROJECT_DIR"
echo "  docker compose up -d --build"
echo "  curl -I http://localhost:8080"
