'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
            className="prose prose-lg prose-invert max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="text-gray-300 leading-relaxed"
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
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
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
    </div>
  );
};

export default BlogPostPage;