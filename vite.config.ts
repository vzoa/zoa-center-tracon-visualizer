import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin(), tailwindcss()],
  assetsInclude: ["**/*.geojson"],
  server: {
    port: 42635,
    proxy: {
      '/chart-tiles': {
        target: 'http://localhost:42636',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/chart-tiles/, ''),
      },
    },
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
