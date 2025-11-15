// pages/medical-device-services.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function MedicalDeviceServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    uptime: 0,
    compliance: 0,
    efficiency: 0,
    costReduction: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate counters
          const interval = setInterval(() => {
            setCounters(prev => {
              const newCounters = { ...prev };
              if (newCounters.uptime < 99) newCounters.uptime += 1;
              if (newCounters.compliance < 100) newCounters.compliance += 5;
              if (newCounters.efficiency < 40) newCounters.efficiency += 2;
              if (newCounters.costReduction < 25) newCounters.costReduction += 2;
              
              if (
                newCounters.uptime >= 99 &&
                newCounters.compliance >= 100 &&
                newCounters.efficiency >= 40 &&
                newCounters.costReduction >= 25
              ) {
                clearInterval(interval);
              }
              
              return newCounters;
            });
          }, 50);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly does Fielduo offer for medical device service management?",
      answer: "Fielduo offers a comprehensive field service software solution for medical equipment manufacturers and healthcare facilities, featuring asset tracking, IoT monitoring, AI-powered scheduling, compliance documentation, technician management, and preventive maintenance."
    },
    {
      question: "How does Fielduo help reduce scheduling errors for medical device services?",
      answer: "Fielduo uses AI to automatically assign technicians based on their skills, location, and certification, reducing mis-assignments and scheduling conflicts."
    },
    {
      question: "Can Fielduo support regulatory compliance for medical devices (FDA, ISO, etc.)",
      answer: "Fielduo provides automated compliance tracking, digital audit trails, and technician certification verification to ensure you meet FDA, ISO, and healthcare regulations."
    },
    {
      question: "Is the software able to monitor device performance in real time?",
      answer: "The platform offers IoT device monitoring and real-time analytics to track usage, detect anomalies, predict failures, and manage services proactively."
    },
    {
      question: "What happens when a device fails or a critical issue arises?",
      answer: "Fielduo’s emergency response and rapid dispatch module prioritises critical failures, offering real-time notifications and faster technician deployment to minimise downtime."
    },
    {
      question: "Does Fielduo handle asset lifecycle and preventive maintenance for medical equipment?",
      answer: "The software provides full lifecycle management—from installation to retirement—along with preventive maintenance scheduling based on usage and device condition, optimising costs and extending equipment life."
    },
    {
      question: "How quickly can we implement Fielduo and see benefits in our medical device service operations?",
      answer: "Implementation time varies by scale and complexity, but many medical device servicing teams report improvements, such as reduced downtime and better scheduling, within months of deployment."
    }
  ];

  const features = [
    {
      title: "Regulatory Compliance",
      description: "FDA and Healthcare regulation alignment",
      icon: "📋",
      detail: "Healthcare compliance software that automates FDA tracking, maintains secure audit records, and alerts you before audits and critical compliance dates."
    },
    {
      title: "Preventive Maintenance",
      description: "Effective scheduling to prevent unexpected breakdowns.",
      icon: "🔧",
      detail: "AI-powered scheduling minimises errors and downtime. IoT sensors monitor equipment health for proactive maintenance, prioritised by device criticality and usage."
    },
    {
      title: "Certification Management",
      description: "Ensure certified experts handle every device.",
      icon: "📜",
      detail: "Track technician certifications and renewals, flag unqualified techs, and receive automated alerts for expiring credentials!"
    },
    {
      title: "Emergency Service",
      description: "Monitor every phase with real-time insights.",
      icon: "🚨",
      detail: "Improve your planning and budgeting with detailed lifecycle analytics. This will help you make informed decisions and drive project success."
    },
    {
      title: "Documentation Requirements",
      description: "Real-Time Alerts for Faster Critical Response",
      icon: "📄",
      detail: "Prioritise critical failures with real-time notifications to minimise downtime and enhance collaboration among technicians, service teams, and clinicians."
    },
    {
      title: "Asset Management",
      description: "Smart analytics that optimise device usage and lifespan",
      icon: "🏥",
      detail: "Monitor device health with an intuitive dashboard. Use predictive analytics to catch early issues and track key KPIs for informed repair and upgrade decisions. We're here to help."
    }
  ];

  const benefits = [
    {
      title: "Patient Safety",
      description: "Ensure accurate equipment performance and timely maintenance to optimise operational efficiency.Achieve a 99% improvement in device reliability.",
      icon: "❤️",
      stat: "99%",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure alignment with FDA guidelines, ISO standards, and healthcare quality requirements.We consistently achieve a 100% compliance rate.",
      icon: "✅",
      stat: "100%",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Minimize Downtime",
      description: "Quick response times, proactive monitoring, and streamlined workflows have led to a 40% reduction in equipment downtime.",
      icon: "⏱️",
      stat: "40%",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Cost Control",
      description: "Predictive maintenance and optimised resource allocation can lead to savings of 20-30% in operational and maintenance expenses..",
      icon: "💰",
      stat: "25%",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Mouse Follower Effect */}
        <div 
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            opacity: 0.5
          }}
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: 'blur(40px)',
                  animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Medical Device Mockups */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-green-500 rounded"></div>
            </div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform -rotate-12">
              <div className="w-full h-8 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="w-full h-6 bg-green-500 rounded"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Healthcare Industry Solution</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Medical Device <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span> Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Smart field service management software for healthcare and device manufacturers using AI-powered scheduling to reduce scheduling errors and downtime.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => router.push('/Contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Schedule a Demonstration
                </button>
                <button 
                  onClick={() => router.push('/Contact')}
                  className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Speak with our healthcare solutions team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Device Features Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Device Service Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Tailored technology that lifts your device management operations from reactive to strategic.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredFeature === index ? 'border-blue-500 shadow-xl shadow-blue-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Healthcare Service Benefits Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Service Benefits</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Achieving significant improvements in patient safety, operational uptime, and regulatory compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-5xl mb-6 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 mb-6">{benefit.description}</p>
                  <div className="text-4xl font-bold text-blue-400">
                    {benefit.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Device Services — FAQs</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Common questions about our medical device management solutions
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`mb-6 rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeFaq === index 
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-blue-500/30 shadow-xl shadow-blue-500/10' 
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/30 transition duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium flex items-center">
                      <span className="text-blue-400 mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeFaq === index ? 'rotate-180 text-blue-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Medical Device Service Productivity</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Improve response times, ensure safety, and simplify daily operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => router.push('/Contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Schedule a Demonstration
              </button>
              <button 
                onClick={() => router.push('/Contact')}
                className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Speak with our healthcare solutions team
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}