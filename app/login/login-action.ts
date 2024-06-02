"use server";

import { z } from "zod";
import { actionClient } from "@/lib/safe-action";
import { zfd } from "zod-form-data";

const schema = z.object({
  email: z.string().min(2),
  password: z.string(),
});

const formSchema = zfd.formData(schema);

export const loginUser = actionClient
   .schema(formSchema)
  .stateAction(async ({ parsedInput: { email, password } }) => {
    if (email === "johndoe@gmail.com" && password === "123456") {
      return {
        success: "Successfully logged in",
      };
    }

    return {
      error: "Invalid email or password",
    };
  });
