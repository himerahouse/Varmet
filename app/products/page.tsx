"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Import your images
import metalBarrelsImg from "../assets/Images/metal-barrels.jpg";
import ureaImg from "../assets/Images/urea.jpg";
import fuelsImg from "../assets/Images/fuels.jpg";
import wasteImg from "../assets/Images/waste.jpg";
import palletsImg from "../assets/Images/pallets.jpg";
import communityImg from "../assets/Images/community.jpg";
import environmentImg from "../assets/Images/environment.jpg";

// Bilingual content
const productsContent = {
  en: {
    badge: "OUR OFFERINGS",
    title: "Products",
    subtitle: "& Services",
    description: "We cater to a diverse range of industries, delivering customized solutions that drive performance and sustainability.",
    cta: "Get Custom Solutions",
    
    productsBadge: "OUR PRODUCTS",
    productsTitleLine1: "Comprehensive",
    productsTitleLine2: "Industrial Solutions",
    
    // Featured Product - Metal Barrels
    featuredBadge: "FLAGSHIP PRODUCT",
    featuredCategory: "MANUFACTURING",
    featuredTitle: "Metal Barrels",
    featuredSubtitle: "Large Tight Head Steel Drums (216.5 liter)",
    featuredDescription: "The packaging solution for the petrochemical, chemical, pharmaceutical and food industries.",
    featuredFeatures: ["216.5 liter capacity", "UN certified", "Spiraltainer® technology", "Chemical resistant"],
    featuredCta: "Explore Manufacturing",
    featuredPhone: "+359 890 99 88 37",
    
    // Other Products
    ureaTitle: "Agricultural & Technical Urea",
    ureaDescription: "High-grade urea for use in AdBlue production and other applications.",
    ureaCategory: "Industrial Chemicals",
    ureaFeatures: ["High purity grade", "AdBlue production", "Agricultural use", "Technical applications"],
    
    fuelsTitle: "Alternative Fuels Supply",
    fuelsDescription: "Cost-effective and eco-friendly fuel options for thermal power and cement plants.",
    fuelsCategory: "Energy Solutions",
    fuelsFeatures: ["Cost-effective", "Eco-friendly", "Industrial grade", "Reliable supply"],
    
    wasteTitle: "Waste & Plastics Trade",
    wasteDescription: "Sustainable solutions for waste management and recycling, driving a circular economy.",
    wasteCategory: "Environmental Solutions",
    wasteFeatures: ["Sustainable recycling", "Waste management", "Circular economy", "Environmental compliance"],
    
    palletsTitle: "Wooden Pallets",
    palletsDescription: "Sturdy and customizable pallets for safe and efficient transportation and storage.",
    palletsCategory: "Logistics",
    palletsFeatures: ["Customizable sizes", "Durable construction", "Export standard", "Sustainable materials"],
    
    featuresLabel: "Key Features",
    allProductsLabel: "Other Products",
    
    // Community Section
    communityBadge: "OUR COMMUNITY",
    communityTitleLine1: "Join Our Community Of",
    communityTitleLine2: "Satisfied Industrial Customers",
    communityDescription: "At VARMET, we are committed to quality, sustainability, and innovation, ensuring we provide solutions that support your business while protecting the environment.",
    communityCta: "Get Started",
    communityImageCaption1: "Trusted by Industry Leaders",
    communityImageCaption2: "Building Lasting Partnerships",
    
    // Environment Section
    environmentBadge: "OUR COMMITMENT",
    environmentTitleLine1: "Our Commitment",
    environmentTitleLine2: "To The Environment",
    environmentDescription: "At VARMET, we prioritize sustainable practices in everything we do. From designing eco-friendly products to implementing resource-efficient solutions, we are committed to reducing the environmental impact of our operations and those of our clients.",
    environmentCta: "Get Started",
    environmentImageCaption1: "Sustainable Practices",
    environmentImageCaption2: "Protecting Our Planet",
    
    // Contact Section
    contactBadge: "NEED ASSISTANCE?",
    contactTitleLine1: "Custom Solutions",
    contactTitleLine2: "For Your Business",
    contactDescription: "Contact our expert team to discuss tailored requirements and specialized solutions designed for your industry needs.",
    contactCta: "Contact Sales Team"
  },
  bg: {
    badge: "НАШИТЕ ПРЕДЛОЖЕНИЯ",
    title: "Продукти",
    subtitle: "& Услуги",
    description: "Ние обслужваме широк спектър от индустрии, предоставяйки персонализирани решения, които стимулират производителността и устойчивостта.",
    cta: "Получете Персонализирани Решения",
    
    productsBadge: "НАШИТЕ ПРОДУКТИ",
    productsTitleLine1: "Изчерпателни",
    productsTitleLine2: "Индустриални Решения",
    
    // Featured Product - Metal Barrels
    featuredBadge: "ОСНОВЕН ПРОДУКТ",
    featuredCategory: "ПРОИЗВОДСТВО",
    featuredTitle: "Метални Варели",
    featuredSubtitle: "Големи метални варели с плътна капачка (216.5 литра)",
    featuredDescription: "Опаковъчното решение за петрохимическата, химическата, фармацевтичната и хранителната промишленост.",
    featuredFeatures: ["216.5 литра капацитет", "Сертифицирано по ООН", "Spiraltainer® технология", "Устойчиво на химикали"],
    featuredCta: "Разгледайте Производството",
    featuredPhone: "+359 890 99 88 37",
    
    // Other Products
    ureaTitle: "Селскостопанска и техническа урея",
    ureaDescription: "Висококачествен урея за употреба в производството на AdBlue и други приложения.",
    ureaCategory: "Индустриални Химикали",
    ureaFeatures: ["Висока степен на чистота", "Производство на AdBlue", "Селскостопанска употреба", "Технически приложения"],
    
    fuelsTitle: "Доставка на алтернативни горива",
    fuelsDescription: "Икономически ефективни и екологични горивни варианти за топлоелектрически и циментови заводи.",
    fuelsCategory: "Енергийни Решения",
    fuelsFeatures: ["Икономически ефективни", "Екологични", "Индустриален клас", "Надеждни доставки"],
    
    wasteTitle: "Търговия с отпадъци и пластмаси",
    wasteDescription: "Устойчиви решения за управление на отпадъците и рециклиране, стимулиращи кръговата икономика.",
    wasteCategory: "Екологични Решения",
    wasteFeatures: ["Устойчиво рециклиране", "Управление на отпадъците", "Кръгова икономика", "Екологична съобразност"],
    
    palletsTitle: "Дървени палети",
    palletsDescription: "Здрави и персонализируеми палети за безопасно и ефикасно транспортиране и съхранение.",
    palletsCategory: "Логистика",
    palletsFeatures: ["Персонализируеми размери", "Здрава конструкция", "Експортен стандарт", "Устойчиви материали"],
    
    featuresLabel: "Ключови Характеристики",
    allProductsLabel: "Други Продукти",
    
    // Community Section
    communityBadge: "НАШАТА ОБЩНОСТ",
    communityTitleLine1: "Присъединете се към нашата общност от",
    communityTitleLine2: "доволни индустриални клиенти",
    communityDescription: "Във VARMET сме ангажирани с качеството, устойчивостта и иновациите, като гарантираме, че предоставяме решения, които подкрепят вашия бизнес, като същевременно опазват околната среда.",
    communityCta: "Започнете",
    communityImageCaption1: "Доверени от Индустриални Лидери",
    communityImageCaption2: "Изграждане на Дълготрайни Партньорства",
    
    // Environment Section
    environmentBadge: "НАШИЯТ АНГАЖИМЕНТ",
    environmentTitleLine1: "Нашият ангажимент",
    environmentTitleLine2: "към околната среда",
    environmentDescription: "Във VARMET ние даваме приоритет на устойчивите практики във всичко, което правим. От проектирането на екологични продукти до внедряването на ресурсно ефективни решения, ние сме ангажирани с намаляването на въздействието върху околната среда от нашите операции и тези на нашите клиенти.",
    environmentCta: "Започнете",
    environmentImageCaption1: "Устойчиви Практики",
    environmentImageCaption2: "Опазване на Нашата Планета",
    
    // Contact Section
    contactBadge: "НУЖДАЕТЕ СЕ ОТ ПОМОЩ?",
    contactTitleLine1: "Персонализирани Решения",
    contactTitleLine2: "За Вашия Бизнес",
    contactDescription: "Свържете се с нашия експертен екип, за да обсъдите индивидуални изисквания и специализирани решения, проектирани за нуждите на вашата индустрия.",
    contactCta: "Свържете се с Търговския Екип"
  }
};

