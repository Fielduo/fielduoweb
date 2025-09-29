import type { MetadataRoute } from "next";

type BlogPost = {
  slug: string;
  updatedAt?: string;
  createdAt?: string;
  published?: boolean;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.fielduo.com").replace(/\/$/, "");

  const staticPaths: string[] = [
    "",
    "Blogs",
    "About",
    "Contact",
    "Pricing",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${siteUrl}/${p}`.replace(/\/$/, ""),
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
        entries.push({
          url: `${siteUrl}/Blogs/${post.slug}`,
          lastModified: post.updatedAt ? new Date(post.updatedAt) : post.createdAt ? new Date(post.createdAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  } catch {}

  return entries;
}


