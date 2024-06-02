import { db } from "@/lib/db";
import { user } from "@/lib/schema";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Usage: createMe <email> <password>");
  process.exit(1);
}

const email = args[0];
const password = args[1];

if (email === undefined || password === undefined) {
  console.error("Email and password cannot be empty");
  process.exit(1);
}

const passwordHash = await hash(password, {
  // recommended minimum parameters
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
});
const userId = generateIdFromEntropySize(10); // 16 characters long

const [addedUser] = await db
  .insert(user)
  .values({
    id: userId,
    email,
    hashedPassword: passwordHash,
  })
  .returning();

console.log(`Created user with id: ${addedUser?.id}`);
process.exit(0);
