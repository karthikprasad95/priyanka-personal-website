import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    react(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID ?? "wb24ea22",
      dataset: process.env.PUBLIC_SANITY_DATASET ?? "production",
      studioBasePath: "/studio",
      useCdn: false,
      apiVersion: "2024-01-01",
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
});
