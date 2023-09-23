import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./root";
import { createTRPCContext } from "./trpc";

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

// do i need that?
// app.use(morgan("dev")); // for pretty logging

const TRPC_ENDPOINT = "/trpc";

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
