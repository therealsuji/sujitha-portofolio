import { sql } from "drizzle-orm";
import { pgTableCreator, text, timestamp } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sujitha_${name}`);

const commonColumns = {
  id: text("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey()
    .notNull(),
  createdAt: timestamp("createdAt", {
    precision: 3,
    mode: "date",
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", {
    precision: 3,
    mode: "date",
    withTimezone: true,
  }).$onUpdate(() => new Date()),
};
export const posts = pgTable("posts", {
  ...commonColumns,
  title: text("title").notNull(),
  content: text("content").notNull(),
});

export type Post = typeof posts.$inferSelect;
