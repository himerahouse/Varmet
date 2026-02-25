"use client";

import { useState, useEffect } from "react";

const footerContent = {
  en: {
    copyright: "© {year} Varmet. All rights reserved.",
    tagline: "Industrial & Environmental Solutions",
    subtitle: "Building Sustainable Futures",
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
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    madeWith: "Professional Industrial Solutions",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
  },
  bg: {
    copyright: "© {year} Varmet. Всички права запазени.",
    tagline: "Индустриални и Екологични Решения",
    subtitle: "Изграждане на Устойчиво Бъдеще",
    contactPrompt: "Нуждаете се от съдействие?",
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
    quickLinks: "Бързи Връзки",
    contactInfo: "Контактна Информация",
    madeWith: "Професионални Индустриални Решения",
    emailLabel: "Имейл",
    phoneLabel: "Телефон",
    addressLabel: "Адрес",
  },
};

export function Footer() {
  const [language, setLanguage] = useState("en");
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };

    window.addEventListener(
      "language-changed",
      handleLanguageChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "language-changed",
        handleLanguageChange as EventListener
      );
    };
  }, []);

  const t = footerContent[language as keyof typeof footerContent];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white tracking-wide">
              VARMET
            </h2>
            <p className="text-sm leading-relaxed">
              {t.tagline}
            </p>
            <p className="text-sm text-gray-500">
              {t.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, value]) => {
                if (key === "privacy" || key === "terms") return null;
                return (
                  <li key={key}>
                    <a
                      href={`/${key === "about" ? "about" : key}`}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.contactInfo}
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500">{t.emailLabel}</p>
                <a
                  href="mailto:office@varmet.bg"
                  className="text-white hover:underline"
                >
                  {t.email}
                </a>
              </div>

              <div>
                <p className="text-gray-500">{t.phoneLabel}</p>
                <a
                  href="tel:+359890998827"
                  className="text-white hover:underline"
                >
                  {t.phone}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  {t.contactPrompt}
                </p>
              </div>

              <div>
                <p className="text-gray-500">{t.addressLabel}</p>
                <p className="text-white">{t.addressLine1}</p>
                <p className="text-white">{t.addressLine2}</p>
              </div>

              <div>
                <p className="text-gray-500">{t.workingHoursTitle}</p>
                <p className="text-white">{t.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t.copyright.replace("{year}", year.toString())}
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              {t.links.privacy}
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              {t.links.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
