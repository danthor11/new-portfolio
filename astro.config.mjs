import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "assets",
  },
  integrations: [tailwind(), react()],
  site: "https://danthor11.github.io",
  base: "/new-portfolio/",
});
