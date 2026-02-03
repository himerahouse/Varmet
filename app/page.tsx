"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroImage from "./assets/Images/hero2.jpg";
import { FeatureStrip } from "./components/FeatureStrip";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="bg-black overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen">
        {/* Enhanced Background with more depth */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Industrial facility"
            fill
            priority
            className="object-cover scale-110"
            quality={100}
          />
          
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-emerald-900/5" />
          
          {/* Animated light beams */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" />
          
          {/* Dynamic floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                }}
              />
            ))}
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[80px] animate-pulse-slower" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-[60px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-28">
          {/* Main Content with glass effect container */}
          <div className="flex flex-col">
            
            {/* Text Content with glass-morphism card */}
            <div className={`relative max-w-3xl mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Glass background for text */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-black/30" />
              
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                {/* Enhanced badge with glow */}
                <div className="mb-6 sm:mb-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/15 shadow-lg">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse shadow-glow-blue" />
                  <span className="text-sm font-bold tracking-[0.3em] text-white/95 uppercase">
                    INDUSTRIAL EXCELLENCE
                  </span>
                </div>

                {/* Enhanced headline with gradient borders */}
                <div className="relative mb-6 sm:mb-8">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                    <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent pb-2">
                      Environmental
                    </span>
                    <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-blue-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                      Solutions
                    </span>
                  </h1>
                  
                  {/* Decorative underline */}
                  <div className="mt-4 sm:mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                </div>

                {/* Enhanced paragraph with subtle animation */}
                <div className="relative mb-8 sm:mb-10">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light tracking-wide">
                    We specialize in delivering <span className="font-semibold text-white">innovative, high-quality</span> products
                    and services tailored to the needs of businesses across various
                    sectors. At <span className="font-bold text-white">VARMET</span>, we are committed to{" "}
                    <span className="font-semibold text-white">excellence, sustainability,</span> and{" "}
                    <span className="font-semibold text-white">customer satisfaction.</span>
                  </p>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -right-4 top-1/4 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-spin-slow" />
                  <div className="absolute -left-2 bottom-1/4 w-6 h-6 border border-emerald-400/20 rounded-full animate-pulse" />
                </div>

                {/* Enhanced CTA button with 3D effect */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center rounded-2xl 
                    bg-gradient-to-r from-white to-gray-100 px-8 py-4 sm:px-10 sm:py-5
                    text-base sm:text-lg font-bold text-black transition-all duration-500
                    hover:from-blue-50 hover:to-emerald-50 hover:scale-[1.03] hover:shadow-2xl
                    active:scale-[0.98] transform-gpu w-full sm:w-auto
                    shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                >
                  {/* Button glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started Today
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Animated border */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </Link>

                
              </div>
            </div>

            {/* FeatureStrip with enhanced container */}
            <div className={`relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              {/* Glow behind FeatureStrip */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 blur-2xl rounded-3xl" />
              
              <div className="relative z-10">
                <div className="lg:max-w-6xl mx-auto">
                  <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
                    <FeatureStrip />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}