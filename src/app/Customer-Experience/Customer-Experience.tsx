'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Customer Experience Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-4xl mx-auto">
              Delight Customers with Self-Service & Proactive Communications
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Elevate every customer interaction by offering transparency, convenience, and reliability. Fielduo's Customer Experience suite ensures you keep customers informed from booking through job completion and beyond.
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

      {/* Key Capabilities Section */}
      <div className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive tools to create exceptional customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Branded Self-Service Portal */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Branded Self-Service Portal</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Allow customers to request services, view appointment windows, and pay invoices online.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Provide real-time job status updates and technician ETA.
                </li>
              </ul>
            </div>

            {/* Proactive Service Recommendations */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proactive Service Recommendations</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automatically suggest routine maintenance or upgrades based on asset age and usage.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Keep customers engaged and equipment running at peak efficiency.
                </li>
              </ul>
            </div>

            {/* Automated Communications */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Communications</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Send customized SMS, email, and in-app notifications for confirmations, reminders, and follow-ups.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Reduce no-shows and last-minute cancellations.
                </li>
              </ul>
            </div>

            {/* SLA Management & Escalations */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SLA Management & Escalations</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Define service levels and response targets.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Trigger automatic escalations for any jobs at risk of breaching SLAs.
                </li>
              </ul>
            </div>

            {/* Customer Satisfaction Insights */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Satisfaction Insights</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Capture post-service surveys and Net Promoter Score (NPS) feedback.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Turn real-time insights into action plans for continuous improvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Fielduo Customer Experience?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Create memorable customer experiences that drive loyalty and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Satisfaction</h3>
              <p className="text-gray-400">Deliver exceptional experiences that keep customers coming back</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Service Portal</h3>
              <p className="text-gray-400">Empower customers with 24/7 access to services and information</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proactive Communication</h3>
              <p className="text-gray-400">Keep customers informed with automated, personalized communications</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data-Driven Insights</h3>
              <p className="text-gray-400">Make informed decisions with comprehensive customer analytics</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Customer Experience Solutions
            </p>
          </div>

          <div className="space-y-8">
            {/* General Questions */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-white mb-6">General Questions</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Is the customer portal branded to my company?</h4>
                  <p className="text-gray-300">Yes, the portal uses your logo, colors, and branding for a seamless customer experience. Customize the interface to match your website and marketing materials.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What can customers do in the self-service portal?</h4>
                  <p className="text-gray-300">Customers can book appointments, view service history, track job progress, pay invoices, access warranties, and communicate with technicians directly.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do customers access the portal?</h4>
                  <p className="text-gray-300">Customers receive login credentials via email or SMS. They can access the portal through any web browser or download the optional customer mobile app.</p>
                </div>
              </div>
            </div>

            {/* Communication Automation */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-6">Communication Automation</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What types of automated messages does Fielduo send?</h4>
                  <p className="text-gray-300">Send appointment confirmations, technician dispatch notifications, ETA updates, service completion alerts, payment reminders, and satisfaction surveys automatically.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I customize message templates?</h4>
                  <p className="text-gray-300">Yes, create custom templates for SMS, email, and in-app notifications. Include merge fields for customer names, appointment details, and technician information.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I handle customers who prefer phone calls?</h4>
                  <p className="text-gray-300">Configure communication preferences per customer. The system can trigger phone call reminders for staff while maintaining automated messages for other customers.</p>
                </div>
              </div>
            </div>

            {/* SLA Management */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-white mb-6">SLA Management</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I set up Service Level Agreements?</h4>
                  <p className="text-gray-300">Define SLAs by customer type, service category, or priority level. Set response times, resolution targets, and escalation rules for different scenarios.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What happens when SLAs are at risk?</h4>
                  <p className="text-gray-300">Fielduo automatically escalates jobs approaching SLA deadlines, notifies managers, and suggests available technicians for immediate dispatch.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track SLA performance over time?</h4>
                  <p className="text-gray-300">Yes, comprehensive SLA reports show performance trends, breach analysis, and customer-specific compliance rates. Use this data to improve service delivery.</p>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-white mb-6">Customer Satisfaction</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How are surveys sent to customers?</h4>
                  <p className="text-gray-300">Surveys are automatically sent via SMS or email after job completion. Timing and frequency are customizable, and multiple follow-up attempts ensure high response rates.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What survey questions should I ask?</h4>
                  <p className="text-gray-300">Fielduo includes proven survey templates covering technician professionalism, job quality, timeliness, and overall satisfaction. Customize questions for your specific needs.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I respond to negative feedback?</h4>
                  <p className="text-gray-300">The system flags low scores for immediate follow-up. Create automated workflows to assign customer recovery tasks and track resolution efforts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Delight Your Customers?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of field service companies using Fielduo to create exceptional customer experiences
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

export default CustomerExperience;