import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    image: v.string(),
    uid: v.string(),
  }).index("by_email", ["email"]),

  workspace: defineTable({
    messages: v.any(),
    fileData: v.optional(v.any()),
    user: v.id("users"), 
  }),
});
