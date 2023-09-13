import { Prisma } from "@stats/prisma";
import { SortOrder } from "@stats/shared-api/types";
import { paginationSchema } from "@stats/shared-api/validation";
import { z } from "zod";

export type GetUserByIdSchema = z.infer<typeof getUserByIdSchema>;
export const getUserByIdSchema = z.object({
  userId: z.string(),
});

export type GetUsersSchema = z.infer<typeof getUsersSchema>;
export const getUsersSchema = z
  .object({
    scoreLimits: z.tuple([z.number(), z.number()]).default([0, 9999]),
    name: z.string().optional(),
    sortBy: z
      .object({
        field: z.nativeEnum(Prisma.UserScalarFieldEnum),
        order: z.nativeEnum(SortOrder),
      })
      .default({
        field: "createdAt",
        order: SortOrder.DESC,
      }),
  })
  .and(paginationSchema);
