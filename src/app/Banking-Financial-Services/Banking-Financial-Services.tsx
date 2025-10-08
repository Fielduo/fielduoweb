'use client';
import React from 'react';
import Link from 'next/link';

const BankingFinancialServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center bg-blue-900 bg-opacity-50 px-4 py-2 rounded-full mb-8">
            <span className="text-blue-300 text-sm font-semibold">Banking & Financial Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Banking & Financial
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Deliver bullet-proof uptime for ATM networks and payment infrastructure with Fielduo's FSM tailored for financial institutions.
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
                Deliver bullet-proof uptime for ATM networks and payment infrastructure with Fielduo's FSM tailored for financial institutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">ATM cash & hardware servicing with security incident management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Compliance & audit trails for PCI-DSS, SOX, and banking regulations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">High-priority dispatch with AI-driven triage for critical outages</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-4">Financial Services Excellence</h3>
              <p className="text-gray-300">
                Streamline banking operations with specialized workflows designed for financial institutions and payment infrastructure.
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
              Comprehensive banking infrastructure management with security, compliance, and high-priority dispatch capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏧</span>
              </div>
              <h3 className="text-xl font-bold mb-3">ATM Cash & Hardware Servicing</h3>
              <p className="text-gray-300">Schedule cash replenishment, software patches, and dispenser calibrations.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Security Incident Management</h3>
              <p className="text-gray-300">Integrated alarm monitoring, tamper alerts, and centralized incident logs.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance & Audit Trails</h3>
              <p className="text-gray-300">PCI-DSS, SOX, and local banking regulator reporting with automated documentation.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Technician Credentialing</h3>
              <p className="text-gray-300">Digital badge verification and background-check status management.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">High-Priority Dispatch</h3>
              <p className="text-gray-300">AI-driven triage for critical outages with fastest response crew assignments.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cash Management</h3>
              <p className="text-gray-300">Real-time cash status dashboards and optimized replenishment routes.</p>
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
              Transform your banking operations with measurable improvements in customer trust, fraud prevention, and cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maintain Customer Trust</h3>
              <p className="text-gray-300">Minimize ATM downtime and transaction failures for seamless customer experience.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reduce Fraud Risk</h3>
              <p className="text-gray-300">Instant alerts for skimming and tamper events protect your customers and assets.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Optimize Field Costs</h3>
              <p className="text-gray-300">Dynamic routing to consolidate cash-replenishment runs and reduce operational expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Frequently Asked Questions about Banking & Financial Services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">How do you secure sensitive data?</h3>
              <p className="text-gray-300">Data is encrypted in transit and at rest, with PCI-DSS and SOX compliance modules, plus role-based access controls.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">What does high-priority dispatch mean?</h3>
              <p className="text-gray-300">AI-driven triage assigns fastest response crews to critical ATM or terminal outages based on location and severity.</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Can I manage cash levels across my ATM network?</h3>
              <p className="text-gray-300">Yes. Real-time cash-status dashboards show fill levels, forecast depletion dates, and optimize replenishment routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Banking Infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions using Fielduo to maintain customer trust, reduce fraud risk, and optimize field operations.
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

export default BankingFinancialServicesPage;
