'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../blog-content.css';
import { getBlogPost } from './BlogPostContent';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

interface BlogPost {
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
}

const BlogPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const blogData = await getBlogPost(params.slug as string);
        
        if (blogData) {
          setBlog(blogData);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  const handleShare = async () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const title = blog?.title || 'Check out this article';
      const text = blog?.summary || `Read: ${title}`;

      // Use Web Share API when available
      if (typeof navigator !== 'undefined' && (navigator as any).share) {
        await (navigator as any).share({ title, text, url });
        return;
      }

      // Fallback: copy to clipboard
      if (typeof navigator !== 'undefined' && navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      }

      // Final fallback: open twitter intent
      if (url) {
        const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        window.open(intent, '_blank');
      }
    } catch (err) {
      console.error('Share failed:', err);
      alert('Unable to share right now. Please copy the URL from the address bar.');
    }
  };

  const getShareUrl = (platform: 'twitter' | 'linkedin' | 'whatsapp', url: string, title: string) => {
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      case 'whatsapp':
        return `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
    }
  };

  const openPlatformShare = async (platform: 'instagram' | 'twitter' | 'linkedin' | 'whatsapp' | 'copy') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = blog?.title || 'Check out this article';

    try {
      if (platform === 'copy') {
        if (navigator.clipboard && url) {
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        }
        return;
      }

      if (platform === 'instagram') {
        // Instagram has no official web share intent. Best effort:
        // 1) Try native share so user can choose Instagram on mobile
        if ((navigator as any).share) {
          await (navigator as any).share({ title, url });
          return;
        }
        // 2) Copy link and open Instagram site
        if (navigator.clipboard && url) {
          await navigator.clipboard.writeText(url);
          alert('Link copied. Paste it in Instagram.');
        }
        window.open('https://www.instagram.com/', '_blank');
        return;
      }

      const shareUrl = getShareUrl(platform as any, url, title);
      if (shareUrl) window.open(shareUrl, '_blank', 'noopener');
    } catch (err) {
      console.error('Share failed:', err);
      alert('Unable to share right now. Please copy the URL from the address bar.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-400">Oops!</h1>
          <p className="text-gray-300 mb-6">{error || 'Blog post not found'}</p>
          <button 
            onClick={() => router.push('/Blogs')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto max-w-4xl px-4 py-8 relative z-10">
        <button 
          onClick={() => router.push('/Blogs')}
          className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 mb-8"
          data-aos="fade-right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </button>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto max-w-4xl px-4 pb-16 relative z-10">
        <article className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          {/* Article Header */}
          <header className="mb-8" data-aos="fade-up">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full">
                {blog.tags && blog.tags.length > 0 ? blog.tags[0] : 'General'}
              </span>
              <span className="mx-2">•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>By {blog.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {blog.title}
            </h1>
            
            {blog.imageUrl && (
              <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <img
                  src={blog.imageUrl}
                  alt={blog.imageAlt || blog.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg border border-gray-700"
                  onError={(e) => {
                    console.error('Failed to load blog header image:', blog.imageUrl);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {blog.summary && (
              <p className="text-xl text-gray-300 leading-relaxed">
                {blog.summary}
              </p>
            )}
          </header>

          {/* Article Content */}
          <div 
            className="blog-content prose prose-lg prose-invert max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="text-gray-100 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-700" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
                </div>
                <div>
                  <p className="font-semibold text-white">{blog.author || 'Anonymous'}</p>
                  <p className="text-sm text-gray-400">Author</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button onClick={() => setShareOpen(true)} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles or Navigation */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Enjoyed this article?</h3>
            <p className="text-gray-300 mb-6">
              Explore more insights and updates on field service management software.
            </p>
            <button 
              onClick={() => router.push('/Blogs')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    {shareOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShareOpen(false)}></div>
        <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-sm mx-4">
          <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => openPlatformShare('instagram')} className="w-full px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white">Instagram</button>
            <button onClick={() => openPlatformShare('twitter')} className="w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Twitter</button>
            <button onClick={() => openPlatformShare('linkedin')} className="w-full px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white">LinkedIn</button>
            <button onClick={() => openPlatformShare('whatsapp')} className="w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">WhatsApp</button>
            <button onClick={() => openPlatformShare('copy')} className="col-span-2 w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">Copy Link</button>
          </div>
          <button onClick={() => setShareOpen(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-200">✕</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default BlogPostPage;