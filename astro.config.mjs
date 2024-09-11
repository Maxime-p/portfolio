import { defineConfig } from 'astro/config';
import matomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "https://maxime-p.dev",
  base: "/",
  integrations: [matomo({
    baseUrl: "https://analytics.maxime-p.dev/",
    siteId: 1
  })]
});
