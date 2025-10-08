'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SpecializedUseCases = () => {
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
              Specialized Use Case Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-4xl mx-auto">
              Address Unique Challenges with Purpose-Built Modules
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Tackle specialized workflows and high-priority scenarios with Fielduo's flexible, role-based features. From emergencies to seasonal peaks, ensure your team is always ready to deliver.
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
              Purpose-built solutions for specialized field service scenarios and unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency Response Management */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Emergency Response Management</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Activate rapid-dispatch workflows with pre-configured priority levels.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Coordinate multi-team responses with real-time status updates and SLA enforcement.
                </li>
              </ul>
            </div>

            {/* Preventive Maintenance Programs */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Preventive Maintenance Programs</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Design recurring maintenance schedules by calendar, meter readings, or usage.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automate work order creation and technician assignments for routine checks.
                </li>
              </ul>
            </div>

            {/* Field Sales Enablement */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Field Sales Enablement</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Equip technicians with digital catalogs, guided quoting, and mobile payment capture.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Increase on-site upsell and improve customer convenience.
                </li>
              </ul>
            </div>

            {/* Multi-Location & Enterprise Scale */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Location & Enterprise Scale</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Standardize processes and share resources across offices, warehouses, and regions.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Roll out updates, permissions, and workflows from a centralized admin console.
                </li>
              </ul>
            </div>

            {/* Seasonal Demand Planning */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seasonal Demand Planning</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Forecast seasonal demand spikes and scale workforce and inventory accordingly.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Avoid over-staffing during slow periods with demand-based scheduling rules.
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
              Why Choose Fielduo Specialized Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Address unique challenges with purpose-built modules designed for specific scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emergency Ready</h3>
              <p className="text-gray-400">Rapid response capabilities for critical situations</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Preventive Care</h3>
              <p className="text-gray-400">Automated maintenance programs to prevent issues</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sales Growth</h3>
              <p className="text-gray-400">Enable field teams to drive revenue with mobile sales tools</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Scale</h3>
              <p className="text-gray-400">Manage complex multi-location operations efficiently</p>
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
              Everything you need to know about Specialized Use Case Solutions
            </p>
          </div>

          <div className="space-y-8">
            {/* Emergency Response */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-white mb-6">Emergency Response</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How fast can emergency jobs be dispatched?</h4>
                  <p className="text-gray-300">Emergency workflows can dispatch qualified technicians within minutes. The system identifies the closest available technicians and sends automatic notifications.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I set different priority levels for emergencies?</h4>
                  <p className="text-gray-300">Yes, configure multiple priority levels (Critical, High, Medium, Low) with different response time requirements and escalation procedures.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I track emergency response performance?</h4>
                  <p className="text-gray-300">Comprehensive reporting shows response times, resolution rates, and SLA compliance for emergency jobs. Use this data to improve emergency procedures.</p>
                </div>
              </div>
            </div>

            {/* Preventive Maintenance */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-6">Preventive Maintenance</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I set up recurring maintenance schedules?</h4>
                  <p className="text-gray-300">Create maintenance templates with recurring intervals based on calendar time, equipment usage hours, or meter readings. The system automatically generates work orders.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can customers see their maintenance schedules?</h4>
                  <p className="text-gray-300">Yes, customers can view upcoming maintenance appointments and history through their self-service portal. They can also request schedule changes online.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does preventive maintenance reduce costs?</h4>
                  <p className="text-gray-300">Regular maintenance prevents costly emergency repairs and extends equipment life. Analytics show cost savings and ROI from your preventive maintenance programs.</p>
                </div>
              </div>
            </div>

            {/* Field Sales */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-white mb-6">Field Sales</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do technicians access product catalogs in the field?</h4>
                  <p className="text-gray-300">The mobile app includes searchable product catalogs with photos, specifications, and pricing. Technicians can generate quotes and process payments on-site.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track upselling performance?</h4>
                  <p className="text-gray-300">Yes, reports show upselling success rates by technician, service type, and customer segment. Use this data to improve sales training and incentive programs.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How are field sales integrated with inventory?</h4>
                  <p className="text-gray-300">Sales automatically update inventory levels and trigger reorder processes. Integration with accounting systems ensures accurate revenue recognition.</p>
                </div>
              </div>
            </div>

            {/* Multi-Location Management */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-white mb-6">Multi-Location Management</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I standardize processes across locations?</h4>
                  <p className="text-gray-300">Create standardized workflows, forms, and procedures that apply to all locations. Configure location-specific variations where needed while maintaining consistency.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I share resources between locations?</h4>
                  <p className="text-gray-300">Yes, transfer technicians, vehicles, and inventory between locations as needed. Track resource utilization and costs across your entire organization.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does reporting work for multi-location businesses?</h4>
                  <p className="text-gray-300">Generate consolidated reports across all locations or drill down to specific facilities. Compare performance metrics and identify best practices to replicate.</p>
                </div>
              </div>
            </div>

            {/* Seasonal Planning */}
            <div data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-2xl font-bold text-white mb-6">Seasonal Planning</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does demand forecasting work?</h4>
                  <p className="text-gray-300">The system analyzes historical data to predict seasonal demand patterns. Use forecasts to plan staffing, inventory, and capacity for peak and off-peak periods.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I hire temporary staff for busy seasons?</h4>
                  <p className="text-gray-300">Yes, easily onboard seasonal workers with temporary access and simplified workflows. Track seasonal staff performance and costs separately from full-time employees.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I optimize pricing for seasonal demand?</h4>
                  <p className="text-gray-300">Configure dynamic pricing rules that adjust rates based on demand levels, resource availability, and seasonal factors. Maximize revenue during peak periods while remaining competitive.</p>
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
            Ready to Address Your Unique Challenges?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of field service companies using Fielduo's specialized solutions for their unique needs
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

export default SpecializedUseCases;