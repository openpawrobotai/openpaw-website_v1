import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) {
    return Response.json(
      { ok: false, message: "Database connection not available" },
      { status: 503 }
    );
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Health check database error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
