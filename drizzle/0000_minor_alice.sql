CREATE TABLE IF NOT EXISTS "sujitha_posts" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp (3) with time zone,
	"title" text NOT NULL,
	"content" text NOT NULL
);
