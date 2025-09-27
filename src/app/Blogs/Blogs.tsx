'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/blog', { cache: 'no-store' });
        const data = await res.json();
        setPosts(data?.items || []);
      } catch {}
    })();
  }, []);

  const articles = [
    {
      category: 'technology',
      title: 'How AI is Revolutionizing Field Service Operations',
      slug: 'how-ai-is-revolutionizing-field-service-operations',
      date: '9/3/2025',
      readTime: '4 min read',
      excerpt: 'The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.',
      author: 'Fielduo Team',
      image: '🤖',
      content: `The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.
      Artificial Intelligence is no longer a futuristic concept but a practical tool that's reshaping field service operations. Machine learning algorithms can now predict equipment failures before they happen, schedule technicians more efficiently, and provide real-time guidance during complex repairs.
      One of the most significant impacts is in predictive maintenance. By analyzing historical data and current performance metrics, AI systems can identify patterns that precede equipment failures. This allows service companies to address issues before they cause downtime, saving both time and money.
      Another area where AI excels is in optimizing technician schedules. Traditional scheduling methods often result in inefficient routes and wasted time. AI-powered scheduling tools consider factors like traffic, technician skills, and parts availability to create optimal schedules that maximize productivity.
      During service calls, AI can provide technicians with real-time assistance through augmented reality interfaces. These systems can overlay digital information onto physical equipment, guiding technicians through complex repairs step by step.
      As AI technology continues to evolve, we can expect even more sophisticated applications in field service operations. From autonomous drones for inspections to advanced natural language processing for customer interactions, the possibilities are endless.`
    },
    {
      category: 'innovation',
      title: 'The Impact of IoT on Predictive Maintenance in Field Services',
      slug: 'the-impact-of-iot-on-predictive-maintenance-in-field-services',
      date: '9/2/2025',
      readTime: '5 min read',
      excerpt: 'In today\'s rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.',
      author: 'Fielduo Team',
      image: '📱',
      content: `In today's rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.
      IoT devices are now embedded in equipment across virtually every industry, from manufacturing to healthcare. These sensors continuously collect data on equipment performance, environmental conditions, and usage patterns. This real-time data stream provides unprecedented visibility into the health of assets.
      The true power of IoT in field services lies in its ability to enable predictive maintenance. By analyzing the data collected from IoT sensors, machine learning algorithms can identify subtle patterns that indicate impending failures. This allows service organizations to intervene before problems occur, minimizing downtime and reducing emergency repair costs.
      One of the key benefits of IoT-enabled predictive maintenance is the shift from calendar-based maintenance to condition-based maintenance. Instead of performing maintenance on a fixed schedule, organizations can service equipment only when needed. This approach reduces unnecessary maintenance activities while preventing unexpected failures.
      IoT technology also enhances the efficiency of field service operations. When a potential issue is detected, the system can automatically create a work order, identify the closest qualified technician, and ensure they have the necessary parts before dispatch. This level of automation significantly reduces response times and improves first-time fix rates.
      As IoT technology continues to advance, we can expect even greater integration with other technologies like augmented reality and artificial intelligence. These combined technologies will create a seamless ecosystem for managing field service operations, from issue detection to resolution.`
    },
    {
      category: 'guide',
      title: 'The Ultimate Guide to Choosing the Right Service Scheduling Software',
      slug: 'the-ultimate-guide-to-choosing-the-right-service-scheduling-software',
      date: '9/1/2025',
      readTime: '6 min read',
      excerpt: 'Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.',
      author: 'Fielduo Team',
      image: '📅',
      content: `Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.
      Selecting the right service scheduling software is one of the most critical decisions a field service business can make. The right solution can streamline operations, improve customer satisfaction, and boost profitability, while the wrong choice can lead to inefficiency and frustration.
      When evaluating scheduling software, start by identifying your specific needs. Consider factors like the size of your team, the complexity of your scheduling requirements, and any industry-specific challenges you face. A solution that works well for a small HVAC company might not be suitable for a large telecommunications provider.
      Integration capabilities should be high on your priority list. The best scheduling software should seamlessly integrate with your existing systems, including CRM, inventory management, and accounting software. This integration eliminates data silos and ensures information flows smoothly across your organization.
      Mobile functionality is non-negotiable in today's field service environment. Your technicians need access to schedules, customer information, and work orders on their mobile devices. Look for software that offers robust mobile apps with offline capabilities, ensuring productivity even in areas with poor connectivity.
      Don't overlook the importance of user experience. Complex, difficult-to-use software will lead to low adoption rates among your team. Choose a solution with an intuitive interface that requires minimal training. This will help ensure your team embraces the new system and uses it effectively.
      Finally, consider the scalability of the solution. Your business will grow and evolve, and your scheduling software should be able to grow with you. Look for flexible solutions that can accommodate increasing numbers of users, more complex scheduling scenarios, and additional functionality as your needs change.`
    },
    {
      category: 'customer-service',
      title: '5 Ways to Improve Customer Communication in Your Service Business',
      slug: '5-ways-to-improve-customer-communication-in-your-service-business',
      date: '9/1/2025',
      readTime: '4 min read',
      excerpt: 'In today\'s competitive service landscape, exceptional customer communication isn\'t just nice to have—it\'s essential for business growth and customer retention.',
      author: 'Hari',
      image: '💬',
      content: `In today's competitive service landscape, exceptional customer communication isn't just nice to have—it's essential for business growth and customer retention.
      Effective communication begins with setting clear expectations. When a customer schedules a service, they should receive immediate confirmation with all relevant details, including the appointment time, technician information, and what to expect during the visit. Automated notifications can keep customers informed about appointment status changes, reducing uncertainty and building trust.
      Real-time tracking capabilities have become a customer expectation in the service industry. Providing customers with the ability to track their technician's location and estimated arrival time through a mobile app or web portal significantly enhances the customer experience. This transparency reduces the need for customers to call for updates and demonstrates respect for their time.
      Personalized communication goes a long way in building customer relationships. Use customer data to tailor communications based on service history, preferences, and past interactions. Addressing customers by name and referencing previous services shows that you value their business and understand their specific needs.
      Proactive communication about potential issues or delays can turn a negative situation into a positive customer experience. If a technician is running late or if an unexpected problem is discovered during service, notifying the customer immediately with an explanation and revised timeline helps maintain trust and reduces frustration.
      Finally, establishing multiple communication channels ensures customers can interact with your business in the way that's most convenient for them. While phone calls remain important, offering options like text messaging, email, and chat accommodates different preferences and can improve response times.`
    }
  ];


  const handleReadMore = (article: any) => {
    if (article.slug) {
      router.push(`/Blogs/${article.slug}`);
    } else {
      // For hardcoded articles, create a slug from title
      const slug = article.title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
      router.push(`/Blogs/${slug}`);
    }
  };

  return (
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
            Fielduo Blog
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
            {(posts.length ? posts : articles).map((article: any, index: number) => (
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
                          {article.image}
                        </div>
                        <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                          {article.category || 'Article'}
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
                      {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : article.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-blue-400 font-medium text-xs">{article.author}</span>
                  </div>
                  
                  <h2 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-3 line-clamp-2 leading-relaxed text-sm">
                    {article.summary || article.excerpt}
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
  );
};

export default BlogPage;