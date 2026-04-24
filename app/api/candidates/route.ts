import { db } from "@/lib/db";
import { candidates } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const result = await db.select().from(candidates);
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return Response.json({ error: "Failed to fetch candidates" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const [newCandidate] = await db.insert(candidates).values(body).returning();
    return Response.json(newCandidate);
  } catch (error) {
    console.error("Error creating candidate:", error);
    return Response.json({ error: "Failed to create candidate" }, { status: 500 });
  }
}