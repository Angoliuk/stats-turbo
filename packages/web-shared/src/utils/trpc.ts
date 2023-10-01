import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@stats/api";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
