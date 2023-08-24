import { statsRouter } from '@stats/server/api/routers/stats'
import { createRouter } from '@stats/server/api/trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createRouter({
  // setupStatsRouter(t)
  stats: statsRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
