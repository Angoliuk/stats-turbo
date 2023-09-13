import { GameStatsShared, UserStatsShared } from "@stats/shared-api/modules";
import { createRouter, publicProcedure } from "@stats/server/api/trpc";

export const statsRouter = createRouter({
  getUserById: publicProcedure
    .input(UserStatsShared.getUserByIdSchema)
    .query(async ({ input }) => await UserStatsShared.getUserById(input)),

  getUsers: publicProcedure
    .input(UserStatsShared.getUsersSchema)
    .query(async ({ input }) => await UserStatsShared.getUsers(input)),

  getUserRatio: publicProcedure
    .input(GameStatsShared.getUserRatioSchema)
    .query(async ({ input }) => await GameStatsShared.getUserRatio(input)),

  getUserGamesDuration: publicProcedure
    .input(GameStatsShared.getUserGamesDurationSchema)
    .query(async ({ input }) => await GameStatsShared.getUserGamesDuration(input)),

  getUserLongestAndShortestGames: publicProcedure
    .input(GameStatsShared.getUserLongestAndShortestGamesSchema)
    .query(async ({ input }) => await GameStatsShared.getUserLongestAndShortestGames(input)),

  getUserGamesStats: publicProcedure
    .input(GameStatsShared.getUserGamesStatsSchema)
    .query(async ({ input }) => await GameStatsShared.getUserGamesStats(input)),

  getGamesStats: publicProcedure
    .input(GameStatsShared.getGamesStatsSchema)
    .query(async ({ input }) => await GameStatsShared.getGamesStats(input)),
});
