// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://naza321.github.io',
  // base is intentionally omitted: this is a *.github.io user/org page
  // served at the domain root, unlike project-page repos which need
  // base: '/repo-name'.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
