import { prisma } from "@stats/shared-api/db";
import type { CountQueryReturn, SumAndAvgQueryReturn, MatchStatsWithUsersStats } from "@stats/shared-api/types";
import type {
  GetUserRatioSchema,
  GetUserGamesDurationSchema,
  GetUserLongestAndShortestGamesSchema,
  GetUserGamesStatsSchema,
  GetGamesStatsSchema,
} from "./validation";

export const getUserRatio = async ({ userId }: GetUserRatioSchema) => {
  const [{ count: losesCount }] = await prisma.$queryRaw<CountQueryReturn>`
    SELECT COUNT(*) FROM "UserMatchStats"
      WHERE "UserMatchStats"."userId" = ${userId}
        AND "UserMatchStats"."isWinner" = FALSE
  `;

  const [{ count: totalCount }] = await prisma.$queryRaw<CountQueryReturn>`
    SELECT COUNT(*) FROM "UserMatchStats"
      WHERE "UserMatchStats"."userId" = ${userId}
  `;
  const total = Number(totalCount);
  const loses = Number(losesCount);

  return {
    winRatio: (((total - loses) / total) * 100).toFixed(2),
    loseRatio: ((loses / total) * 100).toFixed(2),
    wins: total - loses,
    loses,
    total,
  };
};

export const getUserGamesDuration = async ({ userId }: GetUserGamesDurationSchema) => {
  const [{ avg, sum }] = await prisma.$queryRaw<SumAndAvgQueryReturn>`
    SELECT
      SUM("MatchStats".duration),
      AVG("MatchStats".duration)
    FROM "MatchStats"
      INNER JOIN "UserMatchStats" ON "MatchStats".id = "UserMatchStats"."matchStatsId"
        WHERE "UserMatchStats"."userId" = ${userId}`;

  return {
    sum: Number(sum),
    avg: Number(avg),
  };
};

export const getUserLongestAndShortestGames = async ({ userId }: GetUserLongestAndShortestGamesSchema) => {
  return prisma.$queryRaw<[MatchStatsWithUsersStats?, MatchStatsWithUsersStats?]>`
  SELECT "MatchStats".*, ARRAY_TO_JSON(
    ARRAY_AGG(
      JSONB_SET(
        TO_JSONB("UserMatchStats".*), '{user}', TO_JSONB("User".*)
      )
    )
  ) AS "usersMatchStats" FROM "MatchStats"
    INNER JOIN "UserMatchStats" ON
      "MatchStats".id = "UserMatchStats"."matchStatsId"
      AND (
        "MatchStats".duration = (SELECT MIN("MatchStats".duration) FROM "MatchStats")
        OR "MatchStats".duration = (SELECT MAX("MatchStats".duration) FROM "MatchStats")
      )
    INNER JOIN "User" ON "UserMatchStats"."userId"="User".id
    WHERE "MatchStats".id IN (
      SELECT "matchStatsId" FROM "UserMatchStats"
        WHERE "UserMatchStats"."matchStatsId"="MatchStats".id
          AND "UserMatchStats"."userId"=${userId}
    )
    GROUP BY "MatchStats"."id"
    ORDER BY "MatchStats".duration
  `;
};

export const getUserGamesStats = async ({
  userId,
  sortBy: { order, field },
  offset,
  limit,
}: GetUserGamesStatsSchema) => {
  const orderBy = `${field} ${order}`;
  return prisma.$queryRaw<MatchStatsWithUsersStats[]>`
      SELECT "MatchStats".*, ARRAY_TO_JSON(
        ARRAY_AGG(
          JSONB_SET(
            TO_JSONB("UserMatchStats".*), '{user}', TO_JSONB("User".*)
          )
        )
      ) AS "usersMatchStats" FROM "MatchStats"
        INNER JOIN "UserMatchStats" ON "UserMatchStats"."matchStatsId"="MatchStats".id
        INNER JOIN "User" ON "UserMatchStats"."userId"="User".id
        WHERE "MatchStats".id IN (
          SELECT "matchStatsId" FROM "UserMatchStats"
            WHERE "UserMatchStats"."matchStatsId"="MatchStats".id
              AND "UserMatchStats"."userId"=${userId}
        )
        GROUP BY "MatchStats".id
        ORDER BY ${orderBy}
        LIMIT ${limit}
        OFFSET ${offset}
      `;
};

export const getGamesStats = async ({ sortBy: { order, field }, offset, limit }: GetGamesStatsSchema) => {
  const orderBy = `${field} ${order}`;
  return prisma.$queryRaw<MatchStatsWithUsersStats[]>`
      SELECT "MatchStats".*, ARRAY_TO_JSON(
        ARRAY_AGG(
          JSONB_SET(
            TO_JSONB("UserMatchStats".*), '{user}', TO_JSONB("User".*)
          )
        )
      ) AS "usersMatchStats" FROM "MatchStats"
        LEFT JOIN "UserMatchStats" ON "UserMatchStats"."matchStatsId"="MatchStats".id
        INNER JOIN "User" ON "UserMatchStats"."userId"="User".id
        WHERE "MatchStats".id IN (
          SELECT "matchStatsId" FROM "UserMatchStats"
            WHERE "UserMatchStats"."matchStatsId"="MatchStats".id
        )
        GROUP BY "MatchStats".id
        ORDER BY ${orderBy}
        LIMIT ${limit}
        OFFSET ${offset}
      `;
};
