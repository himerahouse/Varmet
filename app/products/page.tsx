"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import metalBarrelsImg from "../assets/Images/metal-barrels.jpg";
import ureaImg from "../assets/Images/urea.jpg";
import fuelsImg from "../assets/Images/fuels.jpg";
import wasteImg from "../assets/Images/waste.jpg";
import palletsImg from "../assets/Images/pallets.jpg";

type Lang = "en" | "bg";

const content = {
  en: {
    badge: "PRODUCTS & SERVICES",
    title: "Products",
    subtitle: "Choose a category to view details",
    cta: "Contact Us",
    phoneLabel: "Call:",
    phone: "+359 890 99 88 27",
    listTitle: "All products",
    detailsTitle: "Details",
    items: [
      {
        id: "drums",
        tab: "Steel Drums",
        title: "Steel Drums",
        subtitle: "Storage and transport for liquid products",
        image: metalBarrelsImg,
        description:
          "VARMET manufactures steel drums for storage and transport of all kinds of liquid products – chemicals, fuels, oils and food raw materials.",
        bullets: [
          "Capacity: 216.5 L",
          "UN certified",
          "Custom colours",
          "Custom marking",
          "Suitable for industrial and chemical production",
        ],
        cta: "View Steel Drums",
        href: "/steelDrums",
      },
      {
        id: "urea",
        tab: "Urea",
        title: "Agricultural & Technical Urea",
        subtitle: "Supply with guaranteed origin",
        image: ureaImg,
        description:
          "Supply of Agricultural Urea and Technical Urea with guaranteed origin. Agricultural urea for farming. Technical urea for industry and AdBlue production.",
        bullets: [
          "Agricultural urea for farming",
          "Technical urea for industry and AdBlue production",
          "Big-Bag (500–1100 kg)",
          "Bags 25–50 kg",
          "Bulk (loose) – on request",
        ],
        cta: "Request Offer",
        href: "/contact",
      },
      {
        id: "uan-adblue",
        tab: "UAN & AdBlue",
        title: "Production of UAN & AdBlue",
        subtitle: "Controlled quality and flexible packaging",
        image: fuelsImg,
        description:
          "Production of liquid fertilizers UAN and AdBlue. UAN for efficient nutrition in agriculture. AdBlue for emission reduction – for cars and trucks.",
        bullets: [
          "Controlled quality",
          "Delivery in IBC",
          "Canisters: 3 / 5 / 10 / 20 L",
          "Bulk (loose) – on request",
          "Private label packaging (your logo & design)",
        ],
        cta: "Contact Us",
        href: "/contact",
      },
      {
        id: "polymers",
        tab: "Polymer Elements",
        title: "Production of Polymer Construction Elements",
        subtitle: "LEGO modules, tiles, pavers and more",
        image: wasteImg,
        description:
          "All kinds of construction elements – tiles, pavers, curbs, roof tiles, bricks, LEGO modular elements for assembling mobile offices and houses.",
        bullets: [
          "Up to 22× more durable than concrete in natural conditions",
          "LEGO modular elements for fast assembly",
          "Innovative technology developed by our specialists and engineers",
        ],
        cta: "Ask for Details",
        href: "/contact",
      },
      {
        id: "alt-fuels",
        tab: "Alternative Fuels",
        title: "Alternative Fuels from Waste",
        subtitle: "Supplier and broker of RDF / SRF",
        image: fuelsImg,
        description:
          "Supplier and broker of RDF and SRF fuels. Energy cost optimization. Compliance with environmental requirements. Cooperation with power plants and cement factories.",
        bullets: [
          "RDF / SRF supply and brokerage",
          "Energy cost optimization",
          "Compliance with environmental requirements",
          "Work with power plants and cement factories",
        ],
        cta: "Get in Touch",
        href: "/contact",
      },
      {
        id: "pallets",
        tab: "Pallets",
        title: "Wooden & Plastic Pallets",
        subtitle: "EURO standard and custom sizes",
        image: palletsImg,
        description:
          "Production and delivery of pallets. EURO standard and custom sizes. Plastic pallets for multiple use. Improved efficiency in transport and storage.",
        bullets: [
          "Production and delivery of pallets",
          "EURO standard and custom sizes",
          "Plastic pallets for multiple use",
          "Improved efficiency in transport and storage",
        ],
        cta: "Request Offer",
        href: "/contact",
      },
    ],
  },

  bg: {
    badge: "ПРОДУКТИ И УСЛУГИ",
    title: "Продукти",
    subtitle: "Избери категория и виж информация",
    cta: "Свържи се с нас",
    phoneLabel: "Обади се:",
    phone: "+359 890 99 88 27",
    listTitle: "Всички продукти",
    detailsTitle: "Информация",
    items: [
      {
        id: "drums",
        tab: "Метални варели",
        title: "Метални варели",
        subtitle: "Съхранение и транспорт на течни продукти",
        image: metalBarrelsImg,
        description:
          "VARMET произвежда метални варели за съхранение и транспорт на всякакви течни продукти – химикали, горива, масла и хранителни суровини.",
        bullets: [
          "Обеми: 216,5 литра",
          "UN сертифицирани",
          "Персонализирани цветове",
          "Персонализирана маркировка",
          "Подходящи за индустриални и химически производства",
        ],
        cta: "Виж метални варели",
        href: "/steelDrums",
      },
      {
        id: "urea",
        tab: "Урея",
        title: "Агро урея и Техническа урея",
        subtitle: "Доставка с гарантиран произход",
        image: ureaImg,
        description:
          "Доставка на Агро урея и Техническа урея с гарантиран произход. Агро урея за земеделие. Техническа урея за индустрията и производство на AdBlue.",
        bullets: [
          "Агро урея за земеделие",
          "Техническа урея за индустрията и производство на AdBlue",
          "Доставка в Big-Bag чували (500–1100 kg)",
          "Торби по 25–50 kg",
        ],
        cta: "Заяви оферта",
        href: "/contact",
      },
      {
        id: "uan-adblue",
        tab: "UAN и AdBlue",
        title: "Производство на UAN и AdBlue",
        subtitle: "Контролирано качество и гъвкаво пакетиране",
        image: fuelsImg,
        description:
          "Производство на течни торове UAN и AdBlue. UAN за ефективно подхранване в земеделието. AdBlue за намаляване на емисии – за автомобили и камиони.",
        bullets: [
          "Контролирано качество",
          "Доставка в IBC",
          "Туби: 3 / 5 / 10 / 20 литра",
          "Наливно – при нужда",
          "Възможност за пакетиране под ваш бранд (лого и дизайн)",
        ],
        cta: "Свържи се",
        href: "/contact",
      },
      {
        id: "polymers",
        tab: "Полимерни детайли",
        title: "Производство на полимерни строителни детайли",
        subtitle: "Лего модули, плочки, павета и още",
        image: wasteImg,
        description:
          "Всякакъв вид строителни детайли – плочки, павета, бордюри, керемиди, тухли, лего модулни детайли за сглобяване на мобилни офиси и къщи.",
        bullets: [
          "До 22 пъти по-издръжливи на природни условия от бетон",
          "Лего модулни детайли за сглобяване",
          "Иновативна технология, разработена от наши специалисти и инженери",
        ],
        cta: "Попитай за детайли",
        href: "/contact",
      },
      {
        id: "alt-fuels",
        tab: "Алтернативни горива",
        title: "Алтернативни горива от отпадъци",
        subtitle: "Доставчик и брокер на RDF / SRF",
        image: fuelsImg,
        description:
          "Доставчик и брокер на RDF и SRF горива. Оптимизация на енергийни разходи. Съответствие с екологични изисквания. Работа с ТЕЦ-ове и циментови заводи.",
        bullets: [
          "Доставка и брокерство на RDF / SRF",
          "Оптимизация на енергийни разходи",
          "Съответствие с екологични изисквания",
          "Работа с ТЕЦ-ове и циментови заводи",
        ],
        cta: "Свържи се",
        href: "/contact",
      },
      {
        id: "pallets",
        tab: "Палети",
        title: "Дървени и пластмасови палети",
        subtitle: "EURO стандарт и нестандартни размери",
        image: palletsImg,
        description:
          "Производство и доставка на палети. EURO стандарт и нестандартни размери. Пластмасови палети за многократна употреба. Подобрена ефективност при транспорт и складиране.",
        bullets: [
          "Производство и доставка на палети",
          "EURO стандарт и нестандартни размери",
          "Пластмасови палети за многократна употреба",
          "Подобрена ефективност при транспорт и складиране",
        ],
        cta: "Заяви оферта",
        href: "/contact",
      },
    ],
  },
} as const;

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");

  const t = content[language];
  const [activeId, setActiveId] = useState<string>(t.items[0].id);

  useEffect(() => {
    const savedLang = (localStorage.getItem("varmet-language") as Lang) || "en";
    setLanguage(savedLang);
    const tm = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(tm);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang as Lang);
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () => window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  useEffect(() => {
    const exists = content[language].items.some((x) => x.id === activeId);
    if (!exists) setActiveId(content[language].items[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const active = useMemo(
    () => t.items.find((x) => x.id === activeId) || t.items[0],
    [t.items, activeId]
  );

  return (
    <main className="bg-white mt-10">
      {/* HERO (clean) */}
      <section className="bg-white border-b border-gray-200">
        <div
          className={`mx-auto max-w-7xl px-6 py-14 md:py-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              {t.badge}
            </div>

            <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,4rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
              {t.title}
            </h1>

            <p className={`mt-4 text-base md:text-lg leading-relaxed text-gray-600 ${language === "bg" ? "tracking-wide" : ""}`}>
              {t.subtitle}
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

              <a
                href="tel:+359890998827"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
              >
                <span className="text-gray-500 mr-2">{t.phoneLabel}</span>
                <span className="text-gray-900">{t.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-sm font-semibold text-gray-900">{t.listTitle}</p>
            <span className="text-xs text-gray-500">
              {language === "bg" ? "Избери категория" : "Pick a category"}
            </span>
          </div>

          {/* tabs (segmented control) */}
          <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {t.items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition
                      ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-800 hover:bg-gray-50"
                      }`}
                  >
                    {item.tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* details */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-12">
              {/* image */}
              <div className="lg:col-span-5">
                <div className="relative h-[260px] sm:h-[340px] lg:h-full bg-gray-50">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* content */}
              <div className="lg:col-span-7 p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {active.title}
                  </h2>
                  <span className="text-xs font-semibold text-gray-500">
                    {t.detailsTitle}
                  </span>
                </div>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {active.subtitle}
                </p>

                <div className="mt-5 h-px bg-gray-200" />

                <p className={`mt-5 text-sm sm:text-base leading-relaxed text-gray-600 ${language === "bg" ? "tracking-wide" : ""}`}>
                  {active.description}
                </p>

                <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {language === "bg" ? "Характеристики" : "Key features"}
                </p>

                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {active.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className={language === "bg" ? "tracking-wide" : ""}>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={active.href}
                    className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                  >
                    {active.cta}
                    <svg className="ml-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            </div>
          </div>

          {/* bottom CTA (clean) */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-7 sm:p-9 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {language === "bg" ? "Имате въпрос или нужда?" : "Need help or an offer?"}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                <span className="text-gray-500 mr-2">{t.phoneLabel}</span>
                <span className="font-semibold text-gray-900">{t.phone}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                {t.cta}
              </Link>
              <a
                href="tel:+359890998827"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
              >
                {t.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}