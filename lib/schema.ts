import { relations, sql } from "drizzle-orm";
import { boolean, pgTableCreator, text, timestamp } from "drizzle-orm/pg-core";

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
  thumbnail: text("thumbnail"),
  published: boolean("published").default(false),
  content: text("content").notNull(),
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  hashedPassword: text("hashed_password").notNull(),
  email: text("email").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: timestamp("expires_at").notNull(),
});

export const userSessionRelation = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export type Post = typeof posts.$inferSelect;
