import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const marketsRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        id: input.id,
        name: "Harsh",
      };
    }),
});
