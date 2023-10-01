import { defineConfig, loadEnv } from "vite";
import { Environment } from "./src/env/env";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

type Env = Record<string, string>;

const envPlugin = (env: Env) => ({
  name: "env",
  transform: () => {
    Environment.config(env);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      envPlugin(env),
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
    server: {
      host: true,
      port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 5521,
      open: true,
    },
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
  };
});
