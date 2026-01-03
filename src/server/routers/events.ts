import { DFLOW_PREDICTION_BASE_API } from "@/src/constants";
import { router, publicProcedure } from "../trpc";
import { Event } from "@/src/types/event";
import z from "zod";

export const eventsRouter = router({
  all: publicProcedure.query(async () => {
    const res = await fetch(
      `${DFLOW_PREDICTION_BASE_API}/events?status=active`,
      {
        headers: {
          "x-api-key": process.env.DFLOW_API_KEY!,
        },
      }
    );
    const data = await res.json();
    return data.events as Event[];
  }),
  getEvent: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(
        `${DFLOW_PREDICTION_BASE_API}/event/${input.id}`,
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
