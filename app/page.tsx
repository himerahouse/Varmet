"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import heroImage from "./assets/Images/hero2.jpg";
import { FeatureStrip } from "./components/FeatureStrip";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Disable scrolling on desktop only
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      if (mq.matches) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.documentElement.style.height = "100vh";
        document.body.style.height = "100vh";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.documentElement.style.height = "";
        document.body.style.height = "";
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-black">
      {/* HERO: 100vh */}
      <section className="relative h-[100vh] w-full overflow-auto lg:overflow-hidden">
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
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
          <div className="absolute inset-0 [background:radial-gradient(1200px_circle_at_30%_25%,rgba(255,255,255,0.12),transparent_50%)]" />
          
          {/* Subtle light effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-400/3 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid layout */}
          <div className="grid h-full grid-rows-[auto_auto_1fr] pt-12 sm:pt-16 md:pt-20">
            {/* Top text with enhanced styling */}
            <div className={`transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="max-w-2xl text-white">
                {/* Enhanced badge */}
                <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold tracking-[0.28em] text-white/90 sm:text-sm">
                    WELCOME TO VARMET
                  </span>
                </div>

                {/* Enhanced headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                    Environmental
                  </span>
                  <span className="block mt-3 bg-gradient-to-r from-blue-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>

                {/* Enhanced paragraph */}
                <p className="mt-8 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-white/85 font-light tracking-wide">
                  We specialize in delivering innovative, high-quality products
                  and services tailored to the needs of businesses across various
                  sectors. At VARMET, we are committed to excellence,
                  sustainability, and customer satisfaction.
                </p>

                {/* Enhanced button */}
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center rounded-2xl 
                      bg-gradient-to-r from-white to-gray-100 px-8 py-4 sm:px-10 sm:py-5
                      text-sm sm:text-base font-semibold text-black transition-all duration-300
                      hover:from-white hover:to-blue-50 hover:scale-[1.02]
                      hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  >
                    <span className="relative z-10">Contact us</span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100/20 to-emerald-100/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card with enhanced animation */}
            <div className={`mt-12 lg:mt-10 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <FeatureStrip />
            </div>

            {/* Spacer */}
            <div />
          </div>
        </div>

        {/* Enhanced fixed footer */}
        <div className="hidden lg:block fixed inset-x-0 bottom-0 z-50 
          bg-gradient-to-t from-black/95 via-black/90 to-transparent 
          backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse" />
                <p className="text-sm text-white/70">
                  © {new Date().getFullYear()} Varmet. All rights reserved.
                </p>
              </div>
              <div className="text-sm text-white/50">
                Industrial Solutions Partner
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator for desktop */}
        <div className="hidden lg:block absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium tracking-wider text-white/50">EXPLORE</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-blue-400/50 via-emerald-400/30 to-transparent" />
          </div>
        </div>

        {/* Reserve footer height */}
        <div className="hidden lg:block h-[80px]" />
      </section>
    </main>
  );
}