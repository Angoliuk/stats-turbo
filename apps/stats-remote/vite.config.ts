import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import svgr from "vite-plugin-svgr";
import path from "path";
import { Environment } from "./src/env/env";

type Env = Record<string, string>;

const envPlugin = (env: Env) => ({
  name: "env",
  transform: () => {
    Environment.config(env);
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      envPlugin(env),
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
    server: {
      host: true,
      port: env.VITE_APP_PORT ? Number(env.VITE_APP_PORT) : 5522,
      open: true,
    },
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
  };
});
