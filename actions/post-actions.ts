"use server";

import { db } from "@/lib/db";
import { baseClient } from "@/lib/safe-action";
import { posts } from "@/lib/schema";
import { and, eq } from "drizzle-orm";

export const listPosts = baseClient.action(async ({ ctx }) => {
  const existingPosts = await db
    .select({
      title: posts.title,
      excerpt: posts.excerpt,
      slug: posts.slug,
      createdAt: posts.createdAt,
    })
    .from(posts)
    .where(eq(posts.published, true));
  return existingPosts;
});

export const getPublishedPost = async (slug: string) => {
  const post = await db.query.posts.findFirst({
    where: and(eq(posts.slug, slug), eq(posts.published, true)),
  });

  return post;
};
