import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://cascadecreatives.com',
  integrations: [sitemap()],
  output: 'static',
});

