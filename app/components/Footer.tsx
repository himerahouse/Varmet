"use client";

import { useState, useEffect } from "react";

// Bilingual content for footer
const footerContent = {
  en: {
    copyright: "© {year} Varmet. All rights reserved.",
    tagline: "Industrial & Environmental Solutions",
    subtitle: "Building Sustainable Futures",
    taglineDots: ["Innovation", "Sustainability", "Excellence"],
    contactPrompt: "Need immediate assistance?",
    phone: "+359 890 99 88 27",
    email: "office@varmet.bg",
    addressLine1: "1700 Sofia,",
    addressLine2: "2B Yordan Stratiev Street",
    workingHoursTitle: "Working hours:",
    workingHours: "Monday - Friday: 09:00 - 18:00",
    links: {
      about: "About Us",
      products: "Products",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    social: {
      linkedin: "Follow on LinkedIn",
      facebook: "Follow on Facebook",
    },
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    followUs: "Follow Us",
    madeWith: "Made with passion in Bulgaria",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    socialMedia: "Social Media"
  },
  bg: {
    copyright: "© {year} Varmet. Всички права запазени.",
    tagline: "Индустриални и Екологични Решения",
    subtitle: "Изграждане на Устойчиви Бъдещи",
    taglineDots: ["Иновации", "Устойчивост", "Превъзходство"],
    contactPrompt: "Нуждаете се от незабавна помощ?",
    phone: "+359 890 99 88 27",
    email: "office@varmet.bg",
    addressLine1: "1700 София,",
    addressLine2: "ул. Йордан Стратиев 2Б",
    workingHoursTitle: "Работно време:",
    workingHours: "Понеделник - Петък: 09:00 - 18:00",
    links: {
      about: "За Нас",
      products: "Продукти",
      services: "Услуги",
      gallery: "Галерия",
      contact: "Контакти",
      privacy: "Политика за Поверителност",
      terms: "Условия за Ползване",
    },
    social: {
      linkedin: "Следвайте ни в LinkedIn",
      facebook: "Следвайте ни във Facebook",
    },
    quickLinks: "Бързи Връзки",
    contactInfo: "Контактна Информация",
    followUs: "Следвайте Ни",
    madeWith: "Създадено с passion в България",
    emailLabel: "Имейл",
    phoneLabel: "Телефон",
    addressLabel: "Адрес",
    socialMedia: "Социални Мрежи"
  }
};

export function Footer() {
  const [language, setLanguage] = useState("en");
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
    };
  }, []);

  const t = footerContent[language as keyof typeof footerContent];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-black to-black border-t border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand & About */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  VARMET
                </span>
              </div>
              <p className={`text-sm text-gray-400 leading-relaxed ${language === 'bg' ? 'tracking-wide' : ''}`}>
                {t.tagline}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {t.taglineDots.map((dot, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-emerald-500' : 
                      'bg-cyan-500'
                    }`} />
                    <span className="text-xs text-gray-400">{dot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                {t.quickLinks}
              </h3>
              <ul className="space-y-3">
                {Object.entries(t.links).map(([key, value]) => (
                  <li key={key}>
                    <a 
                      href={`/${key === 'about' ? 'about' : key}`}
                      className={`text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group ${language === 'bg' ? 'tracking-wide' : ''}`}
                    >
                      <div className="w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4 transition-all duration-300" />
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                {t.contactInfo}
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{t.emailLabel}</p>
                    <a 
                      href="mailto:office@varmet.bg" 
                      className="text-sm text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      {t.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{t.phoneLabel}</p>
                    <a 
                      href="tel:+359890998827" 
                      className="text-sm text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
                    >
                      {t.phone}
                    </a>
                    <p className="text-xs text-gray-400 mt-1">{t.contactPrompt}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{t.addressLabel}</p>
                    <p className="text-sm text-white font-medium">{t.addressLine1}</p>
                    <p className="text-sm text-white font-medium">{t.addressLine2}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{t.workingHoursTitle}</p>
                    <p className="text-sm text-white font-medium">{t.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                {t.socialMedia}
              </h3>
              <div className="space-y-4">
                <p className={`text-sm text-gray-400 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.followUs}
                </p>
                <div className="flex gap-3">
                  {/* LinkedIn */}
                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 flex-1 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-xs text-gray-300 hidden sm:block">LinkedIn</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  </a>
                  
                  {/* Facebook */}
                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105 flex-1 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs text-gray-300 hidden sm:block">Facebook</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  </a>
                </div>
                <p className={`text-xs text-gray-500 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.social.linkedin} • {t.social.facebook}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className={`text-sm text-gray-400 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.copyright.replace('{year}', year.toString())}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {t.madeWith}
                </p>
              </div>

              {/* Subtitle with animation */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-xl" />
                <div className="relative px-6 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {t.subtitle}
                  </p>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Additional Links */}
              <div className="flex items-center gap-6">
                <a 
                  href="/" 
                  className={`text-xs text-gray-400 hover:text-white transition-colors duration-300 ${language === 'bg' ? 'tracking-wide' : ''}`}
                >
                  {t.links.privacy}
                </a>
                <a 
                  href="/" 
                  className={`text-xs text-gray-400 hover:text-white transition-colors duration-300 ${language === 'bg' ? 'tracking-wide' : ''}`}
                >
                  {t.links.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}