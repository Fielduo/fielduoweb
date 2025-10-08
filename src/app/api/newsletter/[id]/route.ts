import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import { withAdminAuth } from "@/lib/admin-api";

export const runtime = "nodejs";

type Newsletter = {
  id: string;
  email: string;
  createdAt: string;
};

const memoryStore: Newsletter[] = [];

export const GET = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Newsletter ID required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const newsletter = await db
        .collection<Newsletter>("newsletter")
        .findOne({ id }, { projection: { _id: 0 } });
      
      if (newsletter) {
        return NextResponse.json({ newsletter }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Newsletter fetch error", err);
  }

  const newsletter = memoryStore.find(n => n.id === id);
  if (newsletter) {
    return NextResponse.json({ newsletter }, { status: 200 });
  }

  return NextResponse.json({ message: "Newsletter subscriber not found" }, { status: 404 });
});

export const DELETE = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Newsletter ID required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const result = await db
        .collection<Newsletter>("newsletter")
        .deleteOne({ id });
      
      if (result.deletedCount > 0) {
        return NextResponse.json({ ok: true, message: "Newsletter subscriber deleted successfully" }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Newsletter delete error", err);
  }

  const newsletterIndex = memoryStore.findIndex(n => n.id === id);
  if (newsletterIndex !== -1) {
    memoryStore.splice(newsletterIndex, 1);
    return NextResponse.json({ ok: true, message: "Newsletter subscriber deleted successfully" }, { status: 200 });
  }

  return NextResponse.json({ message: "Newsletter subscriber not found" }, { status: 404 });
});