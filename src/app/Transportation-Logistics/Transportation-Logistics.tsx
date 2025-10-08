'use client';
import React from 'react';
import Link from 'next/link';

const TransportationLogisticsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Transportation & Logistics</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transportation &
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Logistics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Optimize fleet readiness and warehouse operations with Fielduo's Transportation & Logistics solution, designed for the speed and scale of modern supply chains.
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
                Optimize fleet readiness and warehouse operations with Fielduo's Transportation & Logistics solution, designed for the speed and scale of modern supply chains.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Fleet maintenance schedules with telematics integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Warehouse equipment servicing and route optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Real-time asset tracking and breakdown recovery workflows</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-6xl mb-4">🚛</div>
              <h3 className="text-2xl font-bold mb-4">Transportation Excellence</h3>
              <p className="text-gray-300">
                Streamline transportation operations with specialized workflows designed for fleet and warehouse management.
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
              Comprehensive transportation and logistics management with fleet optimization, warehouse automation, and real-time tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fleet Maintenance Schedules</h3>
              <p className="text-gray-300">Engine diagnostics, brake inspections, and telematics integration for optimal fleet health.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Warehouse Equipment Servicing</h3>
              <p className="text-gray-300">Pallet jacks, conveyors, and automated storage/retrieval system (AS/RS) maintenance.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Route Optimization Engine</h3>
              <p className="text-gray-300">Minimize miles driven with AI-powered scheduling and dynamic route planning.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Asset Tracking</h3>
              <p className="text-gray-300">GPS-based location updates and geofencing alerts for complete visibility.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Breakdown & Recovery Workflow</h3>
              <p className="text-gray-300">Rapid dispatch and parts logistics for roadside assistance and emergency repairs.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
              <p className="text-gray-300">End-to-end tracking and performance analytics for operational optimization.</p>
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
              Transform your transportation operations with measurable improvements in delivery reliability, cost efficiency, and operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maximize Delivery Reliability</h3>
              <p className="text-gray-300">Fewer breakdowns and on-time performance ensure customer satisfaction and business continuity.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lower Repair Costs</h3>
              <p className="text-gray-300">Proactive maintenance reduces emergency service calls and extends vehicle life.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Improve Visibility</h3>
              <p className="text-gray-300">End-to-end tracking and performance analytics provide complete operational insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Frequently Asked Questions about Transportation & Logistics</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">How is fleet telematics integrated?</h3>
              <p className="text-gray-300">We connect via OBD-II or OEM APIs to ingest GPS, engine faults, fuel levels, and driving behavior data.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">What route-optimization algorithms are used?</h3>
              <p className="text-gray-300">AI-powered solvers minimize total travel time, balance workloads, and accommodate traffic, driver hours, and vehicle capacity.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Can I track warehouse equipment maintenance?</h3>
              <p className="text-gray-300">Yes. Schedule services for conveyors, forklifts, AGVs, and AS/RS units with parts tracking and downtime logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Transportation Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading transportation companies using Fielduo to maximize delivery reliability, reduce costs, and improve operational visibility.
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

export default TransportationLogisticsPage;
