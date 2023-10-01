import { Environment } from "./env";

export const { MODE, VITE_API_HOST: API_HOST, VITE_APP_PORT: APP_PORT } = Environment.config(import.meta.env);
