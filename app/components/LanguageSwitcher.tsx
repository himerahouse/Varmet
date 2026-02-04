// app/components/LanguageSwitcher.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import bgFlag from "../assets/Images/bg.svg";
import enFlag from "../assets/Images/en.svg";

const languages = [
  { code: "en", name: "English", flag: enFlag },
  { code: "bg", name: "Български", flag: bgFlag },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("bg");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load language from localStorage on component mount
    const savedLang = localStorage.getItem("varmet-language");
    if (savedLang && languages.find(lang => lang.code === savedLang)) {
      setCurrentLang(savedLang);
    } else {
      // Default to browser language or English
      const browserLang = navigator.language.split("-")[0];
      const validLang = languages.find(lang => lang.code === browserLang);
      const defaultLang = validLang ? browserLang : "en";
      setCurrentLang(defaultLang);
      localStorage.setItem("varmet-language", defaultLang);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem("varmet-language", langCode);
    setIsOpen(false);
    
    // Dispatch event for other components to listen
    window.dispatchEvent(new CustomEvent("language-changed", { 
      detail: { lang: langCode }
    }));
    
    console.log("Language changed to:", langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Desktop & Mobile Button - Responsive */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-50 
          transition-all duration-200 border border-gray-200 hover:border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        aria-label="Change language"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          {currentLanguage && (
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 overflow-hidden">
              <Image
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                width={24}
                height={24}
                className="object-contain w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
          {/* Show language code on desktop, just flag on mobile */}
          <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">
            {currentLanguage?.code.toUpperCase()}
          </span>
        </div>
        {/* Show chevron only on desktop */}
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} hidden sm:block`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="fixed sm:absolute left-1/2 sm:left-auto sm:right-0 top-16 sm:top-full mt-1 w-[calc(100vw-2rem)] sm:w-48 
            -translate-x-1/2 sm:translate-x-0 rounded-xl bg-white border border-gray-200 
            shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150
                  ${currentLang === lang.code 
                    ? "bg-blue-50 text-blue-700" 
                    : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                  }`}
              >
                <div className="relative w-6 h-6 overflow-hidden">
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={24}
                    height={24}
                    className="object-contain w-full h-full"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.code.toUpperCase()}</span>
                </div>
                {currentLang === lang.code && (
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Footer with language info */}
          <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
            <p className="text-xs text-gray-600">
              Selected language: <span className="font-semibold text-gray-800">{currentLanguage?.name}</span>
            </p>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}