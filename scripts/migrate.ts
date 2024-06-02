import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { env } from "env.mjs";
import postgres from "postgres";

console.log("Migrating database...");
const sql = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(sql);
await migrate(db, { migrationsFolder: "drizzle" });
await sql.end();
console.log("Database migrated!");
