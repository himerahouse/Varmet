"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "../assets/Images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

// Bilingual navigation content
const navContent = {
  en: {
    home: "Home",
    about: "About",
    products: "Products & Services",
    gallery: "Gallery",
    contact: "Contact",
    getStarted: "Get Started",
    available: "Available 24/7 for industrial solutions"
  },
  bg: {
    home: "Начало",
    about: "За нас",
    products: "Продукти & Услуги",
    gallery: "Галерия",
    contact: "Контакти",
    getStarted: "Започнете",
    available: "Налични 24/7 за индустриални решения"
  }
};

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);

    // Listen for language changes from the LanguageSwitcher
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
    };
  }, []);

  const t = navContent[language as keyof typeof navContent];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="Varmet"
              priority
              className="h-10 w-auto lg:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden lg:block ml-3">
              <div className="h-0.5 w-6 bg-gradient-to-r from-blue-600 to-emerald-500 mb-1"></div>
              <div className="h-0.5 w-4 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center h-full">
            <div className="flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`group relative px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300
                      ${
                        active
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }
                    `}
                  >
                    <span className="relative z-10">{t[l.key as keyof typeof t]}</span>
                    
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-emerald-50/0 
                      group-hover:from-blue-50/30 group-hover:to-emerald-50/30 rounded-lg transition-all duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* GET STARTED CTA */}
            <div className="ml-4 pl-6 border-l border-gray-200 h-8 flex items-center">
              <Link
                href="/contact"
                className="group relative px-6 py-3 rounded-xl text-sm font-semibold text-white
                  bg-gradient-to-r from-gray-900 to-gray-800 transition-all duration-300
                  hover:from-blue-700 hover:to-emerald-600 hover:shadow-xl hover:shadow-blue-500/20
                  hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>{t.getStarted}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-emerald-500/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Language Switcher - AFTER Get Started button */}
            <div className="ml-4 h-8 flex items-center border-l border-gray-200 pl-6">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* MOBILE: Menu Button + Language Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg
                bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="relative h-4 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                    open ? "translate-y-[7px] rotate-45 w-full" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-gray-700 rounded-full transition-all duration-300 ${
                    open ? "opacity-0 translate-x-2" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45 w-full" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open 
            ? "max-h-[500px] opacity-100" 
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative rounded-xl px-5 py-3.5 text-base font-medium transition-all duration-300
                    flex items-center justify-between ${language === 'bg' ? 'tracking-wide' : ''}
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-900 border border-blue-100"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  <span>{t[l.key as keyof typeof t]}</span>
                  {active && (
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"></div>
                  )}
                  {!active && (
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 
                      transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="group block rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-4 
                  text-center text-base font-semibold text-white transition-all duration-300
                  hover:from-blue-700 hover:to-emerald-600 hover:shadow-lg active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>{t.getStarted}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
              
              {/* Contact info */}
              <div className="mt-4 text-center text-sm text-gray-500">
                {t.available}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}