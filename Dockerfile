# Multi-stage: build the Astro static site with Node, serve it with Caddy.
FROM node:22-alpine AS builder
WORKDIR /app
# Install dependencies against the lockfile for reproducible builds.
COPY site-astro/package.json site-astro/package-lock.json ./
RUN npm ci
# Build the static output.
COPY site-astro/ ./
RUN npm run build

FROM caddy:2-alpine
COPY --from=builder /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
