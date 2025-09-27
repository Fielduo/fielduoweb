'use client';
import React from 'react';

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

// Hardcoded articles for fallback
const hardcodedArticles: Record<string, BlogPost> = {
  'how-ai-is-revolutionizing-field-service-operations': {
    id: '1',
    title: 'How AI is Revolutionizing Field Service Operations',
    slug: 'how-ai-is-revolutionizing-field-service-operations',
    summary: 'The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.',
    content: `The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, AI is transforming how field services are delivered, scheduled, and optimized.

Artificial Intelligence is no longer a futuristic concept but a practical tool that's reshaping field service operations. Machine learning algorithms can now predict equipment failures before they happen, schedule technicians more efficiently, and provide real-time guidance during complex repairs.

One of the most significant impacts is in predictive maintenance. By analyzing historical data and current performance metrics, AI systems can identify patterns that precede equipment failures. This allows service companies to address issues before they cause downtime, saving both time and money.

Another area where AI excels is in optimizing technician schedules. Traditional scheduling methods often result in inefficient routes and wasted time. AI-powered scheduling tools consider factors like traffic, technician skills, and parts availability to create optimal schedules that maximize productivity.

During service calls, AI can provide technicians with real-time assistance through augmented reality interfaces. These systems can overlay digital information onto physical equipment, guiding technicians through complex repairs step by step.

As AI technology continues to evolve, we can expect even more sophisticated applications in field service operations. From autonomous drones for inspections to advanced natural language processing for customer interactions, the possibilities are endless.`,
    author: 'Fielduo Team',
    published: true,
    tags: ['technology', 'AI', 'field-service'],
    createdAt: '2025-09-03T00:00:00.000Z'
  },
  'the-impact-of-iot-on-predictive-maintenance-in-field-services': {
    id: '2',
    title: 'The Impact of IoT on Predictive Maintenance in Field Services',
    slug: 'the-impact-of-iot-on-predictive-maintenance-in-field-services',
    summary: 'In today\'s rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.',
    content: `In today's rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is revolutionizing how field service businesses operate.

IoT devices are now embedded in equipment across virtually every industry, from manufacturing to healthcare. These sensors continuously collect data on equipment performance, environmental conditions, and usage patterns. This real-time data stream provides unprecedented visibility into the health of assets.

The true power of IoT in field services lies in its ability to enable predictive maintenance. By analyzing the data collected from IoT sensors, machine learning algorithms can identify subtle patterns that indicate impending failures. This allows service organizations to intervene before problems occur, minimizing downtime and reducing emergency repair costs.

One of the key benefits of IoT-enabled predictive maintenance is the shift from calendar-based maintenance to condition-based maintenance. Instead of performing maintenance on a fixed schedule, organizations can service equipment only when needed. This approach reduces unnecessary maintenance activities while preventing unexpected failures.

IoT technology also enhances the efficiency of field service operations. When a potential issue is detected, the system can automatically create a work order, identify the closest qualified technician, and ensure they have the necessary parts before dispatch. This level of automation significantly reduces response times and improves first-time fix rates.

As IoT technology continues to advance, we can expect even greater integration with other technologies like augmented reality and artificial intelligence. These combined technologies will create a seamless ecosystem for managing field service operations, from issue detection to resolution.`,
    author: 'Fielduo Team',
    published: true,
    tags: ['innovation', 'IoT', 'predictive-maintenance'],
    createdAt: '2025-09-02T00:00:00.000Z'
  },
  'the-ultimate-guide-to-choosing-the-right-service-scheduling-software': {
    id: '3',
    title: 'The Ultimate Guide to Choosing the Right Service Scheduling Software',
    slug: 'the-ultimate-guide-to-choosing-the-right-service-scheduling-software',
    summary: 'Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.',
    content: `Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor. This guide helps you choose the right solution.

Selecting the right service scheduling software is one of the most critical decisions a field service business can make. The right solution can streamline operations, improve customer satisfaction, and boost profitability, while the wrong choice can lead to inefficiency and frustration.

When evaluating scheduling software, start by identifying your specific needs. Consider factors like the size of your team, the complexity of your scheduling requirements, and any industry-specific challenges you face. A solution that works well for a small HVAC company might not be suitable for a large telecommunications provider.

Integration capabilities should be high on your priority list. The best scheduling software should seamlessly integrate with your existing systems, including CRM, inventory management, and accounting software. This integration eliminates data silos and ensures information flows smoothly across your organization.

Mobile functionality is non-negotiable in today's field service environment. Your technicians need access to schedules, customer information, and work orders on their mobile devices. Look for software that offers robust mobile apps with offline capabilities, ensuring productivity even in areas with poor connectivity.

Don't overlook the importance of user experience. Complex, difficult-to-use software will lead to low adoption rates among your team. Choose a solution with an intuitive interface that requires minimal training. This will help ensure your team embraces the new system and uses it effectively.

Finally, consider the scalability of the solution. Your business will grow and evolve, and your scheduling software should be able to grow with you. Look for flexible solutions that can accommodate increasing numbers of users, more complex scheduling scenarios, and additional functionality as your needs change.`,
    author: 'Fielduo Team',
    published: true,
    tags: ['guide', 'scheduling', 'software'],
    createdAt: '2025-09-01T00:00:00.000Z'
  },
  '5-ways-to-improve-customer-communication-in-your-service-business': {
    id: '4',
    title: '5 Ways to Improve Customer Communication in Your Service Business',
    slug: '5-ways-to-improve-customer-communication-in-your-service-business',
    summary: 'In today\'s competitive service landscape, exceptional customer communication isn\'t just nice to have—it\'s essential for business growth and customer retention.',
    content: `In today's competitive service landscape, exceptional customer communication isn't just nice to have—it's essential for business growth and customer retention.

Effective communication begins with setting clear expectations. When a customer schedules a service, they should receive immediate confirmation with all relevant details, including the appointment time, technician information, and what to expect during the visit. Automated notifications can keep customers informed about appointment status changes, reducing uncertainty and building trust.

Real-time tracking capabilities have become a customer expectation in the service industry. Providing customers with the ability to track their technician's location and estimated arrival time through a mobile app or web portal significantly enhances the customer experience. This transparency reduces the need for customers to call for updates and demonstrates respect for their time.

Personalized communication goes a long way in building customer relationships. Use customer data to tailor communications based on service history, preferences, and past interactions. Addressing customers by name and referencing previous services shows that you value their business and understand their specific needs.

Proactive communication about potential issues or delays can turn a negative situation into a positive customer experience. If a technician is running late or if an unexpected problem is discovered during service, notifying the customer immediately with an explanation and revised timeline helps maintain trust and reduces frustration.

Finally, establishing multiple communication channels ensures customers can interact with your business in the way that's most convenient for them. While phone calls remain important, offering options like text messaging, email, and chat accommodates different preferences and can improve response times.`,
    author: 'Hari',
    published: true,
    tags: ['customer-service', 'communication', 'business'],
    createdAt: '2025-09-01T00:00:00.000Z'
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    // First try to fetch from public API
    const response = await fetch(`/api/blog/public/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.blog) {
        return data.blog;
      }
    }
  } catch (error) {
    console.error('Error fetching blog from API:', error);
  }

  // Fallback to hardcoded articles
  console.log('Using hardcoded article for slug:', slug);
  return hardcodedArticles[slug] || null;
};

