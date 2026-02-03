"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import heroImage from "./assets/Images/hero2.jpg";
import { FeatureStrip } from "./components/FeatureStrip";

export default function HomePage() {
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

  return (
    <main className="bg-black">
      {/* HERO: 100vh */}
      <section className="relative h-[100vh] w-full overflow-auto lg:overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Industrial facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 [background:radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6">
          {/* Use grid so we can reserve space for the fixed footer on desktop */}
          <div className="grid h-full grid-rows-[auto_auto_1fr]">
            {/* Top text */}
            <div className="pt-10 sm:pt-14 md:pt-16">
              <div className="max-w-2xl text-white">
                <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-white/70 sm:text-sm">
                  WELCOME TO VARMET
                </span>

                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Environmental
                  <br />
                  Solutions
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                  We specialize in delivering innovative, high-quality products
                  and services tailored to the needs of businesses across various
                  sectors. At VARMET, we are committed to excellence,
                  sustainability, and customer satisfaction.
                </p>

                <div className="mt-7 sm:mt-9">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4
                      text-sm font-semibold text-black transition-all duration-300
                      hover:bg-white/90 hover:-translate-y-[1px]
                      hover:shadow-[0_18px_35px_rgba(0,0,0,0.35)]
                      sm:px-9 sm:py-5 sm:text-base"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            {/* Card (closer to text on desktop) */}
            <div className="mt-10 lg:mt-8 lg:translate-y-20">
              <FeatureStrip />
            </div>

            {/* Spacer to push content without mt-auto hacks */}
            <div />
          </div>
        </div>

        {/* ✅ Fixed footer bar (desktop only) */}
        <div className="hidden lg:block fixed inset-x-0 bottom-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <p className="text-center text-sm text-white/70">
              © {new Date().getFullYear()} Varmet. All rights reserved.
            </p>
          </div>
        </div>

        {/* ✅ Reserve footer height so card never overlaps it (desktop only) */}
        <div className="hidden lg:block h-[64px]" />
      </section>
    </main>
  );
}
