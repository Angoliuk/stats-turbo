import { prisma } from "@stats/shared-api/db";
import { initializeTRPC } from "@stats/shared-api/utils";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

type CreateContextOptions = Record<string, never>;

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    prisma,
  };
};

export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return createInnerTRPCContext({});
};

export const { t, publicProcedure, createRouter } = initializeTRPC<typeof createTRPCContext>();
