import { statsRouter } from "./modules/stats";
import { createRouter } from "./trpc";

// // V rot about
// import type {} from "@stats/shared-api";
// import type {} from "@stats/prisma";

export const appRouter = createRouter({
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
