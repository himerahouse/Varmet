"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroImage from "./assets/Images/hero2.jpg";
import { Phone, CheckCircle, Factory } from "lucide-react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="bg-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen">
        {/* Enhanced Background with gradients */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Industrial facility"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Multi-layer gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-emerald-900/10" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="flex flex-col">
            {/* Main Content with enhanced styling */}
            <div className={`text-white max-w-3xl mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              
              {/* Enhanced badge matching about page style */}
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm mb-10 group">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-wider text-white/90">WELCOME TO VARMET</span>
              </div>

              {/* Enhanced headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Environmental
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              {/* Enhanced paragraph */}
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-12 font-light">
                We specialize in delivering innovative, high-quality products
                and services tailored to the needs of businesses across various
                sectors. At VARMET, we are committed to excellence,
                sustainability, and customer satisfaction.
              </p>

              {/* Enhanced CTA button matching about page style */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-100 px-10 py-5
                  text-base font-semibold text-black transition-all duration-300
                  hover:from-blue-50 hover:to-cyan-50 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                <span>Contact us</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Solutions Grid - Enhanced to match about page style */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Solution Card */}
              <div className="group relative bg-gradient-to-br from-blue-900/20 via-blue-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1">
                {/* Icon container */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/20">
                  <CheckCircle className="w-7 h-7 text-blue-400" />
                </div>
                
                {/* Title with gradient */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  Solutions
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  At VARMET, we provide a wide array of industrial and environmental solutions tailored to meet the unique needs.
                </p>
                
                {/* Enhanced Link */}
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300 group/link"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-3 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Production Card */}
              <div className="group relative bg-gradient-to-br from-emerald-900/20 via-emerald-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-8 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/20">
                  <Factory className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Production
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  Innovative and sustainable manufacturing solutions tailored to optimize efficiency and quality.
                </p>
                
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-all duration-300 group/link"
                >
                  View our work
                  <svg className="w-4 h-4 ml-3 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Free Consultation Card */}
              <div className="group relative bg-gradient-to-br from-gray-900/20 via-gray-900/10 to-transparent backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-white/10 to-gray-100/10 border border-white/20">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Free Consultation
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  Get expert advice for your industrial needs. Our team is ready to help you find the perfect solution.
                </p>
                
                {/* Phone number with enhanced styling */}
                <a 
                  href="tel:+359890998827" 
                  className="group/phone relative inline-flex items-center justify-center w-full py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-semibold hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  +359 890 99 88 27
                  <svg className="w-4 h-4 ml-3 transform group-hover/phone:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </a>
                
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

          
          </div>
        </div>
      </section>
    </div>
  );
}