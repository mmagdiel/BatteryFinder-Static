// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

//const url = "http://localhost:5500";
const url = "https://static-stage.mmagdiel.dev/public/";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  env: {
    schema: {
      API_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
        default: url,
      }),
    },
  },
});
