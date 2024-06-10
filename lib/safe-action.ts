import { createSafeActionClient } from "next-safe-action";
import { getUser } from "./auth-helper";
import { db } from "./db";

export const baseClient = createSafeActionClient({
  handleReturnedServerError: (error) => {
    return error.message;
  },
});

export const authClient = baseClient.use(async ({ next }) => {
  const user = await getUser();
  console.log(user);
  if (!user) {
    throw new Error("Session is not valid!");
  }
  return next({
    ctx: {
      userId: user?.id,
      db: db,
    },
  });
});
