import { defineConfig } from 'astro/config';

// PCAlhaurín — static multilingual site (ES at root, EN under /en/).
// Mirrors the previous Hugo setup: defaultContentLanguage=es,
// defaultContentLanguageInSubdir=false.
export default defineConfig({
  site: 'https://pcalhaurin.es',
  output: 'static',
  // Directory-style URLs so /legal/ and /en/legal/ emit index.html,
  // matching the previous Hugo permalinks and the Caddyfile expectations.
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
