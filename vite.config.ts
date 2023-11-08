import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
//import viteCompression from "vite-plugin-compression";
import GlobPlugin from "vite-plugin-glob";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cheatsheet/",
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    //viteCompression(),
    GlobPlugin({
      // enable to let this plugin interpret `import.meta.glob`
      // takeover: true,
    }),
  ],
  server: {
    port: 5175,
  },
});
