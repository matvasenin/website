// @ts-check
import { defineConfig } from 'astro/config';
import pluginIcons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      pluginIcons({
        compiler: "astro",
      })
    ]
  }
});
