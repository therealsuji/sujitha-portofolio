"use server";

import { db } from "@/lib/db";
import { baseClient } from "@/lib/safe-action";
import { posts } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const listPosts = baseClient.action(async ({ ctx }) => {
  const existingPosts = await db
    .select({
      title: posts.title,
      excerpt: posts.excerpt,
      slug: posts.slug,
      createdAt: posts.createdAt,
    })
    .from(posts);
  return existingPosts;
});

export const getPost = baseClient
  .schema(z.object({ slug: z.string() }))
  .action(async ({ parsedInput }) => {
    const { slug } = parsedInput;
    const post = await db.query.posts.findFirst({
      where: eq(posts.slug, slug),
    });

    return post;
  });

export const cacheablePost = async (slug: string) => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  return post;
};
