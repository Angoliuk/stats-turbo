import { statsRouter } from "@stats/server/api/routers/stats";
import { createRouter } from "@stats/server/api/trpc";

export const appRouter = createRouter({
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
