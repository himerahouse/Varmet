"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import aboutImage from "../assets/Images/about.jpg";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 shadow-sm backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">WHO WE ARE</span>
            </div>
            
            {/* Enhanced title with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                VARMET
              </span>
            </h1>
            
            {/* Enhanced paragraph */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              Your trusted partner for industrial and environmental solutions. We specialize in 
              delivering high-quality products and services that meet the needs of businesses 
              across various sectors.
            </p>
            
            {/* Enhanced button */}
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-5
                  text-base font-semibold text-white transition-all duration-300
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                <span>Contact us</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative divider */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Column - Enhanced Content */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {/* Enhanced section header */}
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  OUR MISSION
                </span>
              </div>
              
              {/* Enhanced title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Building
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Sustainable Futures
                </span>
              </h2>
              
              {/* Enhanced content */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg font-light">
                  Welcome to VARMET, your trusted partner for industrial and environmental solutions. 
                  We deliver high-quality products and services that meet the needs of businesses 
                  across various sectors.
                </p>
                
                <p className="text-gray-700">
                  Our team is dedicated to practical engineering, reliable delivery, and long-term 
                  partnerships that drive measurable progress.
                </p>
              </div>

              {/* Enhanced Capabilities Section */}
              <div className="mt-16">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Our Approach</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { title: "Solutions", value: "Industrial", color: "from-blue-500 to-cyan-500", bg: "bg-gradient-to-br from-blue-50 to-cyan-50" },
                    { title: "Focus", value: "Sustainability", color: "from-emerald-500 to-teal-500", bg: "bg-gradient-to-br from-emerald-50 to-teal-50" },
                    { title: "Quality", value: "High Standards", color: "from-gray-600 to-gray-700", bg: "bg-gradient-to-br from-gray-50 to-gray-100" },
                    { title: "Support", value: "Consulting", color: "from-violet-500 to-purple-500", bg: "bg-gradient-to-br from-violet-50 to-purple-50" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group relative ${item.bg} rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    >
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: item.color.includes('blue') ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : item.color.includes('emerald') ? 'linear-gradient(135deg, #10b981, #0d9488)' : item.color.includes('gray') ? 'linear-gradient(135deg, #4b5563, #374151)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }} />
                      <div className="flex flex-col">
                        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                          {item.title}
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact CTA */}
              <div className="mt-16">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center rounded-2xl 
                    bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-5
                    text-base font-semibold text-white transition-all duration-300
                    hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                    shadow-lg"
                >
                  Start Your Project With Us
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Column - Enhanced Image Section */}
            <div className={`space-y-8 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {/* Enhanced Image Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={aboutImage}
                      alt="VARMET Industrial Solutions"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Enhanced Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white">
                      <p className="text-sm font-medium opacity-90 mb-2">Trusted Industrial Partner</p>
                      <p className="text-2xl font-bold">Quality Solutions Since Inception</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Experience Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Expert</div>
                  <div className="text-sm text-gray-600">Team</div>
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Reliable</div>
                  <div className="text-sm text-gray-600">Service</div>
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
              </div>

              {/* Enhanced Why Choose Section */}
              <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-2xl p-8 border border-blue-100/50 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                  Why Choose VARMET
                </h4>
                <ul className="space-y-5">
                  {[
                    "Tailored solutions for your specific needs",
                    "Commitment to quality and sustainability",
                    "Dedicated customer support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1 mr-4 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                          <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className={`mx-auto max-w-5xl px-6 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">GET STARTED</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Partner With Us
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Let's work together to find the right solutions for your industrial and environmental needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 
                text-base font-semibold text-white transition-all duration-300
                hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg inline-flex items-center justify-center"
            >
              Contact Our Team
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/products"
              className="group relative px-10 py-5 rounded-2xl bg-white border-2 border-gray-300
                text-base font-semibold text-gray-900 transition-all duration-300
                hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50
                hover:scale-[1.02] hover:shadow-xl inline-flex items-center justify-center"
            >
              View Products
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}