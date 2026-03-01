"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Shield,
  Factory,
  Package,
  Globe,
  Paintbrush,
  CheckCircle,
  Award,
  Users,
  Phone,
  ChevronRight,
  Download,
} from "lucide-react";
import Link from "next/link";

type Lang = "en" | "bg";

/**
 * ✅ Kept ALL information exactly the same.
 * ✅ Only simplified styling to match your cleaner pages:
 * - white backgrounds, subtle borders, rounded-2xl
 * - consistent section headers (accent bar)
 * - consistent buttons (gray-900 primary)
 * - removed heavy gradients/animations without changing content
 */
const steelDrumsContent = {
  en: {
    badge: "INDUSTRIAL PACKAGING",
    title: "Steel Drums",
    subtitle: "216.5 L Steel Drums",
    description:
      "VARMET manufactures steel drums for storage and transport of liquid products: chemicals, fuels, oils, and food raw materials.",
    ctaQuote: "Request Quote",
    ctaCall: "Call Now: +359 890 998837",
    downloadPresentation: "Download Presentation",

    industrialBadge: "MANUFACTURING",
    industrialTitle: "Manufacturing",
    industrialSubtitle: "Simple. Reliable. Industrial-grade.",
    industrialParagraph1:
      "Steel drums by VARMET are designed for safe storage and transport of liquid products in industrial and chemical environments.",
    industrialParagraph2:
      "Standard volume: 216.5 L. UN certificate. Custom colours and markings available upon request.",

    featuresBadge: "KEY BENEFITS",
    featuresTitle: "Built for Industry",
    featuresSubtitle: "Certified. Customizable. Reliable.",

    feature1Title: "UN Certificate",
    feature1Desc: "UN certificate for safe storage and transport of liquid products.",
    feature2Title: "Wide Use Cases",
    feature2Desc: "Chemicals, fuels, oils, and food raw materials (depending on lining).",
    feature3Title: "Robust Construction",
    feature3Desc: "Stable handling, stacking, storage, and transport performance.",
    feature4Title: "Internal Lining (Optional)",
    feature4Desc: "Optional internal lining depending on the product and application.",
    feature5Title: "216.5 L Volume",
    feature5Desc: "Standard 216.5 L volume for efficient logistics and storage.",
    feature6Title: "Quality Control",
    feature6Desc: "Controlled manufacturing for consistent quality and traceability.",
    feature7Title: "Custom Colours (RAL)",
    feature7Desc: "RAL colour options available for identification and branding.",
    feature8Title: "Custom Marking",
    feature8Desc: "Marking and branding (logo/text) available upon request.",



    techBadge: "TECHNICAL DATA",
    techTitle: "Specifications",
    techSubtitle: "216.5 L Steel Drums",
    techTableTitle: "Technical Specifications",
    techTableSubtitle: "Steel Drums (216.5 L)",
    unCertified: "UN certificate",

    thVolume: "Nominal volume [dm³]",
    thTop: "Thickness [mm] top",
    thBody: "Thickness [mm] body",
    thBottom: "Thickness [mm] bottom",
    thType: "Type",
    thWeight: "Weight [kg] ± 3%",
    thUnMarkings: "UN marking",

    configsAvailable: "6 standard configurations available",
    downloadSpecs: "Download Full Spec Sheet",

    materialBadge: "DETAILS",
    materialTitle: "Materials & Construction",

    material1Title: "Steel",
    material1Desc: "Commercial grade steel sheet. According to EN 10130 / EN 10131 or equivalent.",
    material2Title: "Closures",
    material2Desc: "Industrial closures and sealing options depending on configuration.",
    material3Title: "Construction",
    material3Desc: "Welded steel body designed for industrial transport and storage.",
    material4Title: "Assembly",
    material4Desc: "Reliable assembly and sealing for safe operation.",
    material5Title: "Standards",
    material5Desc: "Applicable standards depending on configuration.",
    material6Title: "Internal lining",
    material6Desc: "Optional internal lining solutions depending on the product.",
    material7Title: "Exterior colour & marking",
    material7Desc: "RAL colours and custom marking/branding (logo/text) upon request.",

    contactBadge: "READY TO ORDER",
    contactTitle: "Request Steel Drums",
    contactDescription: "Contact us for pricing, technical details, and customization options.",
    ctaContact: "Get In Touch",
    ctaPhone: "Call Now: +359 890 998837",
  },

  bg: {
    badge: "ИНДУСТРИАЛНО ОПАКОВАНЕ",
    title: "Метални варели",
    subtitle: "Метални варели 216,5 л",
    description:
      "VARMET произвежда метални варели за съхранение и транспорт на течни продукти – химикали, горива, масла и хранителни суровини.",
    ctaQuote: "Заяви оферта",
    ctaCall: "Обади се: +359 890 998837",
    downloadPresentation: "Изтегли презентация",

    industrialBadge: "ПРОИЗВОДСТВО",
    industrialTitle: "Производство",
    industrialSubtitle: "Семпло. Надеждно. Индустриален клас.",
    industrialParagraph1:
      "Металните варели на VARMET са предназначени за безопасно съхранение и транспорт на течни продукти в индустриална и химическа среда.",
    industrialParagraph2:
      "Стандартен обем: 216,5 л. UN сертификат. Персонализирани цветове и маркировка по заявка.",

    featuresBadge: "КЛЮЧОВИ ПРЕДИМСТВА",
    featuresTitle: "Създадени за индустрията",
    featuresSubtitle: "Сертифицирани. Персонализируеми. Надеждни.",

    feature1Title: "UN сертификат",
    feature1Desc: "UN сертификат за безопасно съхранение и транспорт на течни продукти.",
    feature2Title: "Широко приложение",
    feature2Desc: "Химикали, горива, масла и хранителни суровини (според облицовката).",
    feature3Title: "Здрава конструкция",
    feature3Desc: "Стабилност при работа, складиране, подреждане и транспорт.",
    feature4Title: "Вътрешна облицовка (опция)",
    feature4Desc: "Вътрешна облицовка според продукта и приложението.",
    feature5Title: "Обем 216,5 л",
    feature5Desc: "Стандартен обем 216,5 л за ефективна логистика и складиране.",
    feature6Title: "Контрол на качеството",
    feature6Desc: "Контролирано производство за последователно качество и проследимост.",
    feature7Title: "Цветове по RAL",
    feature7Desc: "Цветове по RAL за идентификация и брандиране.",
    feature8Title: "Персонализирана маркировка",
    feature8Desc: "Маркировка и брандиране (лого/текст) по заявка.",

    

    techBadge: "ТЕХНИЧЕСКИ ДАННИ",
    techTitle: "Спецификации",
    techSubtitle: "Метални варели 216,5 л",
    techTableTitle: "Технически параметри",
    techTableSubtitle: "Метални варели (216,5 л)",
    unCertified: "UN сертификат",

    thVolume: "Номинален обем [дм³]",
    thTop: "Дебелина [мм] горна част",
    thBody: "Дебелина [мм] тяло",
    thBottom: "Дебелина [мм] дъно",
    thType: "Тип",
    thWeight: "Тегло [кг] ± 3%",
    thUnMarkings: "UN маркировка",

    configsAvailable: "Налични са 6 стандартни конфигурации",
    

    materialBadge: "ДЕТАЙЛИ",
    materialTitle: "Материали и конструкция",

    material1Title: "Стомана",
    material1Desc: "Листова стомана – търговско качество. По EN 10130 / EN 10131 или еквивалент.",
    material2Title: "Затварящи елементи",
    material2Desc:
      "Индустриални затварящи елементи и опции за запечатване според конфигурацията.",
    material3Title: "Конструкция",
    material3Desc: "Електрозаварена конструкция за индустриален транспорт и складиране.",
    material4Title: "Сглобяване",
    material4Desc: "Надеждно сглобяване и уплътняване за безопасна експлоатация.",
    material5Title: "Стандарти",
    material5Desc: "Приложими стандарти според конфигурацията.",
    material6Title: "Вътрешна облицовка",
    material6Desc: "Опционални решения за вътрешна облицовка според продукта.",
    material7Title: "Външен цвят и маркировка",
    material7Desc: "Цветове по RAL и маркировка/брандиране (лого/текст) по заявка.",

    contactBadge: "ГОТОВИ ЗА ПОРЪЧКА",
    contactTitle: "Заяви метални варели",
    contactDescription: "Свържи се с нас за цена, технически параметри и персонализация.",
    ctaContact: "Свържи се с нас",
    ctaPhone: "Обади се: +359 890 998837",
  },
} as const;

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem("varmet-language");
  return raw === "bg" ? "bg" : "en";
};

