"use server";

import { db } from "@/lib/db";
import { candidates } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function createCandidate(data: {
  name: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  experience?: number;
  skills?: string[];
  location?: string;
}) {
  try {
    const [candidate] = await db.insert(candidates).values(data).returning();
    revalidatePath("/candidates");
    return candidate;
  } catch (error) {
    console.error("Error creating candidate:", error);
    throw new Error("Failed to create candidate");
  }
}

export async function updateCandidate(id: number, data: Partial<typeof candidates.$inferInsert>) {
  try {
    const [updated] = await db.update(candidates).set(data).where(eq(candidates.id, id)).returning();
    revalidatePath("/candidates");
    return updated;
  } catch (error) {
    console.error("Error updating candidate:", error);
    throw new Error("Failed to update candidate");
  }
}

export async function deleteCandidate(id: number) {
  try {
    await db.delete(candidates).where(eq(candidates.id, id));
    revalidatePath("/candidates");
    return { success: true };
  } catch (error) {
    console.error("Error deleting candidate:", error);
    throw new Error("Failed to delete candidate");
  }
}

export async function getCandidateById(id: number) {
  try {
    const [candidate] = await db.select().from(candidates).where(eq(candidates.id, id));
    return candidate;
  } catch (error) {
    console.error("Error fetching candidate:", error);
    throw new Error("Failed to fetch candidate");
  }
}

export async function getAllCandidates() {
  try {
    const result = await db.select().from(candidates);
    return result;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw new Error("Failed to fetch candidates");
  }
}