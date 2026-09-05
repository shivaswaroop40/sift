import { defineConfig } from 'astro/config';

// SITE_URL is set in CI (GitHub Pages) and in .env locally. RSS needs an absolute base.
const site = process.env.SITE_URL || 'http://localhost:4321';
// If deploying under a sub-path (e.g. user.github.io/sift), set BASE_PATH=/sift
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
