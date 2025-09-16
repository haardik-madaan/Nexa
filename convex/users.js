import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    image: v.string(),
    uid: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingUser) {
      // Patch then fetch updated document and return that.
      await ctx.db.patch(existingUser._id, {
        name: args.name,
        image: args.image,
        tokenIdentifier: args.tokenIdentifier,
        uid: args.uid,
      });
      const updated = await ctx.db.get(existingUser._id);
      return updated;
    }

    const newUser = await ctx.db.insert("users", {
      name: args.name,
      tokenIdentifier: args.tokenIdentifier,
      email: args.email,
      image: args.image,
      uid: args.uid,
    });

    return newUser; // this object contains _id
  },
});


export const getUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
  },
});
