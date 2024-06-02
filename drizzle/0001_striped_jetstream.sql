CREATE TABLE IF NOT EXISTS "sujitha_session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sujitha_user" (
	"id" text PRIMARY KEY NOT NULL,
	"hashed_password" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sujitha_posts" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "sujitha_posts" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sujitha_session" ADD CONSTRAINT "sujitha_session_user_id_sujitha_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."sujitha_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
