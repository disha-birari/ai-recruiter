"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function createUserFromClerk(clerkData: {
  clerkUserId: string;
  email: string;
  name: string;
  imageUrl?: string;
}) {
  try {
    const [user] = await db.insert(users).values({
      clerkUserId: clerkData.clerkUserId,
      email: clerkData.email,
      name: clerkData.name,
      imageUrl: clerkData.imageUrl,
      role: 'user',
    }).returning();
    
    revalidatePath("/dashboard");
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function updateUser(userId: number, data: Partial<typeof users.$inferInsert>) {
  try {
    const [updated] = await db.update(users).set(data).where(eq(users.id, userId)).returning();
    revalidatePath("/dashboard");
    return updated;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
}

export async function getUserByClerkId(clerkUserId: string) {
  try {
    const [user] = await db.select().from(users).where(eq(users.clerkUserId, clerkUserId));
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function getUserById(userId: number) {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function deleteUser(userId: number) {
  try {
    await db.delete(users).where(eq(users.id, userId));
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
}