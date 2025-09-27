import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";
import { withAdminAuth } from "@/lib/admin-api";

export const runtime = "nodejs";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  published: boolean;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const memory: BlogPost[] = [];

export const GET = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const param = url.pathname.split('/').pop();

  if (!param) {
    return NextResponse.json({ message: "Blog ID or slug required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      
      // Try to find by ID first, then by slug
      let blog = await db
        .collection<BlogPost>("blog")
        .findOne({ id: param }, { projection: { _id: 0 } });
      
      if (!blog) {
        blog = await db
          .collection<BlogPost>("blog")
          .findOne({ slug: param }, { projection: { _id: 0 } });
      }
      
      if (blog) {
        return NextResponse.json({ blog }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Blog fetch error", err);
  }

  // Try memory storage by ID first, then by slug
  let blog = memory.find(b => b.id === param);
  if (!blog) {
    blog = memory.find(b => b.slug === param);
  }
  
  if (blog) {
    return NextResponse.json({ blog }, { status: 200 });
  }

  return NextResponse.json({ message: "Blog not found" }, { status: 404 });
});

export const PUT = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Blog ID required" }, { status: 400 });
  }

  let body: any = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const title = String(body?.title || "").trim();
  const summary = String(body?.summary || "");
  const content = String(body?.content || "");
  const author = String(body?.author || "Admin");
  const published = Boolean(body?.published);
  const tags = Array.isArray(body?.tags) ? body.tags : [];
  const slug = String(body?.slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"));
  const imageUrl = String(body?.imageUrl || "");
  const imageAlt = String(body?.imageAlt || "");

  if (!title || !content) {
    return NextResponse.json({ message: "Title and content required" }, { status: 400 });
  }

  const updatedAt = new Date().toISOString();
  const updateData = { 
    title, 
    summary, 
    content, 
    author, 
    published, 
    tags, 
    slug, 
    updatedAt,
    ...(imageUrl && { imageUrl }),
    ...(imageAlt && { imageAlt })
  };

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const result = await db
        .collection<BlogPost>("blog")
        .updateOne({ id }, { $set: updateData });
      
      if (result.matchedCount > 0) {
        return NextResponse.json({ ok: true, message: "Blog updated successfully" }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Blog update error", err);
  }

  const blogIndex = memory.findIndex(b => b.id === id);
  if (blogIndex !== -1) {
    memory[blogIndex] = { ...memory[blogIndex], ...updateData };
    return NextResponse.json({ ok: true, message: "Blog updated successfully" }, { status: 200 });
  }

  return NextResponse.json({ message: "Blog not found" }, { status: 404 });
});

export const DELETE = withAdminAuth(async (request: Request, user: any) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: "Blog ID required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      const result = await db
        .collection<BlogPost>("blog")
        .deleteOne({ id });
      
      if (result.deletedCount > 0) {
        return NextResponse.json({ ok: true, message: "Blog deleted successfully" }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Blog delete error", err);
  }

  const blogIndex = memory.findIndex(b => b.id === id);
  if (blogIndex !== -1) {
    memory.splice(blogIndex, 1);
    return NextResponse.json({ ok: true, message: "Blog deleted successfully" }, { status: 200 });
  }

  return NextResponse.json({ message: "Blog not found" }, { status: 404 });
});