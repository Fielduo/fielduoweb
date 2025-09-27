'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BusinessOperations = () => {
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
              Business Operations Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-4xl mx-auto">
              Streamline Back-Office Processes & Drive Profitability
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Centralize your financial, inventory, and contract workflows in one platform. Fielduo's Business Operations tools eliminate manual tasks, minimize errors, and give you real-time insights into your bottom line.
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
              Comprehensive tools to streamline your business operations and maximize profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic Revenue Optimization */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dynamic Revenue Optimization</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Use tiered pricing, upsell prompts, and discount workflows to maximize job value.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Analyze profitability by customer, job type, and region in intuitive dashboards.
                </li>
              </ul>
            </div>

            {/* Contract & Recurring Billing Management */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contract & Recurring Billing Management</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Create and manage service agreements, maintenance contracts, and subscription plans.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automate renewals, invoicing, and payment reminders.
                </li>
              </ul>
            </div>

            {/* Inventory & Parts Control */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inventory & Parts Control</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Track parts usage, set reorder thresholds, and manage supplier catalogs.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Allocate inventory to specific jobs or regions to prevent stockouts.
                </li>
              </ul>
            </div>

            {/* Financial Management & Reporting */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Financial Management & Reporting</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Integrate with your accounting system for seamless P&L, balance sheet, and tax reports.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Drill down into job costing, labor expenses, and material margins.
                </li>
              </ul>
            </div>

            {/* Project & Job Coordination */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Project & Job Coordination</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Plan multi-phase projects with Gantt-style timelines and milestone tracking.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Coordinate resources across locations for large-scale deployments.
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
              Why Choose Fielduo Business Operations?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Streamline operations and maximize profitability with intelligent business management tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Revenue Growth</h3>
              <p className="text-gray-400">Optimize pricing and identify upsell opportunities to increase revenue</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Billing</h3>
              <p className="text-gray-400">Streamline contract management and recurring billing processes</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Inventory</h3>
              <p className="text-gray-400">Optimize inventory levels and prevent stockouts with intelligent tracking</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Insights</h3>
              <p className="text-gray-400">Get real-time financial data and comprehensive reporting</p>
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
              Everything you need to know about Business Operations Solutions
            </p>
          </div>

          <div className="space-y-8">
            {/* General Questions */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-white mb-6">General Questions</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does Fielduo help improve profitability?</h4>
                  <p className="text-gray-300">Through dynamic pricing optimization, automated upselling, efficient scheduling, and detailed profitability analytics by job, customer, and service type.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I integrate with my existing accounting software?</h4>
                  <p className="text-gray-300">Yes, Fielduo integrates with QuickBooks, Xero, Sage, and other major accounting platforms. Financial data syncs automatically to eliminate double entry.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does contract management work?</h4>
                  <p className="text-gray-300">Create service agreements with recurring billing schedules, automatic renewals, and payment terms. Track contract performance and send renewal notifications automatically.</p>
                </div>
              </div>
            </div>

            {/* Revenue Optimization */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-6">Revenue Optimization</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What is dynamic pricing?</h4>
                  <p className="text-gray-300">Set pricing rules that adjust based on factors like demand, technician availability, service complexity, or customer tier. Maximize revenue while staying competitive.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does the upselling feature work?</h4>
                  <p className="text-gray-300">Configure smart prompts that suggest relevant services or products based on the current job, equipment age, or service history. Technicians see recommendations in real-time.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track which pricing strategies work best?</h4>
                  <p className="text-gray-300">Yes, detailed analytics show conversion rates, average job values, and profitability by pricing strategy. A/B test different approaches and optimize over time.</p>
                </div>
              </div>
            </div>

            {/* Inventory Management */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-white mb-6">Inventory Management</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does inventory tracking integrate with jobs?</h4>
                  <p className="text-gray-300">Parts are automatically allocated to work orders and deducted from inventory when jobs are completed. Track usage by technician, job type, and location.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I set automatic reorder points?</h4>
                  <p className="text-gray-300">Yes, configure minimum stock levels for each part. When inventory falls below the threshold, the system creates purchase orders or sends alerts to procurement staff.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I handle inventory across multiple warehouses?</h4>
                  <p className="text-gray-300">Track inventory by location with inter-warehouse transfers, location-specific reorder points, and consolidated reporting across all facilities.</p>
                </div>
              </div>
            </div>

            {/* Financial Reporting */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-white mb-6">Financial Reporting</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What financial reports are available?</h4>
                  <p className="text-gray-300">Generate P&L statements, job profitability analysis, technician performance reports, customer lifetime value analysis, and custom financial dashboards.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track job costs in real-time?</h4>
                  <p className="text-gray-300">Yes, monitor labor, materials, and overhead costs as jobs progress. Compare actual costs to estimates and identify profitable service lines.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does tax reporting work?</h4>
                  <p className="text-gray-300">Fielduo tracks tax obligations by jurisdiction and service type. Generate tax reports and integrate with accounting software for compliance and filing.</p>
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
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of field service companies using Fielduo to optimize their business operations
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

export default BusinessOperations;