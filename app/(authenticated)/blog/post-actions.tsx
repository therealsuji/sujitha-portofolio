"use server";

import { authClient } from "@/lib/safe-action";
import { posts } from "@/lib/schema";
import { createSlug, createExcerpt } from "@/utils/helper";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData(
  z.object({
    title: z.string().min(2),
  })
);

export const createPost = authClient
  .schema(schema)
  .stateAction(async ({ parsedInput, ctx }) => {
    const { db } = ctx;

    const [entity] = await db
      .insert(posts)
      .values({
        title: parsedInput.title,
        content: "<div>Hello World</div>",
        slug: createSlug(parsedInput.title),
      })
      .returning();

    return {
      id: entity!.id,
    };
  });

export const getPost = authClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput, ctx }) => {
    const { db } = ctx;
    const { id } = parsedInput;
    const existingPost = await db.query.posts.findFirst({
      where: eq(posts.id, id),
    });

    return existingPost;
  });

export const updatePostContent = authClient
  .schema(z.object({ id: z.string(), content: z.string() }))
  .action(async ({ parsedInput, ctx }) => {
    const { db } = ctx;
    const { id, content } = parsedInput;
    await db
      .update(posts)
      .set({
        content,
        excerpt: createExcerpt(content, 150),
      })
      .where(eq(posts.id, id));

    return true;
  });

export const deletePost = authClient
  .schema(z.object({ id: z.string() }))
  .action(async ({ parsedInput, ctx }) => {
    const { db } = ctx;
    const { id } = parsedInput;
    await db.delete(posts).where(eq(posts.id, id));
    return true;
  });

export const listPosts = authClient.action(async ({ ctx }) => {
  const { db } = ctx;
  const existingPosts = await db.query.posts.findMany();
  return existingPosts;
});

export const isSlugAvailable = authClient
  .schema(z.object({ slug: z.string() }))
  .action(async ({ parsedInput, ctx }) => {
    const { db } = ctx;
    const { slug } = parsedInput;
    const existingPost = await db.query.posts.findFirst({
      where: eq(posts.slug, slug),
    });

    return !existingPost;
  });

export const updatePostTitle = authClient
  .schema(z.object({ id: z.string(), title: z.string() }))
  .action(async ({ parsedInput, ctx }) => {
    const { db } = ctx;
    const { id, title } = parsedInput;
    await db
      .update(posts)
      .set({
        title,
        slug: createSlug(parsedInput.title),
      })
      .where(eq(posts.id, id));

    return true;
  });
