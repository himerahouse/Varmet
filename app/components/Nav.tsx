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
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border-b border-gray-200/50 py-2' 
        : 'bg-gradient-to-b from-white via-white to-white/90 backdrop-blur-sm py-3'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* LOGO - Enhanced */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              {/* Logo glow effect */}
              <div className={`absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl transition-opacity duration-500 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`} />
              <Image
                src={logo}
                alt="Varmet"
                priority
                className="relative h-8 w-auto lg:h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
            <div className="hidden lg:block ml-3">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full animate-pulse delay-75" />
                <div className="w-1 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full animate-pulse delay-150" />
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV - Enhanced */}
          <nav className="hidden lg:flex items-center h-full space-x-1">
            <div className="flex items-center gap-0.5">
              {links.map((l) => {
                const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`group relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300
                      ${active ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}
                      ${language === 'bg' ? 'tracking-wide' : ''}
                    `}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t[l.key as keyof typeof t]}
                      {active && (
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
                      )}
                    </span>
                    
                    {/* Hover underline effect */}
                    <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 
                      rounded-full transition-all duration-500 group-hover:w-10 ${
                        active ? 'w-10' : 'w-0 group-hover:w-10'
                      }`} />
                    
                    {/* Active background effect */}
                    {active && (
                      <div className="absolute inset-0 -mx-2 rounded-xl bg-gradient-to-r from-blue-50/40 to-cyan-50/40 
                        border border-blue-100/50 shadow-sm" />
                    )}
                    
                    {/* Hover background effect */}
                    <div className="absolute inset-0 -mx-2 rounded-xl bg-gradient-to-r from-blue-50/0 to-cyan-50/0 
                      group-hover:from-blue-50/30 group-hover:to-cyan-50/30 transition-all duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-gray-300/50 to-transparent mx-2" />

            {/* Language Switcher - Moved before CTA */}
            <div className="px-3">
              <LanguageSwitcher />
            </div>

            {/* GET STARTED CTA - Enhanced */}
            <div className="relative pl-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link
                href="/contact"
                className="group relative px-6 py-3 rounded-xl text-sm font-semibold text-white
                  bg-gradient-to-r from-gray-900 to-blue-900 transition-all duration-500
                  hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg flex items-center gap-2 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 
                  bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 
                  group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 
                  transition-all duration-500" />
                
                <span className="relative z-10">{t.getStarted}</span>
                <svg className="relative z-10 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </nav>

          {/* MOBILE: Menu Button + Language Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="scale-90">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl
                bg-gradient-to-r from-white to-gray-50 border border-gray-200
                hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Button glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-all duration-500 ${
                    open ? "translate-y-[9px] rotate-45 w-full bg-gradient-to-r from-blue-600 to-cyan-500" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-all duration-300 ${
                    open ? "opacity-0 -translate-x-3" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-all duration-500 ${
                    open ? "-translate-y-[9px] -rotate-45 w-full bg-gradient-to-r from-blue-600 to-cyan-500" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Enhanced */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          open 
            ? "max-h-[600px] opacity-100 pt-4" 
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-8 pt-2 border-t border-gray-200/50 bg-gradient-to-b from-white/95 via-white to-gray-50/50 backdrop-blur-xl">
          {/* Mobile menu decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
          
          <nav className="flex flex-col gap-1.5 mt-4">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative rounded-2xl px-5 py-4 text-base font-semibold transition-all duration-500
                    flex items-center justify-between ${language === 'bg' ? 'tracking-wide' : ''}
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-50/80 to-cyan-50/80 text-gray-900 border border-blue-200/50 shadow-sm"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-gray-50/30"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Active indicator */}
                    {active && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />
                    )}
                    <span>{t[l.key as keyof typeof t]}</span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <svg className={`w-5 h-5 transition-all duration-500 ${
                    active 
                      ? "text-blue-600 transform translate-x-1" 
                      : "text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1"
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  
                  {/* Hover effect */}
                  {!active && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                  )}
                </Link>
              );
            })}

            {/* MOBILE CTA SECTION - Enhanced */}
            <div className="mt-6 pt-6 border-t border-gray-200/50">
              {/* Contact info */}
              <div className="mb-4 text-center text-sm text-gray-600 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 
                rounded-xl px-4 py-3 border border-gray-200/30">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>{t.available}</span>
                </div>
                <a href="tel:+359890998827" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  +359 890 99 88 27
                </a>
              </div>
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="group block rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 px-6 py-4 
                  text-center text-base font-semibold text-white transition-all duration-500
                  hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:shadow-2xl active:scale-[0.98]
                  shadow-lg overflow-hidden"
                onClick={() => setOpen(false)}
              >
                {/* Button effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 
                  group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 
                  transition-all duration-500" />
                
                <div className="flex items-center justify-center gap-3">
                  <span className="relative z-10">{t.getStarted}</span>
                  <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}