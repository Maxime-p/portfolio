import { defineConfig } from 'astro/config';
import matomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "https://maxime-p.github.io",
  base: "/portfolio",
  integrations: [matomo({
    baseUrl: "https://analytics.maxime-p.dev/",
    siteId: 1
  })]
});
