import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [
    vue(), 
    react(),
  ],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "system",
        entryFileNames: "index.js",
        dir: "dist",
      },
    },
  },
  server: {
    port: 2000,
  },
});