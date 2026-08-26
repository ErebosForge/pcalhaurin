#!/bin/bash
# =============================================================================
# PCAlhaurín — Server Setup (run once on OCI instance)
# =============================================================================
# Prerequisites:
#   - Cloudflare Tunnel (cloudflared) already installed and running for other sites
#   - Caddy already installed and serving other sites
#   - Domain pcalhaurin.es added to Cloudflare (DNS zone active)
#
# This script:
#   1. Creates the web root directory
#   2. Adds Caddy config for pcalhaurin.es
#   3. Adds the route to Cloudflare Tunnel config
#   4. Reloads both services
# =============================================================================

set -euo pipefail

DOMAIN="pcalhaurin.es"
WEB_ROOT="/var/www/pcalhaurin"
CADDY_CONFIG="/etc/caddy/sites/pcalhaurin.caddy"
TUNNEL_CONFIG="/etc/cloudflared/config.yml"

echo "=== PCAlhaurín Server Setup ==="

# 1. Create web root
echo "[1/4] Creating web root..."
sudo mkdir -p "$WEB_ROOT"
sudo chown "$USER:$USER" "$WEB_ROOT"
echo "  → $WEB_ROOT created"

# 2. Add Caddy site config
echo "[2/4] Adding Caddy config..."
sudo tee "$CADDY_CONFIG" > /dev/null <<EOF
$DOMAIN {
    root * $WEB_ROOT
    file_server
    encode gzip

    # SPA-style: serve index.html for directory requests
    try_files {path} {path}/ /index.html

    # Cache static assets aggressively
    @static path *.css *.js *.jpg *.png *.webp *.ico *.svg *.woff2
    header @static Cache-Control "public, max-age=31536000, immutable"

    # HTML pages: revalidate
    @html path *.html
    header @html Cache-Control "public, max-age=3600, must-revalidate"

    # Security headers
    header {
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "strict-origin-when-cross-origin"
    }
}
EOF
echo "  → $CADDY_CONFIG written"

# 3. Add route to Cloudflare Tunnel config
echo "[3/4] Adding Cloudflare Tunnel route..."
echo ""
echo "  ⚠️  MANUAL STEP: Add this ingress rule to $TUNNEL_CONFIG"
echo "  (before the catch-all 404 rule at the bottom):"
echo ""
echo "  - hostname: $DOMAIN"
echo "    service: http://localhost:80"
echo "  - hostname: www.$DOMAIN"
echo "    service: http://localhost:80"
echo ""
echo "  Then also add DNS records in Cloudflare dashboard:"
echo "    CNAME  pcalhaurin.es      → <tunnel-id>.cfargotunnel.com  (proxied)"
echo "    CNAME  www.pcalhaurin.es  → <tunnel-id>.cfargotunnel.com  (proxied)"
echo ""

# 4. Reload services
echo "[4/4] Reloading Caddy..."
sudo systemctl reload caddy 2>/dev/null || sudo caddy reload --config /etc/caddy/Caddyfile
echo "  → Caddy reloaded"

echo ""
echo "=== Done ==="
echo "After updating Cloudflare Tunnel config, restart it:"
echo "  sudo systemctl restart cloudflared"
echo ""
echo "Verify: curl -I https://$DOMAIN (should return 200 after DNS propagation)"
