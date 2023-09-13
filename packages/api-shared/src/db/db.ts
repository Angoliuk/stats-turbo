import { PrismaClient } from "@stats/prisma";
// import { env } from "@stats/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// TODO: remove
const env = {
  NODE_ENV: "development",
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
