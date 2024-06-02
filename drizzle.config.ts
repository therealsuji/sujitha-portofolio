import { defineConfig } from "drizzle-kit";
import { env } from "./env.mjs";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: "./lib/schema.ts",
  out: "./drizzle",
  verbose: true,
  strict: true,
});
