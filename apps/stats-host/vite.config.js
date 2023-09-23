import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: "app",
      remotes: {
        "@stats/remote": "http://localhost:5522/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@stats/host": path.resolve(__dirname, "./src/"),
      "@stats/shared-web": path.resolve(__dirname, "../../packages/web-shared/dist/"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
