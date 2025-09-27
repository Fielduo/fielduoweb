'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AssetEquipmentManagement = () => {
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
              Asset & Equipment Management Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 max-w-4xl mx-auto">
              Optimize Your Assets from Day One to Decommission
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Fielduo's Asset & Equipment Management suite gives you complete control over every piece of equipment in your field operations. From installation to retirement, track asset locations, conditions, and service history in a single, easy-to-use dashboard.
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
              Comprehensive tools to manage your assets throughout their entire lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Asset Lifecycle Management */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Asset Lifecycle Management</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Create digital asset records with serial numbers, warranty dates, and contract details.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automate service reminders based on time, usage, or sensor thresholds.
                </li>
              </ul>
            </div>

            {/* Predictive Maintenance */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Maintenance</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Leverage AI algorithms to identify patterns in sensor data and schedule maintenance before breakdowns occur.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Reduce unplanned downtime and optimize maintenance budgets.
                </li>
              </ul>
            </div>

            {/* Equipment History Tracking */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Equipment History Tracking</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  View a unified timeline of inspections, repairs, parts replacements, and technician notes.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Make data-driven decisions with full visibility into past performance.
                </li>
              </ul>
            </div>

            {/* Real-Time Performance Monitoring */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Performance Monitoring</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Connect IoT sensors to monitor temperature, vibration, pressure, and other metrics live.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Customize alerts to trigger mobile notifications when key thresholds are crossed.
                </li>
              </ul>
            </div>

            {/* Warranty & Contract Management */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Warranty & Contract Management</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automatically flag expiring warranties and service contracts.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Integrate entitlement checks into work orders to ensure accurate billing.
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
              Why Choose Fielduo Asset Management?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your asset management with intelligent automation and real-time insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reduce Downtime</h3>
              <p className="text-gray-400">Predict and prevent equipment failures before they happen</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cut Costs</h3>
              <p className="text-gray-400">Optimize maintenance schedules and reduce unnecessary expenses</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-Time Insights</h3>
              <p className="text-gray-400">Monitor equipment performance and health in real-time</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance Ready</h3>
              <p className="text-gray-400">Maintain detailed records for audits and regulatory compliance</p>
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
              Everything you need to know about Asset & Equipment Management
            </p>
          </div>

          <div className="space-y-8">
            {/* General Questions */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-white mb-6">General Questions</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What types of assets can I track with Fielduo's Asset Management?</h4>
                  <p className="text-gray-300">You can track any equipment or asset including HVAC units, electrical panels, generators, pumps, motors, vehicles, tools, and specialized equipment. Each asset gets a unique digital profile with customizable fields for your specific needs.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How do I get started with asset tracking?</h4>
                  <p className="text-gray-300">Simply import your existing asset list via CSV or Excel, or create new asset records directly in Fielduo. Our onboarding team helps with data migration and setup to get you running quickly.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track assets across multiple locations?</h4>
                  <p className="text-gray-300">Yes, Fielduo supports multi-location asset tracking with location-specific reporting and maintenance scheduling. You can view assets by location, region, or globally.</p>
                </div>
              </div>
            </div>

            {/* Asset Lifecycle Management */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-6">Asset Lifecycle Management</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What information can I store for each asset?</h4>
                  <p className="text-gray-300">Store serial numbers, model details, purchase dates, warranty information, installation location, maintenance schedules, service history, and custom fields specific to your industry.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How does automated maintenance scheduling work?</h4>
                  <p className="text-gray-300">Set maintenance intervals based on calendar time (e.g., every 90 days), usage hours, or sensor readings. Fielduo automatically creates work orders and assigns them to qualified technicians.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I track asset depreciation and replacement costs?</h4>
                  <p className="text-gray-300">Yes, enter purchase costs and depreciation schedules to track asset value over time. Generate reports showing when assets approach end-of-life for replacement planning.</p>
                </div>
              </div>
            </div>

            {/* Predictive Maintenance */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-white mb-6">Predictive Maintenance</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">How accurate is predictive maintenance?</h4>
                  <p className="text-gray-300">Our AI algorithms improve over time, typically achieving 85-95% accuracy in predicting maintenance needs after 3-6 months of data collection. Accuracy varies by equipment type and sensor data quality.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What types of sensors work with Fielduo?</h4>
                  <p className="text-gray-300">We integrate with temperature, vibration, pressure, flow, electrical current, and custom IoT sensors. Popular brands include Honeywell, Siemens, and generic IoT devices via API connections.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Do I need special hardware for predictive maintenance?</h4>
                  <p className="text-gray-300">Not necessarily. Start with manual readings and basic sensors, then upgrade to advanced IoT devices as needed. We support both approaches and hybrid configurations.</p>
                </div>
              </div>
            </div>

            {/* Performance Monitoring */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Monitoring</h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I monitor assets in real-time?</h4>
                  <p className="text-gray-300">Yes, connected assets with IoT sensors provide real-time data streams. View live dashboards, set custom alerts, and receive notifications when thresholds are exceeded.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">What happens when sensors go offline?</h4>
                  <p className="text-gray-300">Fielduo alerts you when sensors disconnect and stores the last known readings. Historical data remains accessible, and the system automatically resumes monitoring when connectivity returns.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Can I create custom performance reports?</h4>
                  <p className="text-gray-300">Absolutely. Build custom dashboards and reports using any combination of asset data, performance metrics, and time periods. Export to PDF, Excel, or integrate with BI tools.</p>
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
            Ready to Optimize Your Asset Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of field service companies using Fielduo to streamline their asset operations
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

export default AssetEquipmentManagement;