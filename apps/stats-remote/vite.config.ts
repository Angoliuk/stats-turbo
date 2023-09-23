import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./modules": "./src/modules",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@stats/remote": path.resolve(__dirname, "./src/"),
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
