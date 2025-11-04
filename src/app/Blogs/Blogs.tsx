'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

const BlogPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);


  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/blog', { cache: 'no-store' });
        const data = await res.json();
        setPosts(data?.items || []);
      } catch {}
      finally { setIsLoading(false); }
    })();
  }, []);

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');


  const handleReadMore = (article: any) => {
    if (article.slug) {
      router.push(`/Blogs/${article.slug}`);
    } else {
      const slug = article.title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
      router.push(`/Blogs/${slug}`);
    }
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://fielduo.com/blogs/" />
      </Head>
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-down"
          >
            Fielduo Resources
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Insights and updates on field service management software
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        {/* Articles Section */}
        <div className="w-full">
            
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading && (
              <div className="col-span-full flex items-center justify-center py-16 text-gray-400">
                Loading posts...
              </div>
            )}
            {!isLoading && posts.length === 0 && (
              <div className="col-span-full flex items-center justify-center py-16 text-gray-400">
                No blog posts yet.
              </div>
            )}
            {!isLoading && posts.map((article: any, index: number) => (
              <article 
                key={index} 
                className="group bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                {/* Article Image */}
                <div className="relative h-40 overflow-hidden">
                  {article.imageUrl ? (
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        console.error('Failed to load article image:', article.imageUrl);
                        // Hide the image and show default gradient background
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
                      </div>
                      
                      {/* Icon with better styling */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="text-4xl mb-1 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                          {/* placeholder icon removed since we only render fetched posts */}
                          📰
                        </div>
                        <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                      {'Article'}
                        </div>
                      </div>
                      
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  {article.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full capitalize">
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ''}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-blue-400 font-medium text-xs">{article.author}</span>
                  </div>
                  
                  <h2 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-3 line-clamp-2 leading-relaxed text-sm">
                    {article.summary || stripHtml(article.content || '').slice(0, 160)}
                  </p>
                  
                  <button 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all duration-300 group-hover:translate-x-1"
                    onClick={() => handleReadMore(article)}
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
            
          {/* Pagination */}
          <div className="flex justify-center mt-16" data-aos="fade-up">
            <div className="flex items-center space-x-3">
              <button className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
                1
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
                2
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
                3
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-800 bg-opacity-60 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;