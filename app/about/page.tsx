"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import aboutImage from "../assets/Images/about.jpg";
import aboutImage2 from "../assets/Images/aboutImage.jpg";

type Lang = "en" | "bg";

const aboutContent = {
  en: {
    badge: "WHO WE ARE",
    title: "VARMET",
    heroDescription:
      "Industrial partner for packaging, chemicals, logistics and energy supply.",
    bulletsTitle: "What we do",
    bullets: [
      "Supply products and materials with clear terms and predictable lead times",
      "Recommend the right packaging / delivery option for your use case",
      "Work with manufacturers and industrial clients across sectors",
      "Fast response on inquiries and offers",
    ],
    cta: "Contact us",
    viewProducts: "View Products",
    phoneLabel: "Call:",
    phone: "+359 890 99 88 27",
  },
  bg: {
    badge: "КОИ СМЕ НИЕ",
    title: "VARMET",
    heroDescription:
      "Индустриален партньор за опаковане, химикали, логистика и енергийни доставки.",
    bulletsTitle: "Какво правим",
    bullets: [
      "Доставки с ясни условия и предвидими срокове",
      "Предлагаме подходящ продукт, опаковане и вариант за доставка",
      "Работим с производители и индустриални клиенти в различни сектори",
      "Бърз отговор при запитване и оферта",
    ],
    cta: "Свържи се с нас",
    viewProducts: "Виж продуктите",
    phoneLabel: "Обади се:",
    phone: "+359 890 99 88 27",
  },
} as const;

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");

  useEffect(() => {
    const savedLang = (localStorage.getItem("varmet-language") as Lang) || "en";
    setLanguage(savedLang);
    const t = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang as Lang);
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () => window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = useMemo(() => aboutContent[language], [language]);

  return (
    <main className="bg-white mt-10">
      {/* HERO (clean) */}
      <section className="bg-white border-b border-gray-200">
        <div
          className={`mx-auto max-w-7xl px-6 py-14 md:py-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {t.badge}
              </div>

              <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,4rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
                {t.title}
              </h1>

              <p
                className={`mt-4 max-w-xl text-base md:text-lg leading-relaxed text-gray-600 ${
                  language === "bg" ? "tracking-wide" : ""
                }`}
              >
                {t.heroDescription}
              </p>

              {/* bullets (clean list) */}
              <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {t.bulletsTitle}
                  </p>
                  
                </div>

                <div className="mt-4 h-px bg-gray-200" />

                <ul className="mt-4 space-y-3">
                  {t.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className={language === "bg" ? "tracking-wide" : ""}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs (clean) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t.cta}
                  <svg className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  {t.viewProducts}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <a
                  href="tel:+359890998827"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <span className="text-gray-500 mr-2">{t.phoneLabel}</span>
                  <span className="text-gray-900">{t.phone}</span>
                </a>
              </div>
            </div>

            {/* RIGHT (clean image card) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {language === "bg" ? "За VARMET" : "About VARMET"}
                  </p>
                  <span className="text-xs text-gray-500">
                    {language === "bg" ? "Ясни условия" : "Clear terms"}
                  </span>
                </div>

                <div className="p-4">
                  <div className="relative aspect-[4/3] rounded-xl bg-gray-50 overflow-hidden">
                    <Image
                      src={aboutImage}
                      alt="VARMET"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {language === "bg" ? "Надеждни доставки" : "Reliable delivery"}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {language === "bg" ? "Бързи отговори" : "Fast replies"}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {language === "bg" ? "Индустриален фокус" : "Industrial focus"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (clean) */}
      <section className="bg-white py-14 md:py-20">
        <div
          className={`mx-auto max-w-7xl px-6 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT IMAGE */}
            <div className="lg:col-span-6 order-2 lg:order-1">
  <Image
    src={aboutImage2}
    alt="VARMET operations"
    className="w-full h-auto rounded-2xl"
    priority={false}
  />
</div>

            {/* RIGHT TEXT */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {language === "bg" ? "НАШИЯТ ПОДХОД" : "OUR APPROACH"}
              </div>

              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {language === "bg" ? "Работим ясно, бързо и предвидимо" : "We work clear, fast and predictable"}
              </h2>

              <p
                className={`mt-4 text-base md:text-lg leading-relaxed text-gray-600 ${
                  language === "bg" ? "tracking-wide" : ""
                }`}
              >
                {language === "bg"
                  ? "Комуникираме срокове и условия upfront. Предлагаме точния продукт и опаковане според нуждите ти, и организираме доставката така, че да няма изненади."
                  : "We communicate lead times and terms upfront. We recommend the right product and packaging for your use case, and organize delivery so there are no surprises."}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t.cta}
                  <svg className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  {t.viewProducts}
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10 h-px bg-gray-200" />
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    {language === "bg" ? "Срокове" : "Lead times"}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {language === "bg" ? "Предвидими" : "Predictable"}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    {language === "bg" ? "Условия" : "Terms"}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {language === "bg" ? "Ясни" : "Clear"}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    {language === "bg" ? "Отговор" : "Response"}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {language === "bg" ? "Бърз" : "Fast"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}