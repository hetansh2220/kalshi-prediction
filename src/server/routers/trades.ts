import { DFLOW_PREDICTION_BASE_API } from "@/src/constants";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const tradesRouter = router({
  getTrades: publicProcedure
    .input(z.object({ ticker: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${DFLOW_PREDICTION_BASE_API}/trades?ticker=${input.ticker}`,
        {
          headers: {
            "x-api-key": process.env.DFLOW_API_KEY!,
          },
        }
      );
      const data = await res.json();
      return data as Event;
    }),
});
