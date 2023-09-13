import type { User } from "@stats/prisma";
import { prisma } from "@stats/shared-api/db";
import type { GetUserByIdSchema, GetUsersSchema } from "./validation";

export const getUserById = async ({ userId }: GetUserByIdSchema) => {
  const usersList = await prisma.$queryRaw<[User] | []>`
        SELECT * FROM "User"
          WHERE "User".id = ${userId}
    `;
  return usersList.length > 0 ? usersList[0] : null;
};

export const getUsers = async ({ name, sortBy: { field, order }, scoreLimits, offset, limit }: GetUsersSchema) => {
  const nameSearch = name ? `%${name}%` : "%";
  const orderBy = `${field} ${order}`;
  return await prisma.$queryRaw<User[]>`
          SELECT * FROM "User"
            WHERE "User".score BETWEEN ${scoreLimits[0]} AND ${scoreLimits[1]}
              AND "User".name LIKE ${nameSearch}
            ORDER BY ${orderBy}
            LIMIT ${limit}
            OFFSET ${offset}
      `;
};
