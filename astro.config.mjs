import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
      dataset: process.env.PUBLIC_SANITY_DATASET ?? "production",
      studioBasePath: "/studio",
      useCdn: false,
      apiVersion: "2024-01-01",
    }),
  ],
});
