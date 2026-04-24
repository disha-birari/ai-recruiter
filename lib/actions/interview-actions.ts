"use server";

import { db } from "@/lib/db";
import { interviews } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function createInterview(data: {
  candidateId: number;
  userId: number;
  jobTitle: string;
  department: string;
  status?: string;
  scheduledAt?: Date;
}) {
  try {
    const [interview] = await db.insert(interviews).values(data).returning();
    revalidatePath("/interviews");
    return interview;
  } catch (error) {
    console.error("Error creating interview:", error);
    throw new Error("Failed to create interview");
  }
}

export async function updateInterview(id: number, data: Partial<typeof interviews.$inferInsert>) {
  try {
    const [updated] = await db.update(interviews).set(data).where(eq(interviews.id, id)).returning();
    revalidatePath("/interviews");
    return updated;
  } catch (error) {
    console.error("Error updating interview:", error);
    throw new Error("Failed to update interview");
  }
}

export async function deleteInterview(id: number) {
  try {
    await db.delete(interviews).where(eq(interviews.id, id));
    revalidatePath("/interviews");
    return { success: true };
  } catch (error) {
    console.error("Error deleting interview:", error);
    throw new Error("Failed to delete interview");
  }
}

export async function getInterviewById(id: number) {
  try {
    const [interview] = await db.select().from(interviews).where(eq(interviews.id, id));
    return interview;
  } catch (error) {
    console.error("Error fetching interview:", error);
    throw new Error("Failed to fetch interview");
  }
}

export async function getAllInterviews() {
  try {
    const result = await db.query.interviews.findMany({
      with: {
        candidate: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching interviews:", error);
    throw new Error("Failed to fetch interviews");
  }
}

export async function getInterviewsWithResponses() {
  try {
    const result = await db.query.interviews.findMany({
      with: {
        candidate: true,
        responses: {
          with: {
            question: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching interviews with responses:", error);
    throw new Error("Failed to fetch interviews with responses");
  }
}