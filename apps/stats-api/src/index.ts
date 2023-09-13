import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./root";
import { createTRPCContext } from "./trpc";
const { expressHandler } = require("trpc-playground/handlers/express");
// import { expressHandler } from "trpc-playground/handlers/express";
// V rot about
// import type {} from "@stats/shared-api";
// import type {} from "@stats/prisma";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// do i need that?
// app.use(morgan("dev")); // for pretty logging

// app.get("/", (req, res) => {
//   res.send("hello, world!");
// });

// Do i need that?

const TRPC_ENDPOINT = "/trpc";

const TRPC_PLAYGROUND_ENDPOINT = "/trpc-playground";
expressHandler({
  trpcApiEndpoint: TRPC_ENDPOINT,
  playgroundEndpoint: TRPC_PLAYGROUND_ENDPOINT,
  router: appRouter,
  // uncomment this if you're using superjson
  request: {
    superjson: true,
  },
}).then((handeler: any) => {
  app.use(handeler);
});

app.use(
  TRPC_ENDPOINT,
  createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  }),
);

app.listen(port, () => {
  console.log(`[server]: Server is running at PORT ${port} at ${`http://localhost:${port}`}`);
});
