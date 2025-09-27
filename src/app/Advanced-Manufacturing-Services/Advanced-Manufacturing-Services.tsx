'use client';
import React from 'react';
import Link from 'next/link';

const AdvancedManufacturingServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Advanced Manufacturing Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Advanced Manufacturing
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Empower your Industry 4.0 transformation with Fielduo's advanced manufacturing FSM, integrating robotics, IoT, and predictive analytics.
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
                Empower your Industry 4.0 transformation with Fielduo's advanced manufacturing FSM, integrating robotics, IoT, and predictive analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Robotics & automation maintenance with smart-sensor networks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Digital twin diagnostics and predictive analytics engine</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Continuous improvement workflows with Kaizen-style tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
              <p className="text-gray-300">
                Streamline advanced manufacturing operations with specialized workflows designed for Industry 4.0 transformation.
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
              Comprehensive advanced manufacturing management with robotics, IoT integration, and predictive analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Robotics & Automation Maintenance</h3>
              <p className="text-gray-300">Scheduling for PLCs, industrial robots, and CNC machines with precision timing.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart-Sensor Network Management</h3>
              <p className="text-gray-300">Health monitoring of vibration, temperature, and load sensors for real-time insights.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Twin Diagnostics</h3>
              <p className="text-gray-300">Virtual models for failure simulation and root-cause analysis.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics Engine</h3>
              <p className="text-gray-300">Machine-learning–driven insights for early fault detection and prevention.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Improvement Workflows</h3>
              <p className="text-gray-300">Kaizen-style event tracking and resolution for ongoing optimization.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry 4.0 Integration</h3>
              <p className="text-gray-300">Seamless integration with IoT, AI, and cloud-based manufacturing systems.</p>
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
              Transform your manufacturing operations with measurable improvements in uptime, innovation, and lifecycle costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maximize Uptime</h3>
              <p className="text-gray-300">Automated alerts prevent unplanned stoppages and ensure continuous production.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Accelerate Innovation</h3>
              <p className="text-gray-300">Data-driven maintenance supports rapid process changes and continuous improvement.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reduce Lifecycle Costs</h3>
              <p className="text-gray-300">Optimized service intervals extend asset performance and reduce total cost of ownership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Frequently Asked Questions about Advanced Manufacturing Services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">What is a digital twin, and how is it used?</h3>
              <p className="text-gray-300">A virtual representation of physical assets that simulates performance and failure modes to inform proactive maintenance.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Which machines can I monitor?</h3>
              <p className="text-gray-300">PLCs, CNCs, industrial robots, motors, pumps, and any IoT-enabled sensor network.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">How does continuous-improvement tracking work?</h3>
              <p className="text-gray-300">Capture Kaizen events, root-cause analyses, and corrective actions in an integrated workflow for ongoing optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading manufacturing companies using Fielduo to maximize uptime, accelerate innovation, and reduce lifecycle costs.
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

export default AdvancedManufacturingServicesPage;