export default function SteelDrumsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");

  useEffect(() => {
    setLanguage(getStoredLang());
    const t = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const next: Lang = event.detail?.lang === "bg" ? "bg" : "en";
      setLanguage(next);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = steelDrumsContent[language];

  const handleDownloadPresentation = () => {
    const lang = getStoredLang();
    const presentationUrl = lang === "bg" ? "/presentationBg.pdf" : "/presentationEn.pdf";

    const link = document.createElement("a");
    link.href = presentationUrl;
    link.download = lang === "bg" ? "presentationBg.pdf" : "presentationEn.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = useMemo(
    () => [
      { icon: Shield, title: t.feature1Title, description: t.feature1Desc },
      { icon: Factory, title: t.feature2Title, description: t.feature2Desc },
      { icon: Package, title: t.feature3Title, description: t.feature3Desc },
      { icon: Paintbrush, title: t.feature4Title, description: t.feature4Desc },
      { icon: Award, title: t.feature5Title, description: t.feature5Desc },
      { icon: CheckCircle, title: t.feature6Title, description: t.feature6Desc },
      { icon: Globe, title: t.feature7Title, description: t.feature7Desc },
      { icon: Users, title: t.feature8Title, description: t.feature8Desc },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );

  const technicalSpecs = [
    {
      volume: "216,5",
      topThickness: "0,8",
      bodyThickness: "0,7",
      bottomThickness: "0,8",
      weight: "12,6",
      unMarking: "UN 1A1/Y1,4/150/…",
      type: "A B C",
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "0,8",
      bottomThickness: "1,0",
      weight: "14,8",
      unMarking: "UN 1A1/Y1,2/150/…",
      type: "A B C",
    },
    {
      volume: "216,5",
      topThickness: "0,9",
      bodyThickness: "0,9",
      bottomThickness: "0,9",
      weight: "15,6",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C",
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "0,9",
      bottomThickness: "1,0",
      weight: "16,5",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C",
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "1,0",
      bottomThickness: "1,0",
      weight: "17,4",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C",
    },
    {
      volume: "216,5",
      topThickness: "1,2",
      bodyThickness: "1,2",
      bottomThickness: "1,2",
      weight: "21,1",
      unMarking: "UN 1A1/X1,2/250/…",
      type: "A B C",
    },
  ];

  const materialSpecs = [
    { category: t.material1Title, description: t.material1Desc, icon: "⚙️" },
    { category: t.material2Title, description: t.material2Desc, icon: "🔒" },
    { category: t.material3Title, description: t.material3Desc, icon: "🏗️" },
    { category: t.material4Title, description: t.material4Desc, icon: "⚡" },
    { category: t.material5Title, description: t.material5Desc, icon: "📜" },
    { category: t.material6Title, description: t.material6Desc, icon: "🎨" },
    { category: t.material7Title, description: t.material7Desc, icon: "✨" },
  ];

 

  return (
    <main className="bg-white mt-10">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div
          className={`mx-auto max-w-7xl px-6 py-14 md:py-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {t.badge}
              </div>

              <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,4.1rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
                <span className="block">{t.title}</span>
                <span className="block text-blue-700">{t.subtitle}</span>
              </h1>

              <p
                className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600 ${
                  language === "bg" ? "tracking-wide" : ""
                }`}
              >
                {t.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t.ctaQuote}
                  <ChevronRight className="ml-3 h-4 w-4" />
                </Link>

                <a
                  href="tel:+359890998837"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Phone className="mr-2 h-4 w-4 text-gray-500" />
                  {t.ctaCall}
                </a>

                <button
                  onClick={handleDownloadPresentation}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  <Download className="mr-2 h-4 w-4 text-gray-500" />
                  {t.downloadPresentation}
                </button>
              </div>
            </div>

            {/* RIGHT: simple info card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {language === "bg" ? "Преглед" : "Overview"}
                  </p>
                  <span className="text-xs text-gray-500">{t.unCertified}</span>
                </div>

                <div className="p-5">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                        <Factory className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t.industrialTitle}</p>
                        <p className="mt-1 text-sm text-gray-600">{t.industrialSubtitle}</p>
                      </div>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-relaxed text-gray-600 ${
                        language === "bg" ? "tracking-wide" : ""
                      }`}
                    >
                      {t.industrialParagraph1}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed text-gray-600 ${
                        language === "bg" ? "tracking-wide" : ""
                      }`}
                    >
                      {t.industrialParagraph2}
                    </p>
                  </div>

                  
                </div>
              </div>

              <div className="mt-6 h-px bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-1 bg-blue-600 mr-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
              {t.featuresBadge}
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.featuresTitle}
              <span className="block text-lg md:text-xl text-gray-600 font-semibold mt-2">
                {t.featuresSubtitle}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed text-gray-600 ${
                      language === "bg" ? "tracking-wide" : ""
                    }`}
                  >
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH TABLE */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-1 bg-blue-600 mr-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
              {t.techBadge}
            </span>
          </div>

          <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.techTitle}</h2>
              <p className="mt-2 text-gray-600">{t.techSubtitle}</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
              {t.unCertified}
            </span>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.techTableTitle}</p>
                <p className="text-xs text-gray-500 mt-1">{t.techTableSubtitle}</p>
              </div>
              
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thVolume}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thTop}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thBody}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thBottom}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thType}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thWeight}
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                      {t.thUnMarkings}
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {technicalSpecs.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {s.volume}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {s.topThickness}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {s.bodyThickness}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {s.bottomThickness}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                          {s.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {s.weight}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-xs rounded-lg bg-gray-900 text-white px-3 py-1.5">
                          {s.unMarking}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
              {t.configsAvailable}
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-1 bg-blue-600 mr-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
              {t.materialBadge}
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.materialTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialSpecs.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{m.icon}</div>
                <h3
                  className={`mt-4 text-lg font-bold text-gray-900 ${
                    language === "bg" ? "tracking-wide" : ""
                  }`}
                >
                  {m.category}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed text-gray-600 ${
                    language === "bg" ? "tracking-wide" : ""
                  }`}
                >
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              {t.contactBadge}
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">{t.contactTitle}</h2>

            <p
              className={`mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 ${
                language === "bg" ? "tracking-wide" : ""
              }`}
            >
              {t.contactDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                {t.ctaContact}
                <ChevronRight className="ml-3 h-4 w-4" />
              </Link>

              <a
                href="tel:+359890998837"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
              >
                <Phone className="mr-2 h-4 w-4 text-gray-500" />
                {t.ctaPhone}
              </a>

              <button
                onClick={handleDownloadPresentation}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
              >
                <Download className="mr-2 h-4 w-4 text-gray-500" />
                {t.downloadPresentation}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}