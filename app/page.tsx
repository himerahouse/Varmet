"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroImage from "./assets/Images/hero2.jpg";
import { FeatureStrip } from "./components/FeatureStrip";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Just load animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="bg-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Industrial facility"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
          <div className="absolute inset-0 [background:radial-gradient(1200px_circle_at_30%_25%,rgba(255,255,255,0.12),transparent_50%)]" />
          
          {/* Subtle light effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-400/3 rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          {/* Main Content */}
          <div className="flex flex-col">
            
            {/* Text Content with enhanced styling */}
            <div className={`text-white max-w-3xl mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Enhanced badge */}
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.28em] text-white/90 sm:text-sm">
                  WELCOME TO VARMET
                </span>
              </div>

              {/* Enhanced headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4 sm:mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Environmental
                </span>
                <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-blue-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              {/* Enhanced paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-light tracking-wide">
                We specialize in delivering innovative, high-quality products
                and services tailored to the needs of businesses across various
                sectors. At VARMET, we are committed to excellence,
                sustainability, and customer satisfaction.
              </p>

              {/* Enhanced button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-100 px-6 py-3 sm:px-8 sm:py-4
                  text-sm sm:text-base font-semibold text-black transition-all duration-300
                  hover:from-white hover:to-blue-50 hover:scale-[1.02]
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-full sm:w-auto"
              >
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100/20 to-emerald-100/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1.5 transition-transform" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* FeatureStrip with enhanced animation */}
            <div className={`mb-20 sm:mb-24 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="lg:max-w-5xl mx-auto">
                <FeatureStrip />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}