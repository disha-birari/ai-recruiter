import { db } from "@/lib/db";
import { interviews } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
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
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching interviews:", error);
    return Response.json({ error: "Failed to fetch interviews" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const [newInterview] = await db.insert(interviews).values(body).returning();
    return Response.json(newInterview);
  } catch (error) {
    console.error("Error creating interview:", error);
    return Response.json({ error: "Failed to create interview" }, { status: 500 });
  }
}