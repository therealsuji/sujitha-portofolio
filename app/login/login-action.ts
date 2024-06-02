"use server";

import { z } from "zod";
import { actionClient } from "@/lib/safe-action";
import { zfd } from "zod-form-data";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { user } from "@/lib/schema";
import { verify } from "@node-rs/argon2";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

const schema = z.object({
  email: z.string().min(2),
  password: z.string(),
});

const formSchema = zfd.formData(schema);

export const loginUser = actionClient
  .schema(formSchema)
  .stateAction(async ({ parsedInput: { email, password } }) => {
    const existingUser = await db.query.user.findFirst({
      where: eq(user.email, email),
    });

    if (!existingUser) {
      return {
        error: "Invalid email or password",
      };
    }

    const validPassword = await verify(existingUser.hashedPassword, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return {
        error: "Invalid email or password",
      };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value);
    return {
      success: "Successfully logged in",
    };
  });
