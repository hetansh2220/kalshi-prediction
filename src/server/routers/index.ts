import { router } from "../trpc";
import { eventsRouter } from "./events";
import { marketsRouter } from "./markets";
import { tradesRouter } from "./trades";

export const appRouter = router({
  markets: marketsRouter,
  events: eventsRouter,
  trades: tradesRouter,
});

export type AppRouter = typeof appRouter;
