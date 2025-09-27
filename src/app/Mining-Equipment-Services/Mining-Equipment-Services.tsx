'use client';
import React from 'react';
import Link from 'next/link';

const MiningEquipmentServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Mining Equipment Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mining Equipment
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Ensure continuous extraction and haulage with Fielduo's robust Mining Equipment Services. Manage heavy-duty machinery, compliance audits, and safety inspections under one digital roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
            </Link>
            <Link href="/Pricing">
              <button className="border border-gray-600 hover:border-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Overview</h2>
              <p className="text-xl text-gray-300 mb-6">
                Ensure continuous extraction and haulage with Fielduo's robust Mining Equipment Services. Manage heavy-duty machinery, compliance audits, and safety inspections under one digital roof.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Heavy machinery maintenance and safety compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Remote monitoring and telemetry integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Emergency response and asset lifecycle management</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-6xl mb-4">⛏️</div>
              <h3 className="text-2xl font-bold mb-4">Mining Excellence</h3>
              <p className="text-gray-300">
                Streamline mining operations with specialized workflows designed for heavy-duty equipment management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mining equipment management with safety compliance, remote monitoring, and emergency response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Heavy Machinery Maintenance</h3>
              <p className="text-gray-300">Track service intervals for loaders, haul trucks, and crushers with precision scheduling.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Safety & Compliance Checks</h3>
              <p className="text-gray-300">Automated checklists for PPE, pressure vessels, and confined-space permits.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Remote Monitoring</h3>
              <p className="text-gray-300">Telemetry for engine temperature, hydraulic pressure, and vibration analysis.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Asset Lifecycle Management</h3>
              <p className="text-gray-300">Warranty tracking, refurbishment scheduling, and decommissioning workflows.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Emergency Response Workflow</h3>
              <p className="text-gray-300">Rapid mobilization of crews with location-based dispatch and parts availability.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
              <p className="text-gray-300">Real-time dashboards for equipment utilization and maintenance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your mining operations with measurable improvements in throughput, safety, and asset longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Increase Throughput</h3>
              <p className="text-gray-300">Less downtime for critical extraction equipment means higher production output.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enhance Worker Safety</h3>
              <p className="text-gray-300">Standardized inspections and instant hazard reporting protect your workforce.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Extend Asset Life</h3>
              <p className="text-gray-300">Timely overhauls and recoats prevent premature failures and extend equipment life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Frequently Asked Questions about Mining Equipment Services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">How do you ensure safety compliance?</h3>
              <p className="text-gray-300">Customizable checklists for PPE, confined-space permits, and pressure-vessel tests enforce standardized inspections with photo evidence.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">What remote monitoring capabilities exist?</h3>
              <p className="text-gray-300">Telemetry streams engine temperature, vibration, and hydraulic pressure into real-time dashboards with anomaly alerts.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Is there support for emergency breakdowns?</h3>
              <p className="text-gray-300">Yes. Rapid dispatch workflows include location-based crew assignments, parts availability checks, and ETA estimates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Mining Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading mining companies using Fielduo to maximize equipment uptime, enhance safety compliance, and extend asset life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </Link>
            <Link href="/Pricing">
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300">
                View Pricing Plans
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiningEquipmentServicesPage;
