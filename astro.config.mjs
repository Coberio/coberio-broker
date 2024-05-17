import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://coberio.github.io',
  base: 'coberio-broker',
  integrations: [mdx(), sitemap(), react(), tailwind()]
});
