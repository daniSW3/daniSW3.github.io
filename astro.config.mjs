// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// For a user site (repo named daniSW3.github.io) the site lives at the root.
// If you later add a custom domain, change `site` to it (e.g. 'https://danieltemesgen.com').
export default defineConfig({
  site: 'https://danisw3.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
});