const products = [
  {
    id: 1,
    key: "urea",
    image: ureaImg,
    categoryKey: "ureaCategory",
    featuresKey: "ureaFeatures"
  },
  {
    id: 2,
    key: "fuels",
    image: fuelsImg,
    categoryKey: "fuelsCategory",
    featuresKey: "fuelsFeatures"
  },
  {
    id: 3,
    key: "waste",
    image: wasteImg,
    categoryKey: "wasteCategory",
    featuresKey: "wasteFeatures"
  },
  {
    id: 4,
    key: "pallets",
    image: palletsImg,
    categoryKey: "palletsCategory",
    featuresKey: "palletsFeatures"
  }
];

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setIsLoaded(true);
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () => window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = productsContent[language as keyof typeof productsContent];

  return (
    <main className="bg-white mt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 shadow-sm backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">{t.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.subtitle}
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.description}
            </p>
            
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-5
                  text-base font-semibold text-white transition-all duration-300
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                <span>{t.cta}</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SECTION - Metal Barrels */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce" />
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg" />
                <span className="relative text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-blue-600 uppercase bg-gradient-to-r from-blue-500/5 to-cyan-500/5 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200 whitespace-nowrap">
                  {t.featuredBadge}
                </span>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            </div>
            
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl" />
              <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  VARMET MANUFACTURING
                </span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.featuredSubtitle}
            </p>
            
            {/* Animated Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3].map((dot) => (
                <div 
                  key={dot}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  style={{ animationDelay: `${dot * 200}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Featured Card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl overflow-hidden border border-gray-200/80 
              hover:border-blue-300/50 hover:shadow-2xl transition-all duration-700 group
              shadow-xl backdrop-blur-sm">
              
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side - Enhanced */}
                <div className="relative h-[500px] lg:h-auto overflow-hidden">
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <Image
                      src={metalBarrelsImg}
                      alt={t.featuredTitle}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-500/5" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
                      <div className="relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-xs font-semibold text-white 
                        border border-white/30 shadow-2xl backdrop-blur-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        ★ {t.featuredCategory}
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
                </div>

                {/* Content Side - Enhanced */}
                <div className="p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-tr-full" />
                  
                  <div className="relative">
                    {/* Title with Gradient Underline */}
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {t.featuredTitle}
                      </h3>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-4" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed font-light">
                      {t.featuredDescription}
                    </p>
                    
                    {/* Features Grid - Enhanced */}
                    <div className="mb-8 sm:mb-12">
                      <div className="flex items-center gap-3 mb-6 sm:mb-8">
                        <div className="w-10 h-px bg-gradient-to-r from-blue-600 to-cyan-500" />
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-widest">
                          {t.featuresLabel}
                        </h4>
                        <div className="w-10 h-px bg-gradient-to-r from-cyan-500 to-blue-600" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {t.featuredFeatures.map((feature, idx) => (
                          <div 
                            key={idx} 
                            className="group/feature flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 
                              border border-gray-100 hover:border-blue-200 hover:from-blue-50/30 hover:to-cyan-50/30 
                              transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                          >
                            <div className="relative mt-0.5 sm:mt-1">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur group-hover/feature:blur-md transition-all duration-300" />
                              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 
                                flex items-center justify-center group-hover/feature:from-blue-200 group-hover/feature:to-cyan-200 
                                transition-all duration-300">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 group-hover/feature:text-blue-700 transition-colors" 
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700 group-hover/feature:text-gray-900 font-medium transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Section - Enhanced */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Main CTA Button */}
                      <Link
                        href="/steelDrums"
                        className="group/btn relative inline-flex items-center justify-center rounded-xl sm:rounded-2xl 
                          bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 px-6 sm:px-10 py-4 sm:py-5
                          text-sm sm:text-base font-semibold text-white transition-all duration-500
                          hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-xl sm:hover:shadow-2xl
                          shadow-lg overflow-hidden w-full"
                      >
                        {/* Button Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 
                          group-hover/btn:from-blue-500/20 group-hover/btn:via-cyan-500/20 group-hover/btn:to-blue-500/20 
                          transition-all duration-500" />
                        
                        {/* Button Content */}
                        <span className="relative z-20 text-white">{t.featuredCta}</span>
                        <svg className="relative z-20 w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 text-white transform group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 transition-transform duration-300" 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      
                      {/* Phone Contact - Enhanced */}
                      <div className="flex items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur" />
                          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-left">
                          <a 
                            href="tel:+359890998837" 
                            className="text-sm sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 group/phone"
                          >
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                              {t.featuredPhone}
                            </span>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline-block opacity-0 group-hover/phone:opacity-100 translate-x-0 group-hover/phone:translate-x-1 transition-all duration-300" 
                              fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Grid Section */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className={`mb-12 sm:mb-16 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center mb-6 sm:mb-8 group">
              <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-3 sm:mr-4 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 uppercase">
                {t.allProductsLabel}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.productsTitleLine1}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.productsTitleLine2}
              </span>
            </h2>
          </div>

          {/* 2x2 Grid with Enhanced Styling */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const features = t[product.featuresKey as keyof typeof t];
              const featuresArray = Array.isArray(features) ? features : [];
              
              return (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 
                    hover:border-blue-200 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2
                    shadow-lg group-hover:shadow-xl sm:group-hover:shadow-2xl h-full">
                    
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={t[`${product.key}Title` as keyof typeof t] as string}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 
                          border border-gray-200/50 shadow-sm">
                          {t[product.categoryKey as keyof typeof t] as string}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-600/0 to-blue-600/0 
                        group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/0 
                        transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {t[`${product.key}Title` as keyof typeof t] as string}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                        {t[`${product.key}Description` as keyof typeof t] as string}
                      </p>
                      
                      {/* Features */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-700 mb-2 sm:mb-3 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                          {t.featuresLabel}
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {featuresArray.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 
                                flex items-center justify-center flex-shrink-0">
                                <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-600 truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom Indicator */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                        <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full 
                          group-hover:w-full transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50/50 via-white/60 to-blue-50/40 overflow-hidden">
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-200/20 to-emerald-200/15 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
  </div>
  
  {/* Floating Ornaments */}
  <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce" />
  <div className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
  <div className="absolute top-1/3 right-20 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image - Clean */}
      <div className={`relative group transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Glow Effect */}
        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={communityImg}
              alt={t.communityImageCaption1}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-500/5 group-hover:from-blue-600/15 group-hover:to-cyan-500/10 transition-all duration-500" />
          </div>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/80 shadow-sm mb-8 group">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-700 uppercase">
            {t.communityBadge}
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
          <span className="block">
            {t.communityTitleLine1}
          </span>
          <span className="block text-transparent bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text">
            {t.communityTitleLine2}
          </span>
        </h2>
        
        {/* Gradient Separator */}
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-8" />
        
        {/* Description */}
        <p className={`text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 lg:mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
          {t.communityDescription}
        </p>
        
        {/* CTA Button */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center rounded-2xl 
            bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-5
            text-base sm:text-lg font-semibold text-white transition-all duration-500
            hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-2xl
            shadow-lg overflow-hidden w-full sm:w-auto"
        >
          {/* Button Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 
            group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 
            transition-all duration-500" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 
            bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Button Content */}
          <span className="relative z-10">{t.communityCta}</span>
          <svg className="relative z-10 w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Environment Section - Clean */}
<section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-l from-green-200/20 to-emerald-200/15 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 rounded-full blur-3xl" />
  </div>
  
  {/* Floating Ornaments */}
  <div className="absolute top-10 right-20 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce" />
  <div className="absolute bottom-10 left-20 w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-ping" />
  <div className="absolute top-1/2 left-10 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Content */}
      <div className={`order-2 lg:order-1 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/80 shadow-sm mb-8 group">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-700 uppercase">
            {t.environmentBadge}
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
          <span className="block">
            {t.environmentTitleLine1}
          </span>
          <span className="block text-transparent bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text">
            {t.environmentTitleLine2}
          </span>
        </h2>
        
        {/* Gradient Separator */}
        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full mb-8" />
        
        {/* Description */}
        <p className={`text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 lg:mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
          {t.environmentDescription}
        </p>
        
        {/* CTA Button */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center rounded-2xl 
            bg-gradient-to-r from-emerald-600 to-teal-600 px-10 py-5
            text-base sm:text-lg font-semibold text-white transition-all duration-500
            hover:from-emerald-700 hover:via-teal-600 hover:to-emerald-700 hover:scale-[1.02] hover:shadow-2xl
            shadow-lg overflow-hidden w-full sm:w-auto"
        >
          {/* Button Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-emerald-500/0 
            group-hover:from-emerald-500/20 group-hover:via-teal-500/20 group-hover:to-emerald-500/20 
            transition-all duration-500" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 
            bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Button Content */}
          <span className="relative z-10">{t.environmentCta}</span>
          <svg className="relative z-10 w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Image - Clean */}
      <div className={`order-1 lg:order-2 relative group transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Glow Effect */}
        <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={environmentImg}
              alt={t.environmentImageCaption1}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-teal-500/5 group-hover:from-emerald-600/15 group-hover:to-teal-500/10 transition-all duration-500" />
          </div>
        </div>
        
        {/* Corner Accents */}
        <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl" />
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-teal-500/30 rounded-br-3xl" />
      </div>
    </div>
  </div>
</section>

      {/* Contact CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6">
          <div className={`text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-600 uppercase">
                {t.contactBadge}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t.contactTitleLine1}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.contactTitleLine2}
              </span>
            </h2>
            
            <p className={`text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.contactDescription}
            </p>
            
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-2xl 
                bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-5
                text-base font-semibold text-white transition-all duration-300
                hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg"
            >
              <span>{t.contactCta}</span>
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}