import { Prisma } from "@stats/prisma";
import { SortOrder } from "@stats/shared-api/types";
import { paginationSchema } from "@stats/shared-api/validation";
import { z } from "zod";

export type GetUserRatioSchema = z.infer<typeof getUserRatioSchema>;
export const getUserRatioSchema = z.object({ userId: z.string().min(1) });

export type GetUserGamesDurationSchema = z.infer<typeof getUserGamesDurationSchema>;
export const getUserGamesDurationSchema = z.object({ userId: z.string().min(1) });

export type GetUserLongestAndShortestGamesSchema = z.infer<typeof getUserLongestAndShortestGamesSchema>;
export const getUserLongestAndShortestGamesSchema = z.object({ userId: z.string().min(1) });

export type GetUserGamesStatsSchema = z.infer<typeof getUserGamesStatsSchema>;
export const getUserGamesStatsSchema = z
  .object({
    userId: z.string().min(1),
    sortBy: z
      .object({
        field: z.nativeEnum(Prisma.MatchStatsScalarFieldEnum),
        order: z.nativeEnum(SortOrder),
      })
      .default({ field: "createdAt", order: SortOrder.DESC }),
  })
  .and(paginationSchema);

export type GetGamesStatsSchema = z.infer<typeof getGamesStatsSchema>;
export const getGamesStatsSchema = z
  .object({
    sortBy: z
      .object({
        field: z.nativeEnum(Prisma.MatchStatsScalarFieldEnum),
        order: z.nativeEnum(SortOrder),
      })
      .default({
        field: "createdAt",
        order: SortOrder.DESC,
      }),
  })
  .and(paginationSchema);
