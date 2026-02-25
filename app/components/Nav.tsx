"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import logo from "../assets/Images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

type Lang = "en" | "bg";

const navContent = {
  en: {
    home: "Home",
    about: "About",
    products: "Products & Services",
    gallery: "Gallery",
    contact: "Contact",
    getStarted: "Get Started",
    available: "Available 24/7 for industrial solutions",
  },
  bg: {
    home: "Начало",
    about: "За нас",
    products: "Продукти & Услуги",
    gallery: "Галерия",
    contact: "Контакти",
    getStarted: "Започнете",
    available: "Налични 24/7 за индустриални решения",
  },
} as const;

const links: Array<{ href: string; key: keyof typeof navContent.en }> = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/products", key: "products" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
];

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem("varmet-language");
  return raw === "bg" ? "bg" : "en";
};

export default function Nav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");

  // Scroll shadow/background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Language sync
  useEffect(() => {
    setLanguage(getStoredLang());

    const handleLanguageChange = (event: CustomEvent) => {
      const next: Lang = event.detail?.lang === "bg" ? "bg" : "en";
      setLanguage(next);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const t = navContent[language];

  const isActive = useMemo(() => {
    return (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${scrolled ? "h-14" : "h-16"} transition-all`}>
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Varmet Home">
            <div className="relative">
              <div
                className={`absolute -inset-3 rounded-full blur-xl transition-opacity duration-500 ${
                  scrolled ? "opacity-0" : "opacity-100"
                } bg-gradient-to-r from-blue-500/10 to-cyan-500/10`}
              />
              <Image
                src={logo}
                alt="Varmet"
                priority
                className="relative h-8 w-auto lg:h-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            
          </Link>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-2">
            <div className="flex items-center">
              {links.map((l) => {
                const active = isActive(l.href);

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition ${
                      active ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    } ${language === "bg" ? "tracking-wide" : ""}`}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      {t[l.key]}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
                    </span>

                    {/* underline */}
                    <span
                      className={`absolute left-1/2 bottom-0 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                        active ? "w-10" : "w-0 group-hover:w-10"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mx-2 h-6 w-px bg-gray-200" />

            <LanguageSwitcher />

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              {t.getStarted}
              <svg className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </nav>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="scale-90">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
            >
              <span className="relative h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-gray-700 transition-all duration-300 ${
                    open ? "translate-y-[9px] rotate-45 bg-blue-600" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-gray-700 transition-all duration-200 ${
                    open ? "opacity-0 -translate-x-3" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-4 rounded-full bg-gray-700 transition-all duration-300 ${
                    open ? "-translate-y-[9px] -rotate-45 w-full bg-blue-600" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-200 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
            <nav className="flex flex-col gap-2">
              {links.map((l) => {
                const active = isActive(l.href);

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-xl px-4 py-3 text-base font-semibold flex items-center justify-between transition ${
                      active
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-900 hover:bg-gray-50 border border-transparent"
                    } ${language === "bg" ? "tracking-wide" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      {active && <span className="h-2 w-2 rounded-full bg-blue-600" />}
                      <span>{t[l.key]}</span>
                    </div>

                    <svg
                      className={`h-5 w-5 ${active ? "text-blue-600" : "text-gray-400"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-gray-700">{t.available}</span>
                  </div>
                  <a
                    href="tel:+359890998827"
                    className="block text-lg font-bold text-gray-900 hover:text-blue-700 transition"
                  >
                    +359 890 99 88 27
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                  onClick={() => setOpen(false)}
                >
                  {t.getStarted}
                  <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}