import { prisma } from "@stats/shared-api/db";
import { initializeTRPC } from "@stats/shared-api/utils";
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createTRPCContext = (_: CreateExpressContextOptions) => ({ prisma });

type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>;

export const { t, publicProcedure, createRouter } = initializeTRPC<TRPCContext>();
