import { z } from "zod";

export const paginationSchema = z.object({
  limit: z.number().min(0).max(100).default(20),
  offset: z.number().min(0).max(100).default(0),
});
