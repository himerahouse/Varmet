"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, CheckCircle, Factory } from "lucide-react";

// ✅ adjust filename/path to your real one
import heroImage2 from "./assets/Images/heroImage2.jpg";

const content = {
  en: {
    badge: "WELCOME TO VARMET",
    titleLine1: "Environmental",
    titleLine2: "Solutions",
    description:
      "We specialize in delivering innovative, high-quality products and services tailored to the needs of businesses across various sectors. At VARMET, we are committed to excellence, sustainability, and customer satisfaction.",
    cta: "Contact us",

    solutionTitle: "Solutions",
    solutionDescription:
      "At VARMET, we provide a wide array of industrial and environmental solutions tailored to meet the unique needs.",
    solutionLink: "Learn more",

    productionTitle: "Production",
    productionDescription:
      "Innovative and sustainable manufacturing solutions tailored to optimize efficiency and quality.",
    productionLink: "View our work",

    consultationTitle: "Free Consultation",
    consultationDescription:
      "Get expert advice for your industrial needs. Our team is ready to help you find the perfect solution.",
    phone: "+359 890 99 88 27",
    phoneLabel: "Call now",
  },
  bg: {
    badge: "ДОБРЕ ДОШЛИ ВЪВ ВАРМЕТ",
    titleLine1: "Индустриални и",
    titleLine2: "Екологични Решения",
    description:
      "Ние сме специализирани в предоставянето на иновативни, висококачествени продукти и услуги, съобразени с нуждите на бизнеса в различни сектори. Във VARMET сме ангажирани с високи постижения, устойчивост и удовлетвореност на клиентите.",
    cta: "Свържете се с нас",

    solutionTitle: "Решения",
    solutionDescription:
      "Във VARMET предлагаме широка гама от индустриални и екологични решения, съобразени с уникалните нужди.",
    solutionLink: "Научете повече",

    productionTitle: "Производство",
    productionDescription:
      "Иновативни и устойчиви производствени решения, съобразени с оптимизиране на ефективността и качеството.",
    productionLink: "Вижте нашата работа",

    consultationTitle: "Безплатна консултация",
    consultationDescription:
      "Получете експертни съвети за вашите индустриални нужди. Нашият екип е готов да ви помогне да намерите перфектното решение.",
    phone: "+359 890 99 88 27",
    phoneLabel: "Обадете се сега",
  },
} as const;

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<"en" | "bg">("bg");

  useEffect(() => {
    const savedLang = (localStorage.getItem("varmet-language") as "en" | "bg") || "en";
    setLanguage(savedLang);
    const t = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => setLanguage(event.detail.lang);
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = content[language];

  return (
    <main className="bg-white mt-10">
      {/* HERO (clean) */}
      <section className="border-b border-gray-200 bg-white">
        <div
          className={`mx-auto max-w-7xl px-6 py-14 md:py-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT */}
            <div className="lg:col-span-6">
              {/* badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {t.badge}
              </div>

              {/* headline */}
              <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,4.1rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
                <span className="block">{t.titleLine1}</span>
                <span className="block text-blue-700">{t.titleLine2}</span>
              </h1>

              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-gray-600">
                {t.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t.cta}
                  <svg
                    className="ml-3 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <a
                  href="tel:+359890998827"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Phone className="mr-2 h-4 w-4 text-gray-500" />
                  {t.phone}
                </a>
              </div>
            </div>

            {/* RIGHT (image only — no extra box UI) */}
            <div className="lg:col-span-6">
              <div className="lg:col-span-6">
  <Image
    src={heroImage2}
    alt="VARMET"
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="w-full h-auto"
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID (clean cards) */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solution */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{t.solutionTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{t.solutionDescription}</p>
              <Link
                href="/products"
                className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
              >
                {t.solutionLink}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Production */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Factory className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{t.productionTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{t.productionDescription}</p>
              <Link
                href="/products"
                className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900 hover:underline"
              >
                {t.productionLink}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Consultation */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{t.consultationTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{t.consultationDescription}</p>
              <a
                href="tel:+359890998827"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                <Phone className="mr-2 h-4 w-4" />
                {t.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}