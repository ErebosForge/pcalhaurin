FROM hugomods/hugo:base-0.165.0 AS builder
COPY site /src
WORKDIR /src
RUN hugo --minify

FROM caddy:2-alpine
COPY --from=builder /src/public /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
