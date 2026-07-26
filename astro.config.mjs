// @ts-check
import { defineConfig } from 'astro/config';
import pluginIcons from "unplugin-icons/vite";
import pluginSitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://matvasenin.ru",
  integrations: [
    pluginSitemap()
  ],
  vite: {
    plugins: [
      pluginIcons({
        compiler: "astro",
      })
    ]
  }
});
