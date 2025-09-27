'use client';
import React from 'react';
import Link from 'next/link';

const WindTurbineRenewableEnergyMaintenancePage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Wind Turbine & Renewable Energy Maintenance</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Wind Turbine & Renewable
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Energy Maintenance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Keep your renewable assets generating at maximum efficiency with Fielduo's specialized solution for wind, solar, and hydro installations.
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
                Keep your renewable assets generating at maximum efficiency with Fielduo's specialized solution for wind, solar, and hydro installations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Multibrand turbine inspections and drone-assisted blade scans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Predictive analytics and environmental compliance tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Service contract management with tiered SLAs</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-6xl mb-4">🌪️</div>
              <h3 className="text-2xl font-bold mb-4">Renewable Energy Excellence</h3>
              <p className="text-gray-300">
                Streamline renewable energy operations with specialized workflows designed for wind, solar, and hydro installations.
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
              Comprehensive renewable energy maintenance with drone inspections, predictive analytics, and environmental compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Multibrand Turbine Inspections</h3>
              <p className="text-gray-300">Standardized checklists for blades, gearboxes, and controllers across all major brands.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚁</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Drone-Assisted Blade Scans</h3>
              <p className="text-gray-300">High-resolution imagery for crack detection and erosion mapping.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">Vibration, temperature, and power-output trend analysis for early fault detection.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Compliance Tracking</h3>
              <p className="text-gray-300">Document emissions offsets and wildlife impact studies for regulatory compliance.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Service Contract Management</h3>
              <p className="text-gray-300">Tiered SLAs for uptime guarantees and performance-based maintenance.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Yield Optimization</h3>
              <p className="text-gray-300">Maximize power generation through proactive maintenance and performance monitoring.</p>
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
              Transform your renewable energy operations with measurable improvements in energy yield, cost efficiency, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maximize Energy Yield</h3>
              <p className="text-gray-300">Proactive repairs prevent derating and ensure maximum power generation.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reduce O&M Costs</h3>
              <p className="text-gray-300">Efficient routing and combined work orders minimize operational expenses.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ensure Regulatory Compliance</h3>
              <p className="text-gray-300">Simplified reporting for incentives and tax credits with automated documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Frequently Asked Questions about Wind Turbine & Renewable Energy Maintenance</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">How are drone inspections handled?</h3>
              <p className="text-gray-300">Drones upload high-res imagery directly to Fielduo, which auto-indexes faults for blade, gearbox, and tower inspections.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">What analytics do you provide?</h3>
              <p className="text-gray-300">Vibration-trend analysis, power-output deviation tracking, and environmental-compliance reporting via built-in dashboards.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Can service contracts be tiered?</h3>
              <p className="text-gray-300">Yes. Define multilevel SLAs with uptime guarantees, response windows, and penalty rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Renewable Energy Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading renewable energy companies using Fielduo to maximize energy yield, reduce O&M costs, and ensure regulatory compliance.
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

export default WindTurbineRenewableEnergyMaintenancePage;
