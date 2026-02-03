import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";

const pwa = VitePWA({
  registerType: "autoUpdate",
  manifest: {
    name: "PWA Application",
    short_name: "PWA",
    description: "Somethig about thebapp.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f172a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["pwa", "vue"],
    id: "com.zoowar.pwa",
  },
});

export default defineConfig({
  plugins: [vueDevTools(), vue(), pwa],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    allowedHosts: [".zoowar.com"],
    host: "127.0.0.1",
    port: 7373,
  },
});
