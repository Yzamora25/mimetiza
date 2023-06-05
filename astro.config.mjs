import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://symphonious-sunburst-0bd4b5.netlify.app/",
  integrations: [
    tailwind(),
  
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
