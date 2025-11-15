// pages/healthcare-field-service.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function HealthcareFieldService() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [counters, setCounters] = useState({
    adminTime: 0,
    compliance: 0,
    responseTime: 0,
    clients: 0
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
              if (newCounters.adminTime < 40) newCounters.adminTime += 2;
              if (newCounters.compliance < 98) newCounters.compliance += 3;
              if (newCounters.responseTime < 35) newCounters.responseTime += 2;
              if (newCounters.clients < 500) newCounters.clients += 20;
              
              if (
                newCounters.adminTime >= 40 &&
                newCounters.compliance >= 98 &&
                newCounters.responseTime >= 35 &&
                newCounters.clients >= 500
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
      question: "How does Fielduo optimise scheduling for mobile healthcare teams?",
      answer: "Fielduo uses intelligent routing and automated scheduling to match patients with the right provider, considering location, availability, and skill set. This reduces delays, prevents conflicts, and ensures more patients are seen efficiently."
    },
    {
      question: "Can Fielduo help manage home health and mobile clinic operations?",
      answer: "Yes. The platform unifies home care services, mobile health units, and clinic workflows, providing real-time visibility, centralised communication, and streamlined coordination for all teams."
    },
    {
      question: "How does Fielduo ensure HIPAA compliance and regulatory adherence?",
      answer: "Fielduo tracks all healthcare activities digitally, maintains audit trails, automates compliance reporting, and secures patient data with end-to-end encryption, ensuring full adherence to HIPAA and other healthcare regulations."
    },
    {
      question: "Does Fielduo support emergency response or urgent patient care?",
      answer: "Absolutely. The platform prioritises urgent cases, sends instant notifications, and deploys healthcare teams quickly with optimised routes, improving response times and outcomes for critical patients."
    },
    {
      question: "How are medical equipment, inventory, and supplies managed?",
      answer: "Fielduo provides real-time tracking of assets and equipment, including maintenance schedules, calibration alerts, and usage history, ensuring every resource is ready and available when needed."
    },
    {
      question: "Can Fielduo improve communication between healthcare staff and patients?",
      answer: "Yes. Centralised communication tools allow teams to share care plans, treatment notes, and updates instantly. Patients receive timely notifications, improving transparency and overall experience."
    },
    {
      question: "What measurable benefits can healthcare organisations expect from Fielduo?",
      answer: "Organisations see reduced administrative burden, higher patient satisfaction, faster response times, improved compliance, optimised resource usage, and actionable insights from analytics that drive continuous improvement."
    }
  ];

  const features = [
    {
      title: "Patient Scheduling",
      description: "Optimise home visits and mobile healthcare appointments with intelligent routing.",
      icon: "📅",
      detail: "Reduce delays and scheduling conflicts by automatically matching each patient with the appropriate provider based on factors like urgency, location, availability, and skill match."
    },
    {
      title: "Medical Records Integration",
      description: "Secure, HIPAA-compliant access to patient information and medical histories.",
      icon: "📋",
      detail: "Providers can effortlessly retrieve records from EHR systems in real time while upholding complete privacy controls, guaranteeing that they always have the most recent, accurate patient data."
    },
    {
      title: "Compliance Management",
      description: "Automated tracking of HIPAA compliance and healthcare regulations.",
      icon: "✅",
      detail: "End-to-end compliance monitoring that keeps your company always ready for inspections with integrated audit trails, automatically generated reports, and real-time alerts."
    },
    {
      title: "Equipment Tracking",
      description: "Comprehensive management of mobile medical equipment and supplies.",
      icon: "🔧",
      detail: "With real-time visibility across all mobile units and healthcare teams, you can schedule maintenance, keep an eye on usage, track device locations, and prevent loss."
    },
    {
      title: "Care Coordination",
      description: "Seamless multi-provider service coordination and communication.",
      icon: "👥",
      detail: "By sharing treatment plans, care notes, and patient progress updates, centralised communication guarantees that specialists, nurses, and support staff remain in sync."
    },
    {
      title: "Emergency Response",
      description: "Priority scheduling and rapid response for urgent healthcare needs.",
      icon: "🚨",
      detail: "Providers can reach vital patients more quickly thanks to smart routing, priority alerts, and quick team mobilisation, which enhances response times and results."
    },
    {
      title: "Patient Care Plans",
      description: "Customizable care plans and treatment tracking for improved outcomes.",
      icon: "🏥",
      detail: "Create care plans with ease, update interventions, and monitor patient progress all in one location, guaranteeing reliable and superior treatment."
    },
    {
      title: "Privacy Protection",
      description: "End-to-end data encryption and privacy safeguards for patient information.",
      icon: "🔒",
      detail: "Secure authentication, stringent access controls, and enterprise-grade encryption safeguard private medical information on all devices and processes."
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive reporting on service delivery and patient outcomes.",
      icon: "📊",
      detail: "To assess team performance, gauge the quality of care, spot trends, and maximise operational efficiency, access real-time dashboards and analytics."
    }
  ];

  const advantages = [
    {
      title: "Enhanced Patient Access",
      description: "Using effective routing, provide care to isolated, underserved, and challenging-to-reach locations.",
      icon: "🌍"
    },
    {
      title: "Superior Care Quality",
      description: "Make informed, connected decisions to provide reliable, high-quality healthcare.",
      icon: "❤️"
    },
    {
      title: "Regulatory Compliance",
      description: "Stay compliant with healthcare privacy and safety regulations without manual overhead",
      icon: "📜"
    },
    {
      title: "Smarter Resource Utilisation",
      description: "Optimise workforce, equipment, and time to reduce operational waste.",
      icon: "⚖️"
    },
    {
      title: "Faster Critical Response",
      description: "Respond quickly to urgent cases with intelligent prioritisation tools.",
      icon: "⏱️"
    },
    {
      title: "Actionable Operational Insights",
      description: "Leverage analytics to strengthen performance and improve care delivery.",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      quote: "Fielduo has transformed our home healthcare operations, reducing administrative burden by 40% and improving patient satisfaction scores.",
      author: "Sarah Johnson",
      role: "Director of Nursing",
      organization: "Home Health Services Inc."
    },
    {
      quote: "The compliance features have been invaluable for our mobile clinic network. We've passed every audit with flying colors since implementation.",
      author: "Michael Chen",
      role: "COO",
      organization: "Community Health Outreach"
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 z-0"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 backdrop-blur-sm"
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
          
          {/* Healthcare Equipment Mockups */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform rotate-12">
              <div className="w-full h-8 bg-blue-500 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="flex justify-between">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/3 left-10 opacity-20">
            <div className="w-48 h-48 bg-gray-800 rounded-2xl border-4 border-gray-700 p-4 transform -rotate-12">
              <div className="w-full h-8 bg-teal-500 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
              <div className="flex justify-between">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-900/80 to-teal-900/80 backdrop-blur-sm p-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { value: "40%", label: "Reduction in Admin Time" },
                  { value: "98%", label: "Compliance Accuracy" },
                  { value: "35%", label: "Faster Response Times" },
                  { value: "500+", label: "Healthcare Clients" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
                <span className="text-blue-400 font-medium">Healthcare Excellence</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Healthcare Field Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Management</span> Made Smarter
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Deliver high-quality healthcare services anywhere — home health care services, mobile clinics, emergency medical services, and specialised patient support.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => router.push('/Contact')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                  Request a Demo
                </button>
                <button 
                  onClick={() => router.push('/Contact')}
                  className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Healthcare Service Management Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Comprehensive Healthcare Service System</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Advanced tools engineered for efficient mobile health clinic delivery.
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

        {/* Strategic Advantages Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strengthening Mobile Healthcare Capabilities</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Empower teams to deliver compliant and high-quality care anywhere.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-5xl mb-6">{advantage.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Hear from healthcare leaders who have transformed their operations with Fielduo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-800 p-8">
                  <div className="text-blue-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.organization}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: counters.adminTime, label: "Reduction in Admin Time", suffix: "%" },
                { value: counters.compliance, label: "Compliance Accuracy", suffix: "%" },
                { value: counters.responseTime, label: "Faster Response Times", suffix: "%" },
                { value: counters.clients, label: "Healthcare Clients", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to know about Fielduo’s healthcare management service solutions.
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
        <div className="bg-gradient-to-r from-blue-900/30 via-teal-900/30 to-purple-900/30 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Healthcare Field Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Enhance patient care, streamline operations, and ensure compliance with our specialized healthcare management platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => router.push('/Contact')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20">
                Request a Demo
              </button>
              <button 
                onClick={() => router.push('/Contact')}
                className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/50 font-bold py-4 px-10 rounded-xl transition duration-300">
                Contact Sales
              </button>
            </div>
            <p className="mt-6 text-gray-400">or explore our healthcare solutions</p>
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