import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const revalidate = 60; // Regenerate sitemap at most once per minute

type BlogPost = {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
  published?: boolean;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.fielduo.com").replace(/\/$/, "");

  const appDir = path.join(process.cwd(), "src", "app");

  const disallowedRouteFolders = new Set<string>([
    "api",
    "admin",
  ]);

  const nonRouteFiles = new Set<string>([
    "layout.tsx",
    "layout.css",
    "globals.css",
    "sitemap.ts",
    "robots.ts",
    "favicon.ico",
    "blog-content.css",
    "page.tsx", // root index route handled separately
  ]);

  const discoveredPaths: string[] = [];

  try {
    const entriesInApp = fs.readdirSync(appDir);
    for (const entryName of entriesInApp) {
      if (disallowedRouteFolders.has(entryName)) continue;
      if (nonRouteFiles.has(entryName)) continue;

      const fullPath = path.join(appDir, entryName);
      const stats = fs.statSync(fullPath);
      if (!stats.isDirectory()) continue;

      const pageTsx = path.join(fullPath, "page.tsx");
      if (fs.existsSync(pageTsx)) {
        discoveredPaths.push(entryName);
      }
    }
  } catch {
    // If FS access fails for any reason, fall back to a minimal set
  }

  // Always include root index
  const staticPaths: string[] = ["", ...discoveredPaths];

  const toEncodedUrl = (segment: string): string => {
    if (!segment) return siteUrl; // root
    // Encode the path segment to ensure XML-safe URLs (e.g., '&' -> %26)
    return `${siteUrl}/${encodeURIComponent(segment)}`.replace(/\/$/, "");
  };

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: toEncodedUrl(p),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));

  try {
    const res = await fetch(`${siteUrl}/api/blog`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      const blogs: BlogPost[] = Array.isArray(data?.items) ? data.items : [];
      for (const post of blogs) {
        if (!post?.slug) continue;
        if (post.published === false) continue;
        entries.push({
          url: `${siteUrl}/Blogs/${encodeURIComponent(post.slug)}`,
          lastModified: post.updatedAt ? new Date(post.updatedAt) : post.createdAt ? new Date(post.createdAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  } catch {}

  return entries;
}


