import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const ShoppingItemRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))

    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  createNew: publicProcedure
    .input(z.object({ newItemName: z.string() }))

    .mutation(({ ctx, input }) => {
      return ctx.db.shoppingItem.create({
        data: { name: input.newItemName },
      });
    }),

  readAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.shoppingItem.findMany();
  }),

  deleteCurrent: publicProcedure
    .input(z.object({ itemToDeleteID: z.number() }))

    .mutation(async ({ ctx, input }) => {
      return await ctx.db.shoppingItem.delete({
        where: { id: input.itemToDeleteID },
      });
    }),
});
