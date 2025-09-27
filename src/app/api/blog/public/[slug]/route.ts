import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

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

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.pathname.split('/').pop();

  if (!slug) {
    return NextResponse.json({ message: "Blog slug required" }, { status: 400 });
  }

  try {
    if (process.env.MONGODB_URI) {
      const client = await getMongoClient();
      const db = client.db(process.env.MONGODB_DB || "fielduo");
      
      // Find published blog by slug
      const blog = await db
        .collection<BlogPost>("blog")
        .findOne({ slug, published: true }, { projection: { _id: 0 } });
      
      if (blog) {
        return NextResponse.json({ blog }, { status: 200 });
      }
    }
  } catch (err) {
    console.error("Blog fetch error", err);
  }

  return NextResponse.json({ message: "Blog not found" }, { status: 404 });
}
