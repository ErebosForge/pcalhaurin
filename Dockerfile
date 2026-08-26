FROM caddy:2-alpine

COPY site/public /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
