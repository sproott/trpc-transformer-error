import { initTRPC } from "@trpc/server";
import trpcTransformer from "trpc-transformer";

const t = initTRPC.create({
  transformer: trpcTransformer,
});

export const appRouter = t.router({
  greeting: t.procedure.query(() => {
    return "Hello, world!";
  }),
});

export type AppRouter = typeof appRouter;
