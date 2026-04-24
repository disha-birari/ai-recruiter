ALTER TABLE "users" ADD COLUMN "clerk_user_id" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "image_url" varchar(500);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id");