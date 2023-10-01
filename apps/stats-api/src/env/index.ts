import { Environment } from "./env";

export const { PORT, isProd, isDev, DATABASE_URL, FRONTEND_HOST, REDIS_DATABASE_URL } = Environment.config();
