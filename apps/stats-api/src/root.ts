import { statsRouter } from "./modules/stats";
import { createRouter } from "./trpc";

export const appRouter = createRouter({
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
