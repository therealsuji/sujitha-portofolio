import { sql } from "drizzle-orm";
import { pgTableCreator, text, timestamp } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sujitha_${name}`);

const commonColumns = {
  id: text("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey()
    .notNull(),
  createdAt: timestamp("created_at", {
    precision: 3,
    mode: "date",
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", {
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

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  hashedPassword: text("hashed_password").notNull(),
  email: text("email").notNull(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at").notNull(),
});

export type Post = typeof posts.$inferSelect;
