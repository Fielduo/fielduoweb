import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      
      const result = await db.collection("early_bird").deleteOne({ id });
      
      if (result.deletedCount === 0) {
        return NextResponse.json({ message: "Subscriber not found" }, { status: 404 });
      }
      
      return NextResponse.json({ message: "Subscriber deleted successfully" }, { status: 200 });
    }
  } catch (err) {
    console.error("Early bird delete error", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Database not configured" }, { status: 500 });
}