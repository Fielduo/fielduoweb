'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const solutions = [
    {
      title: 'Asset & Equipment Management',
      description: 'Optimize Your Assets from Day One to Decommission',
      href: '/Asset-Equipment-Management',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['Asset Lifecycle Management', 'Predictive Maintenance', 'Equipment History Tracking', 'Real-Time Performance Monitoring', 'Warranty & Contract Management']
    },
    {
      title: 'Workforce Management',
      description: 'Empower Your Field Teams with Intelligent Scheduling & Analytics',
      href: '/Workforce-Management',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['Mobile Workforce Optimization', 'Technician Performance Management', 'Global Workforce Coordination', 'Compliance Management', 'Resource Allocation & Capacity Planning']
    },
    {
      title: 'Customer Experience',
      description: 'Delight Customers with Self-Service & Proactive Communications',
      href: '/Customer-Experience',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ['Branded Self-Service Portal', 'Proactive Service Recommendations', 'Automated Communications', 'SLA Management & Escalations', 'Customer Satisfaction Insights']
    },
    {
      title: 'Business Operations',
      description: 'Streamline Back-Office Processes & Drive Profitability',
      href: '/Business-Operations',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ['Dynamic Revenue Optimization', 'Contract & Recurring Billing Management', 'Inventory & Parts Control', 'Financial Management & Reporting', 'Project & Job Coordination']
    },
    {
      title: 'Technology & Integration',
      description: 'Future-Proof Your Operations with Seamless Connectivity & Automation',
      href: '/Technology-Integration',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['IoT & Smart Device Integration', 'AI-Powered Scheduling & Forecasting', 'Enterprise System Connectivity', 'RESTful API & Custom Connectors', 'Mobile-First & Offline-Capable App']
    },
    {
      title: 'Compliance & Safety',
      description: 'Protect Your Business and Your People with Built-In Controls',
      href: '/Compliance-Safety',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Regulatory Compliance Tracking', 'Safety Incident Management', 'Quality Assurance Workflows', 'Document & Certificate Management', 'Compliance Reporting & Dashboards']
    },
    {
      title: 'Specialized Use Cases',
      description: 'Address Unique Challenges with Purpose-Built Modules',
      href: '/Specialized-Use-Cases',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      features: ['Emergency Response Management', 'Preventive Maintenance Programs', 'Field Sales Enablement', 'Multi-Location & Enterprise Scale', 'Seasonal Demand Planning']
    },
    {
      title: 'B2B Field Service',
      description: 'Enterprise-grade solutions for large-scale operations',
      href: '/B2B-field-services',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Enterprise Integration', 'Advanced Analytics', 'Multi-location Management', 'Custom Workflows', 'Scalable Architecture']
    },
    {
      title: 'B2C Self-Service Portal',
      description: 'Customer-centric design for direct consumer engagement',
      href: '/B2C-Self-Service-Portal',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      features: ['Customer Portal', 'Online Booking', 'Real-time Updates', 'Payment Processing', 'Service History']
    },
    {
      title: 'Scheduling & Dispatching',
      description: 'Streamlined operations for optimal resource allocation',
      href: '/Scheduling-Dispatching',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['Smart Scheduling', 'Route Optimization', 'Real-time Tracking', 'Automated Dispatching', 'Performance Analytics']
    },
    {
      title: 'Invoicing & Payments',
      description: 'End-to-end management of financial transactions',
      href: '/Invoicing-Payments',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: ['Automated Invoicing', 'Payment Processing', 'Financial Reporting', 'Tax Management', 'Revenue Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Solutions Suite
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-4xl mx-auto">
              Comprehensive Field Service Management Solutions
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover our complete range of solutions designed to transform your field service operations. From asset management to customer experience, we have everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link href="/Contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/Pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the solutions that best fit your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3 + 1)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {solution.features.length > 3 && (
                    <div className="text-blue-400 text-sm font-medium">
                      +{solution.features.length - 3} more features
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Field Service Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of field service companies using Fielduo's comprehensive solution suite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link href="/Contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </Link>
            <Link href="/Pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;