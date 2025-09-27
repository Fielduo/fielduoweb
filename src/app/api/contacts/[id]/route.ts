import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import { withAdminAuth } from "@/lib/admin-api";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  country: string;
  phone: string;
  message: string;
  status?: "pending" | "done";
};

type StoredContact = ContactPayload & {
  id: string;
  createdAt: string;
};

const memoryStore: StoredContact[] = [];

export const GET = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Contact ID required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const contact = await db
        .collection<StoredContact>("contacts")
        .findOne({ id }, { projection: { _id: 0 } });
      
      if (contact) {
        return NextResponse.json({ contact }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Contact fetch error", err);
  }

  const contact = memoryStore.find(c => c.id === id);
  if (contact) {
    return NextResponse.json({ contact }, { status: 200 });
  }

  return NextResponse.json({ message: "Contact not found" }, { status: 404 });
});

export const PATCH = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Contact ID required" }, { status: 400 });
  }

  let body: any = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const { status } = body;
  if (!status || !['pending', 'done'].includes(status)) {
    return NextResponse.json({ message: "Valid status required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const result = await db
        .collection<StoredContact>("contacts")
        .updateOne({ id }, { $set: { status } });
      
      if (result.matchedCount > 0) {
        return NextResponse.json({ ok: true, message: "Contact status updated successfully" }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Contact update error", err);
  }

  const contactIndex = memoryStore.findIndex(c => c.id === id);
  if (contactIndex !== -1) {
    memoryStore[contactIndex].status = status;
    return NextResponse.json({ ok: true, message: "Contact status updated successfully" }, { status: 200 });
  }

  return NextResponse.json({ message: "Contact not found" }, { status: 404 });
});

export const DELETE = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Contact ID required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const result = await db
        .collection<StoredContact>("contacts")
        .deleteOne({ id });
      
      if (result.deletedCount > 0) {
        return NextResponse.json({ ok: true, message: "Contact deleted successfully" }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Contact delete error", err);
  }

  const contactIndex = memoryStore.findIndex(c => c.id === id);
  if (contactIndex !== -1) {
    memoryStore.splice(contactIndex, 1);
    return NextResponse.json({ ok: true, message: "Contact deleted successfully" }, { status: 200 });
  }

  return NextResponse.json({ message: "Contact not found" }, { status: 404 });
});