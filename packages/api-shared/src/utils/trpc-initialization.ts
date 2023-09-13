import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

export const initializeTRPC = <ContextT extends object | ((...args: unknown[]) => object)>() => {
  const t = initTRPC.context<ContextT>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

  return {
    t,
    createRouter: t.router,
    publicProcedure: t.procedure,
  };
};
